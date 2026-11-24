import { useState } from "react";

import {
  useAddUser,
  useDeleteUser,
  useEditUser,
  useUsers,
} from "./api/todo";

function App() {
  const { data, isLoading, isError } = useUsers();

  const addUser = useAddUser();
  const deleteUser = useDeleteUser();
  const editUser = useEditUser();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function clearForm() {
    setName("");
    setDescription("");
    setImages([]);
    setEditId(null);
    setIsModalOpen(false);

    const fileInput = document.getElementById("imageInput");

    if (fileInput) {
      fileInput.value = "";
    }
  }

  function openAddModal() {
    clearForm();
    setIsModalOpen(true);
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alert("Please enter a name and description!");
      return;
    }

    if (editId !== null) {
      editUser.mutate(
        {
          Id: editId,
          Name: name,
          Description: description,
        },
        {
          onSuccess: clearForm,
        }
      );
    } 

    else {
      if (images.length === 0) {
        alert("Please select at least one image!");
        return;
      }

      addUser.mutate(
        {
          Name: name,
          Description: description,
          Images: images,
        },
        {
          onSuccess: clearForm,
        }
      );
    }
  }

 
  function handleEdit(user) {
    setEditId(user.id);
    setName(user.name || "");
    setDescription(user.description || "");
    setImages([]);
    setIsModalOpen(true);
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteUser.mutate(id);
    }
  }

  if (isLoading) {
    return (
      <h1 className="text-center text-3xl mt-20">Loading...</h1>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center text-red-500 text-2xl mt-20">Something went wrong!</h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">My ToDo List</h1>
        <div className="flex justify-end mb-6">
          <button onClick={openAddModal} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700">+ Add ToDo</button>
        </div>


{isModalOpen && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
    <div className="bg-white w-full max-w-lg p-6 rounded-xl">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold"> {editId !== null ? "Edit ToDo" : "Add ToDo"}</h2>
        <button onClick={clearForm}className="text-2xl text-red-500">X</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Name</label>

        <input type="text"placeholder="Enter name"
          value={name}onChange={(e) => setName(e.target.value)}className="w-full border p-3 rounded-lg mb-4"
        />

        <label className="block mb-2 font-semibold">Description</label>
        <textarea placeholder="Enter description" value={description}
          onChange={(e) => setDescription(e.target.value)}className="w-full border p-3 rounded-lg mb-4"rows="3"/>
        <label className="block mb-2 font-semibold">Images</label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
          className="w-full border p-3 rounded-lg mb-5"
        />
        <div className="flex justify-end gap-3">
          <button type="button" onClick={clearForm} className="bg-gray-400 text-white px-5 py-2 rounded-lg">Close</button>
          <button type="submit" disabled={addUser.isPending || editUser.isPending} className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            {addUser.isPending || editUser.isPending? "Loading...": editId !== null? "Update": "Add"}
          </button>
        </div>
      </form>
    </div>
   </div>
          )}
        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Description</th>
                <th className="p-4">Status</th>
                <th className="p-4">Delete</th>
                <th className="p-4">Edit</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((user) => (
                <tr key={user.id}  className="border-b hover:bg-gray-50" >
                  <td className="p-4">
                    {user.images?.length > 0 ? (
                      <img src={`https://to-dos-api.softclub.tj/images/${user.images[0].imageName}`}alt={user.name} className="w-16 h-16 object-cover rounded-lg"/>
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-sm">No image</div>
                    )}
                  </td>

                  <td className="p-4 font-semibold">{user.name}</td>
                  <td className="p-4">{user.description}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${user.isCompleted? "bg-green-500": "bg-orange-500"}`}>{user.isCompleted ? "Completed" : "Pending"}</span>
                  </td>

                  <td className="p-4">
                    <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                  </td>

                  <td className="p-4">
                    <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Edit</button>
                  </td>

                </tr>
              ))}
      
              {data?.length === 0 && (
                <tr>
                    <td colSpan="6"className="text-center p-8 text-gray-500">No tasks found!</td>
                    </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;