import { useState } from "react";
import { useAtom } from "jotai";
import { useSelector, useDispatch } from "react-redux";
import { usersAtom } from "../store/usersAtom";
import { useTodo } from "../store/useTodo";
import { setJobs } from "../store/counterSlice";

const Home = () => {
  const [users, setUsers] = useAtom(usersAtom);
  const { data: ages, setData } = useTodo();
  const jobs = useSelector(state => state.counter.data);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");

  const ids = [...new Set([...users.map(x => x.id), ...ages.map(x => x.id), ...jobs.map(x => x.id)])];
  const all = ids.map(id => ({ id, name: users.find(x => x.id === id)?.name ?? "", age: ages.find(x => x.id === id)?.age ?? "", job: jobs.find(x => x.id === id)?.job ?? "" }));

  function add() {
    setEditId(null); setName(""); setAge(""); setJob(""); setOpen(true);
  }

  function edit(item) {
    setEditId(item.id); setName(item.name); setAge(String(item.age)); setJob(item.job); setOpen(true);
  }

  function saveItem(array, item) {
    return array.some(x => x.id === item.id) ? array.map(x => x.id === item.id ? { ...x, ...item } : x) : [...array, item];
  }

  function save(event) {
    event.preventDefault();
    if (!name.trim() || !job.trim() || age.trim() === "" || !Number.isInteger(Number(age)) || Number(age) < 0) return;
    const id = editId ?? crypto.randomUUID();
    setUsers(previous => saveItem(previous, { id, name: name.trim() }));
    setData(saveItem(ages, { id, age: Number(age) }));
    dispatch(setJobs(saveItem(jobs, { id, job: job.trim() })));
    setOpen(false);
  }

  function remove(id) {
    setUsers(previous => previous.filter(x => x.id !== id));
    setData(ages.filter(x => x.id !== id));
    dispatch(setJobs(jobs.filter(x => x.id !== id)));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Users</h1>
          <button onClick={add} className="rounded bg-blue-600 px-4 py-2 text-white">Add User</button>
        </div>

        {all.length === 0 && <p className="text-gray-500">No users found.</p>}

        {all.map(item => (
          <div key={item.id} className="mb-3 rounded bg-white p-4 shadow">
            <h2 className="text-lg font-bold">{item.name || "No name"}</h2>
            <p>Age: {item.age === "" ? "—" : item.age}</p>
            <p>Job: {item.job || "—"}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => 
                edit(item)} className="rounded bg-blue-600 px-3 py-1 text-white">Edit</button>
              <button onClick={() => 
                remove(item.id)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">

          <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-lg">
            <h2 id="modal-title" className="mb-4 text-xl font-bold">{editId !== null ? "Edit User" : "Add User"}</h2>
            <form onSubmit={save} className="space-y-4">

              <label className="block">Name<input value={name} onChange={e =>
               setName(e.target.value)} 
              className="mt-1 w-full rounded border p-2" required autoFocus /></label>
              <label className="block">Age<input type="number" min="0" step="1" value={age} 
              onChange={e => setAge(e.target.value)}
               className="mt-1 w-full rounded border p-2" required /></label>
              <label className="block">Job<input value={job}
               onChange={e => setJob(e.target.value)} 
               className="mt-1 w-full rounded border p-2" 
               required />
               </label>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => 
                  setOpen(false)} className="rounded bg-gray-200 px-4 py-2">Cancel</button>
                <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;