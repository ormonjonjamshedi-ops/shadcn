import { create } from "zustand";
import axios from "axios";
const API = "https://to-dos-api.softclub.tj/api/to-dos";

export const useUsers = create((set, get) => ({
  users: [],
  loading: false,
  search: "",

  setSearch: (value) => set({ search: value }),

 
  getUsers: async () => {
    set({ loading: true });
    const res = await axios.get(API);
    set({ users: res.data.data, loading: false }); 
  },

 
  addUser: async (user) => {
    await axios.post(API, user);
    get().getUsers();
  },

 
  editUser: async (user) => {
    await axios.put(API, user); 
    get().getUsers();
  },

  deleteUser: async (id) => {
    await axios.delete(`${API}?id=${id}`); 
    get().getUsers();
  },
}));