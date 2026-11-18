import { useState } from "react";
import { useTodo } from "@/Component/todos";

export default function SyncZustand() {
  const data = useTodo((state) => state.data)
  const addUser = useTodo((state) => state.addUser)
  const updateUser = useTodo((state) => state.updateUser)
  const deleteUser = useTodo((state) => state.deleteUser)
  const [search, setSearch] = useState("")

  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")
  const [work, setWork] = useState("")
  const [img, setImg] = useState("")

  const [infoUser, setInfoUser] = useState(null);

  const inputClass = "mt-1 w-full rounded border px-3 py-2";

  function clearForm() {
    setName("")
    setAge("")
    setCity("")
    setWork("")
    setImg("")
    setEditingId(null)
  }

  function openAdd() {
    clearForm()
    setShowForm(true)
  }

  function openEdit(user) {
    setEditingId(user.id);
    setName(user.name);
    setAge(String(user.age));
    setCity(user.city || "");
    setWork(user.work || "");
    setImg(user.img || "");
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    clearForm();
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !age || !city.trim() || !work.trim()) {
      alert("Fill in all fields");
      return;
    }

    const user = {
      name: name.trim(),
      age: Number(age),
      city: city.trim(),
      work: work.trim(),
      img: img.trim(),
    };

    if (editingId === null) addUser(user);
    else updateUser(editingId, user)
    closeForm();
  }

  function handleDelete(user) {
    if (confirm("Delete " + user.name + "?")) deleteUser(user.id);
  }

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <input  type="search" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded border px-3 py-2 sm:max-w-sm"/>
        <button type="button" onClick={openAdd} className="rounded bg-blue-600 px-4 py-2 text-white">Add User</button>
      </div>
      {filteredUsers.length === 0 ? (
        <p className="py-14 text-center text-gray-500">
          {data.length === 0 ? "No users yet" : "No users found"}
        </p>
      ) : (
        <div className="overflow-x-auto rounded border">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Age</th>
                <th className="p-3">City</th>
                <th className="p-3">Work</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      {user.img ? (
                        <img src={user.img} alt="" className="h-10 w-10 rounded-full object-cover"/>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-3">{user.age}</td>
                  <td className="p-3">{user.city}</td>
                  <td className="p-3">{user.work}</td>
                  <td className="whitespace-nowrap p-3 text-right">
                    <button type="button" onClick={() => setInfoUser(user)} className="mr-2 rounded border px-3 py-1">Info</button>
                    <button type="button" onClick={() => openEdit(user)} className="mr-2 rounded border px-3 py-1">Edit</button>
                    <button type="button" onClick={() => handleDelete(user)} className="rounded border border-red-500 px-3 py-1 text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeForm}>
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="mb-4 text-xl font-bold">{editingId === null ? "Add User" : "Edit User"}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="block">
                Full name
                <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  Age
                  <input type="number" min="0" className={inputClass} value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <label className="block">
                  City
                  <input className={inputClass} value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
              </div>
              <label className="block">
                Work
                <input className={inputClass} value={work} onChange={(e) => setWork(e.target.value)} />
              </label>

              <label className="block">
                Image URL (optional)
                <input className={inputClass} placeholder="Image" value={img} onChange={(e) => setImg(e.target.value)} />
              </label>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={closeForm} className="rounded border px-4 py-2">Cancel</button>
                <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
                  {editingId === null ? "Add User" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {infoUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setInfoUser(null)}>
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="mb-4 text-xl font-bold">User Information</h2>
            
            <div className="mb-4 flex flex-col items-center gap-2">
              {infoUser.img ? (
                <img
                  src={infoUser.img}
                  alt={infoUser.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">
                  {infoUser.name.charAt(0).toUpperCase()}
                </div>
              )}
              <h3 className="text-lg font-semibold">{infoUser.name}</h3>
            </div>

            <div className="divide-y rounded border px-4">
              <p className="flex justify-between py-3">
                <span className="text-gray-500">Age</span>
                <span>{infoUser.age} years</span>
              </p>
              <p className="flex justify-between py-3">
                <span className="text-gray-500">City</span>
                <span>{infoUser.city}</span>
              </p>
              <p className="flex justify-between py-3">
                <span className="text-gray-500">Work</span>
                <span>{infoUser.work}</span>
              </p>
            </div>

            <div className="mt-4 text-right">
              <button type="button" onClick={() => setInfoUser(null)}className="rounded border px-4 py-2">Close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}