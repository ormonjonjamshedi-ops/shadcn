import { create } from "zustand";

export const useTodo = create((set) => ({
  data: [
    {
      id: 1,
      name: "Abu",
      age: 13,
      city: "Dushanbe",
      img: "./public/Ellipse.png",
      work: "Student",
    },
    {
      id: 2,
      name: "salim",
      age: 18,
      city: "Khujand",
      img: "./public/Ellipsee.png",
      work: "Developer",
    },
  ],

  count: 0,

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  addUser: (user) => {
    const newUser = {
      ...user,
      id: crypto.randomUUID(),
    };

    set((state) => ({
      data: [...state.data, newUser],
    }));
  },

  updateUser: (id, updatedUser) =>
    set((state) => ({
      data: state.data.map((user) =>
        user.id === id
          ? { ...user, ...updatedUser, id: user.id }
          : user
      ),
    })),

  deleteUser: (id) =>
    set((state) => ({
      data: state.data.filter((user) => user.id !== id),
    })),
}));