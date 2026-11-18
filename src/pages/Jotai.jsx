
import { Suspense, useState } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import {
  usersAtom,
  searchAtom,
  addUserAtom,
  editUserAtom,
  deleteUserAtom,
} from "@/Component/atoms";

function Jotai() {
  const users = useAtomValue(usersAtom);
  const [search, setSearch] = useAtom(searchAtom);

  const addUser = useSetAtom(addUserAtom);
  const editUser = useSetAtom(editUserAtom);
  const deleteUser = useSetAtom(deleteUserAtom);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [idx, setIdx] = useState(null);
  const [show, setShow] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !age) return;
    const data = {
      name: name.trim(),
      age: Number(age),
    };
    try {
      if (idx !== null) {
        await editUser({
          ...data,
          id: idx,
        });
      } else {
        await addUser(data);
      }
      setName("");
      setAge("");
      setIdx(null);
      setShow(false);

    } catch (error) {
      console.log(error);
    }
  }

  function handleAdd() {
    setName("");
    setAge("");
    setIdx(null);
    setShow(true);
  }

  function handleEdit(user) {
    setName(user.name);
    setAge(String(user.age));
    setIdx(user.id);
    setShow(true);
  }

  async function handleDelete(id) {
    if (confirm("Delete user?")) {
      try {
        await deleteUser(id);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const filtered = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="mb-5 flex gap-3">

        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />

        <button onClick={handleAdd} className="whitespace-nowrap rounded bg-blue-600 px-4 py-2 text-white">Add user</button>

      </div>
      {show && (
        <form onSubmit={handleSubmit} className="mb-5 space-y-3 rounded-lg border bg-white p-5">

          <h2 className="text-xl font-bold">{idx !== null ? "Edit user" : "Add user"}</h2>
          <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2"/>
          <input type="number"placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}className="w-full rounded border px-3 py-2"/>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShow(false)} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      )}

      <Suspense fallback={
        <p className="py-10 text-center">Loading...</p>
      }>
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-gray-500">
            No users found
          </p>

        ) : (

          <table className="w-full border text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Age</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (

                <tr key={u.id} className="border-t">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.age}</td>
                <td className="p-3 text-right">
                    <button onClick={() => handleEdit(u)} className="mr-2 rounded border px-3 py-1">Edit</button>
                    <button onClick={() => handleDelete(u.id)} className="rounded border border-red-500 px-3 py-1 text-red-500">Delete</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Suspense>
    </main>
  );
}

export default Jotai;
