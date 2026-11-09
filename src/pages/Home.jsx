import { imageApi, useTodo } from "@/Component/todo";
import { useEffect, useState } from "react";

const Home = () => {
  const {  data, saving, getData, addData,editData, deleteData,} = useTodo();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getData();
  }, [getData]);

  function openAdd() {
    setId(null);
    setName("");
    setDescription("");
    setOpen(true);
  }

  function openEdit(item) {
    setId(item.id);
    setName(item.name);
    setDescription(item.description);

    setOpen(true);
  }

  async function saveTodo(e) {
  e.preventDefault();

  if (saving) return;
  if (!name.trim() || !description.trim()) return;

  const todo = {
    name: name.trim(),
    description: description.trim(),
  };

  let success;

  if (id === null) {
    success = await addData(todo);
  } else {
    success = await editData({ ...todo, id });
  }

  if (success) {
    setOpen(false);
  }
}

  return (
    <div className="mx-auto max-w-xl p-5">
      <h1 className="mb-4 text-2xl font-bold">
        Todo List
      </h1>

      <button
        onClick={openAdd}
        disabled={saving}
        className="mb-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Add Todo
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="w-full max-w-sm rounded bg-white p-5 text-black"
          >
            <h2
              id="dialog-title"
              className="mb-4 text-xl font-bold"
            >
              {id === null ? "Add Todo" : "Edit Todo"}
            </h2>

            {error && (
              <p role="alert" className="mb-3 text-red-600">
                {error}
              </p>
            )}

            <form onSubmit={saveTodo} className="space-y-3">
              <input
                aria-label="Name"
                placeholder="Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                className="w-full rounded border p-2"
                required
              />

              <input
                aria-label="Description"
                placeholder="Description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                className="w-full rounded border p-2"
                required
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded bg-green-600 px-4 py-2 text-white"
                >
                  {saving ? "Saving..." : "Save"}
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  disabled={saving}
                  className="rounded bg-gray-500 px-4 py-2 text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!open && error && (
        <p role="alert" className="mb-3 text-red-600">
          {error}
        </p>
      )}
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-3 rounded border p-3"
        >
          {(item.images || []).map((image, index) => (
            <img
              key={index}
              src={imageApi + (image.imageName || image)}
              alt={item.name}
              className="mb-2 h-32 w-full rounded object-cover"
            />
          ))}

          <h2 className="text-lg font-bold">
            {item.name}
          </h2>

          <p>{item.description}</p>

          <div className="mt-3 flex gap-2">
            <button
              onClick={() => openEdit(item)}
              disabled={saving}
              className="rounded bg-yellow-500 px-3 py-1 text-white"
            >
              Edit
            </button>

            <button
              onClick={() => deleteData(item.id)}
              disabled={saving}
              className="rounded bg-red-600 px-3 py-1 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;