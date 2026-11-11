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

const UserInputs = ({ form, setForm }) => {
  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <>
      <input
        aria-label="Name"
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded border p-2"
        required/>

      <input
        aria-label="Age"
        type="number"
        name="age"
        placeholder="Age"
        min="0"
        value={form.age}
        onChange={handleChange}
        className="w-full rounded border p-2"
        required/>

      <input
        aria-label="Email"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded border p-2"
        required/>

      <input
        aria-label="Phone"
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded border p-2"
        required/>

      <input
        aria-label="City"
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        className="w-full rounded border p-2"
        required/>
    </>
  );
};

const About = () => {
  const [users, setUsers] = useAtom(usersAtom);

  const [openAdd, setOpenAdd] = useState(false);
  const [addForm, setAddForm] = useState(emptyUser);

  const [openEdit, setOpenEdit] = useState(false);
  const [editForm, setEditForm] = useState(emptyUser);
  const [editId, setEditId] = useState(null);

  function openAddDialog() {
    setAddForm(emptyUser);
    setOpenEdit(false);
    setOpenAdd(true);
  }

  function openEditDialog(user) {
    setEditId(user.id);

    setEditForm({
      name: user.name,
      age: user.age,
      email: user.email,
      phone: user.phone,
      city: user.city,
    });

    setOpenAdd(false);
    setOpenEdit(true);
  }

  function addUser(event) {
    event.preventDefault();

    if (!addForm.name.trim()) return;

    const newUser = {
      ...addForm,
      id: crypto.randomUUID(),
      name: addForm.name.trim(),
      age: Number(addForm.age),
    };

    setUsers((previous) => [...previous, newUser]);

    setAddForm(emptyUser);
    setOpenAdd(false);
  }

 
  function editUser(event) {
    event.preventDefault();

    if (!editForm.name.trim()) return;

    setUsers((previous) =>
      previous.map((user) =>
        user.id === editId
          ? {
              ...user,
              ...editForm,
              name: editForm.name.trim(),
              age: Number(editForm.age),
            }
          : user
      )
    );

    setOpenEdit(false);
    setEditId(null);
  }

  
  function deleteUser(id) {
    setUsers((previous) =>
      previous.filter((user) => user.id !== id)
    );
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Users CRUD
        </h1>

        <button
          type="button"
          onClick={openAddDialog}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Add User
        </button>
      </div>

      {openAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-title"
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 text-gray-900"
          >
            <h2
              id="add-title"
              className="mb-4 text-xl font-bold"
            >
              Add User
            </h2>

            <form onSubmit={addUser} className="space-y-3">
              <UserInputs form={addForm} setForm={setAddForm}/>

              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setOpenAdd(false)} className="rounded bg-gray-500 px-4 py-2 text-white">Cancel</button>
                <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      
      {openEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="edit-title" className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 text-gray-900">
            <h2 id="edit-title" className="mb-4 text-xl font-bold"
            >Edit User</h2>

            <form onSubmit={editUser} className="space-y-3">
              <UserInputs
                form={editForm}
                setForm={setEditForm}/>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setOpenEdit(false)}
                  className="rounded bg-gray-500 px-4 py-2 text-white"
                >Cancel</button>

                <button
                  type="submit"
                  className="rounded bg-green-600 px-4 py-2 text-white"
                >  Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <div  key={user.id} className="rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-bold">{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.city}</p>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => openEditDialog(user)}
                className="rounded bg-yellow-500 px-3 py-1 text-white">
                Edit</button>

              <button
                type="button"
                onClick={() => deleteUser(user.id)}
                className="rounded bg-red-600 px-3 py-1 text-white">
                Delete</button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default About;