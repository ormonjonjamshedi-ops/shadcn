import axios from "axios";
import { create } from "zustand";

export const api = "https://to-dos-api.softclub.tj/api/to-dos";
export const imageApi = "https://to-dos-api.softclub.tj/images/";

export const useTodo = create((set, get) => ({
  data: [],
  getData: async () => {
    try {
      const response = await axios.get(api);

      set({
        data: response.data.data || response.data,
      });
    } catch (error) {
      console.log(error);
    }
  },

 
  addData: async (todo) => {
    try {
      const form = new FormData();
      form.append("name", todo.name);
      form.append("description", todo.description);
      await axios.post(api, form);
      await get().getData();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  editData: async (todo) => {
    try {
      const form = new FormData();

      form.append("id", todo.id);
      form.append("name", todo.name);
      form.append("description", todo.description);

      await axios.put(api, form);
      await get().getData();

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

 
  deleteData: async (id) => {
    try {
      await axios.delete(api, {
        params: { id },
      });
      await get().getData();
    } catch (error) {
      console.log(error);
    }
  },
}));