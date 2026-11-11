import { createSlice } from "@reduxjs/toolkit";

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

export const { addJob, setJobs } = counterSlice.actions;

export default counterSlice.reducer;