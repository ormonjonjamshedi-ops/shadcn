import { atom } from "jotai";
import axios from "axios";

const API = "https://to-dos-api.softclub.tj/api/to-dos";

export const searchAtom = atom("");
const refreshAtom = atom(0);

export const usersAtom = atom(async (get) => {
  get(refreshAtom);
  const res = await axios.get(API);
  return res.data.data;
});

export const addUserAtom = atom(null, async (get, set, user) => {
  await axios.post(API, user);
  set(refreshAtom, (n) => n + 1);
});

export const editUserAtom = atom(null, async (get, set, user) => {
  await axios.put(API, user);
  set(refreshAtom, (n) => n + 1);
});

export const deleteUserAtom = atom(null, async (get, set, id) => {
  await axios.delete(`${API}?id=${id}`);
  set(refreshAtom, (n) => n + 1);
});
