import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://to-dos-api.softclub.tj/api/to-dos";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await axios.get(API);
  return res.data.data; 
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user, { dispatch }) => {
    await axios.post(API, user);
    dispatch(getUsers()); 
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (user, { dispatch }) => {
    await axios.put(API, user); 
    dispatch(getUsers());
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { dispatch }) => {
    await axios.delete(`${API}?id=${id}`);
    dispatch(getUsers());
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      });
  },
});
export const { setSearch } = usersSlice.actions;
export default usersSlice.reducer;