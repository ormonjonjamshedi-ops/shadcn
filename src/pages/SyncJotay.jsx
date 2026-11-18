import { useState } from "react";
import { useAtom } from "jotai";
import { usersAtom } from "@/Component/todo";

const emptyUser = {
  name: "",
  age: "",
  email: "",
  phone: "",
  city: "",
};

const SyncJotay = () => {
  const [users, setUsers] = useAtom(usersAtom);

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(emptyUser);
  const [editId, setEditId] = useState(null); 

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function openAddDialog() {
    setForm(emptyUser);
    setEditId(null);
    setIsOpen(true);
  }

  function openEditDialog(user) {
    setEditId(user.id);
    setForm({
      name: user.name,
      age: user.age,
      email: user.email,
      phone: user.phone,
      city: user.city,
    });
    setIsOpen(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim()) return;

    if (editId === null) {
      const newUser = {
        ...form,
        id: crypto.randomUUID(),
        name: form.name.trim(),
        age: Number(form.age),
      };
      setUsers((previous) => [...previous, newUser]);
    } else {
      setUsers((previous) =>
        previous.map((user) =>
          user.id === editId
            ? {
                ...user,
                ...form,
                name: form.name.trim(),
                age: Number(form.age),
              }
            : user
        )
      );
    }

    setIsOpen(false);
    setForm(emptyUser);
    setEditId(null);
  }

  function deleteUser(id) {
    setUsers((previous) => previous.filter((user) => user.id !== id));
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users CRUD</h1>
        <button type="button"onClick={openAddDialog} className="rounded bg-blue-600 px-4 py-2 text-white">Add User</button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 text-gray-900">
            <h2 id="modal-title" className="mb-4 text-xl font-bold">{editId === null ? "Add User" : "Edit User"}</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input aria-label="Name"type="text"name="name"placeholder="Name"value={form.name}onChange={handleChange} className="w-full rounded border p-2"required/>
              <input aria-label="Age"type="number"name="age"placeholder="Age" min="0"value={form.age}onChange={handleChange}className="w-full rounded border p-2"required/>
              <input aria-label="Email" type="email"name="email" placeholder="Email"value={form.email} onChange={handleChange}className="w-full rounded border p-2"required/>

              <input aria-label="Phone"type="tel"name="phone"placeholder="Phone"value={form.phone}onChange={handleChange}className="w-full rounded border p-2"required/>

              <input aria-label="City"type="text"name="city"placeholder="City"value={form.city}onChange={handleChange}className="w-full rounded border p-2"required/>

              <div className="flex justify-end gap-2 pt-3">
                <button type="button"onClick={() => setIsOpen(false)}className="rounded bg-gray-500 px-4 py-2 text-white">
                  Cancel
                </button>
                <button type="submit" className={`rounded px-4 py-2 text-white ${editId === null ? "bg-blue-600" : "bg-green-600"}`}>
                  {editId === null ? "Add" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <div key={user.id} className="rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-bold">{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.city}</p>

            <div className="mt-4 flex gap-2">
              <button type="button" onClick={() => openEditDialog(user)}className="rounded bg-yellow-500 px-3 py-1 text-white">
                Edit
              </button>

              <button type="button"onClick={() => deleteUser(user.id)} className="rounded bg-red-600 px-3 py-1 text-white">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyncJotay;