import { useUsers } from "@/Component/useUser";
import { useEffect, useState } from "react";

export default function Zustand() {
  const users = useUsers((s) => s.users);
  const loading = useUsers((s) => s.loading);
  const search = useUsers((s) => s.search);
  
  const setSearch = useUsers((s) => s.setSearch);
  const getUsers = useUsers((s) => s.getUsers);
  const deleteUser = useUsers((s) => s.deleteUser);
  const addUser = useUsers((s) => s.addUser);
  const editUser = useUsers((s) => s.editUser);

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const filtered = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase())
  );

  function openAdd() {
    setSelected(null);
    setShowModal(true);
  }

  function openEdit(user) {
    setSelected(user);
    setShowModal(true);
  }
    
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !age) return;
   const data = { name: name.trim(), age: Number(age) };
    if (selected) editUser({ ...data, id: selected.id });
  else addUser(data);
     setShowModal(false);
        }
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="mb-4 flex justify-between gap-4">
        <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}className="w-full rounded border px-3 py-2"/>
        <button onClick={openAdd}className="whitespace-nowrap rounded bg-blue-600 px-4 py-2 text-white">Add user</button>
      </div>
      {loading ? (
        <p className="py-10 text-center">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-center text-gray-500">No users found</p>
      ) : (
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.age}</td>
                <td className="p-3 text-right">
                  <button onClick={() => openEdit(u)}className="mr-2 rounded border px-3 py-1">Edit</button>
                  <button onClick={() => deleteUser(u.id)}className="rounded border border-red-500 px-3 py-1 text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showModal && (() => {
        const [name, setName] = useState(selected ? selected.name : "");
        const [age, setAge] = useState(selected ? String(selected.age) : "");

        const inputClass = "mt-1 w-full rounded border px-3 py-2";
        return (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-3 rounded-lg bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold">{selected ? "Edit user" : "Add user"}</h2>

              <label className="block">
                Name
                <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name..."/>
              </label>

              <label className="block">
                Age
                <input type="number" className={inputClass} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter name..."/>
              </label>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button"  onClick={() => setShowModal(false)} className="rounded border px-4 py-2 hover:bg-gray-100">Cancel</button>
                <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Save</button>
              </div>
            </form>
          </div>
        );
      })()}
    </main>
  );
}