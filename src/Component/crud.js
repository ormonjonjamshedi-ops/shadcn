import { atom } from "jotai";

export const usersAtom = atom([
  {
    id: 1,
    name: "Ali",
    age: 20,
    email: "ali@example.com",
    phone: "992000000001",
    city: "Dushanbe",
  },
  {
    id: 2,
    name: "Umar",
    age: 25,
    email: "umar@example.com",
    phone: "992000000002",
    city: "Khujand",
  },
]);