
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  setSearch,
} from "@/reduser/users";

export default function Redux() {
  const dispatch = useDispatch();

  const users = useSelector((s) => s.users.users);
  const loading = useSelector((s) => s.users.loading);
  const search = useSelector((s) => s.users.search);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [idx, setIdx] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !age) return;

    const data = {
      name: name,
      age: Number(age),
    };

    if (idx !== null) {
      dispatch(editUser({ ...data, id: idx }));
    } else {
      dispatch(addUser(data));
    }
    setName("");
    setAge("");
    setIdx(null);
    setShow(false);
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

  const filtered = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-5 flex gap-3">
        <input type="search" placeholder="Search..." value={search}onChange={(e) => dispatch(setSearch(e.target.value))}className="w-full rounded border p-2"/>
        <button onClick={handleAdd} className="rounded bg-blue-600 px-4 text-white">Add</button>
      </div>

      {show && (
        <form onSubmit={handleSubmit} className="mb-5 space-y-3 rounded border p-5">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border p-2"/>
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}className="w-full rounded border p-2"/>

          <div className="flex gap-2">
            <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white">{idx !== null ? "Edit" : "Save"}</button>
            <button type="button" onClick={() => setShow(false)} className="rounded bg-gray-400 px-4 py-2 text-white">Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
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
                <td className="p-3">
                  <button onClick={() => handleEdit(u)} className="mr-2 rounded bg-blue-500 px-3 py-1 text-white">Edit</button>
                  <button onClick={() => dispatch(deleteUser(u.id))} className="rounded bg-red-500 px-3 py-1 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
