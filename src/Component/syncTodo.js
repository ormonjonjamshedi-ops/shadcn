
import { atom } from "jotai";
import { createSlice } from '@reduxjs/toolkit'
import { create } from "zustand";

export const usersAtom = atom([
  {
    id: 1,
    name: "Ali"
  },
  {
    id: 2,
    name: "Umar",
   
  },
]);

export const useTodo = create((set) => ({
  data: [
    {
      id: 1,
      age: 13,
    },
    {
      id: 2,
      age: 18,
     
    },
  ],

  count: 0,
}));



const initialState = {
  data: [
    { id: 1, job: "student" },
    { id: 2, job: "teacher" },
    { id: 3, job: "bloger" },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addJob } = counterSlice.actions;
export default counterSlice.reducer;
