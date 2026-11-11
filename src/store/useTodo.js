import { create } from "zustand";

export const useTodo = create((set) => ({
  data: [
    { id: 1, age: 13 },
    { id: 2, age: 18 },
  ],
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));