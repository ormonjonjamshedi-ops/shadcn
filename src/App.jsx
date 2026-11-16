import { useState } from 'react';
import { useFormik } from 'formik';

import {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} from './api/todo';

const IMG_URL = 'https://to-dos-api.softclub.tj/images/';

const inputCls =
  'w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20';

const validate = (v) => {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Name is required';
  if (!v.description.trim()) errors.description = 'Description is required';
  return errors;
};

function App() {
  const { data, isLoading, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingCompleted, setEditingCompleted] = useState(false);
  const [infoId, setInfoId] = useState(null);

  const { data: info, isFetching: infoLoading } = useGetTodoByIdQuery(infoId, {
    skip: !infoId,
  });

  const formik = useFormik({
    initialValues: { name: '', description: '', image: null },
    validate,
    onSubmit: async (values) => {
      try {
        if (editingId) {
          await editTodo({
            id: editingId,
            name: values.name,
            description: values.description,
            isCompleted: editingCompleted,
          }).unwrap();
        } else {
          const fd = new FormData();
          fd.append('Name', values.name);
          fd.append('Description', values.description);
          if (values.image) fd.append('Images', values.image);
          await addTodo(fd).unwrap();
        }
        closeForm();
      } catch (e) {
        console.error(e);
        alert('Something went wrong');
      }
    },
  });

  const openAdd = () => {
    setEditingId(null);
    setEditingCompleted(false);
    formik.resetForm();
    setFormOpen(true);
  };

  const openEdit = (todo) => {
    setEditingId(todo.id);
    setEditingCompleted(todo.isCompleted ?? false);
    formik.setValues({
      name: todo.name ?? '',
      description: todo.description ?? '',
      image: null,
    });
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingId(null);
    formik.resetForm();
  };

  const handleDelete = async (id) => {
    if (confirm('Delete this task?')) {
      try {
        await deleteTodo(id).unwrap();
        if (infoId === id) setInfoId(null);
      } catch (e) {
        console.error(e);
        alert('Failed to delete');
      }
    }
  };

  const todos = data?.data || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h1 className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent">
            Todo List
          </h1>
          <button
            onClick={openAdd}
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:opacity-90"
          >
            Add Task
          </button>
        </header>

        {isLoading && (
          <div className="flex justify-center py-16 text-indigo-500">Loading...</div>
        )}
        {error && (
          <p className="rounded-xl bg-red-50 p-4 text-center text-red-600">
            Failed to load tasks
          </p>
        )}
        {!isLoading && !error && todos.length === 0 && (
          <p className="py-16 text-center text-slate-400">No tasks yet</p>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {todos.map((t) => (
            <div
              key={t.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-40 w-full overflow-hidden bg-gradient-to-br from-indigo-100 to-pink-100">
                {t.images?.[0]?.imageName ? (
                  <img
                    src={IMG_URL + t.images[0].imageName}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    alt={t.name}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-bold text-indigo-300">
                    {t.name?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="truncate font-semibold text-slate-800">{t.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-500">{t.description}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setInfoId(t.id)}
                    className="flex-1 rounded-lg bg-sky-50 py-2 text-xs font-medium text-sky-600 transition hover:bg-sky-100"
                  >
                    Info
                  </button>
                  <button
                    onClick={() => openEdit(t)}
                    className="flex-1 rounded-lg bg-amber-50 py-2 text-xs font-medium text-amber-600 transition hover:bg-amber-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="flex-1 rounded-lg bg-red-50 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INFO MODAL */}
        {infoId && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setInfoId(null)}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setInfoId(null)}
                className="absolute right-4 top-4 rounded-full px-2 py-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                ✕
              </button>

              {infoLoading ? (
                <div className="flex justify-center py-10 text-indigo-500">
                  Loading details...
                </div>
              ) : (
                <>
                  <h3 className="pr-8 text-xl font-bold text-slate-800">{info?.data?.name}</h3>
                  <p className="mt-2 text-slate-600">{info?.data?.description}</p>

                  <div className="mt-4 grid max-h-60 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3">
                    {info?.data?.images?.map((img) => (
                      <img
                        key={img.id}
                        src={IMG_URL + img.imageName}
                        alt=""
                        className="h-28 w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* FORM MODAL (Add / Edit) */}
      {formOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeForm}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeForm}
              className="absolute right-4 top-4 rounded-full px-2 py-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              ✕
            </button>

            <h2 className="mb-4 pr-8 text-xl font-bold text-slate-800">
              {editingId ? 'Edit Task' : 'New Task'}
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <input
                  name="name"
                  placeholder="Name"
                  className={inputCls}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
                )}
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Description"
                  rows={3}
                  className={inputCls}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="mt-1 text-xs text-red-500">{formik.errors.description}</p>
                )}
              </div>

              {!editingId && (
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 px-4 py-3 text-sm text-slate-500 transition hover:border-indigo-400 hover:bg-indigo-50/50">
                  <span className="text-xl">🖼️</span>
                  <span className="truncate">
                    {formik.values.image ? formik.values.image.name : 'Choose an image'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      formik.setFieldValue('image', e.currentTarget.files[0])
                    }
                  />
                </label>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
                >
                  {editingId ? 'Save' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;