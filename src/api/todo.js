import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://to-dos-api.softclub.tj/api/to-dos";


export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data.data;
    },
  });
}

export function useAddUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user) => {
      const formData = new FormData();

      formData.append("Name", user.Name);
      formData.append("Description", user.Description);

      user.Images.forEach((image) => {
        formData.append("Images", image);
      });

      const response = await axios.post(API_URL, formData);
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      console.log("ADD ERROR:", error.response?.data);
    },
  });
}
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await axios.delete(API_URL, {
        params: { id },
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      console.log("DELETE ERROR:", error.response?.data);
    },
  });
}

export function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user) => {
      const response = await axios.put(API_URL, {
        Id: user.Id,
        Name: user.Name,
        Description: user.Description,
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("EDIT ERROR:", error.response?.data);
    },
  });
}