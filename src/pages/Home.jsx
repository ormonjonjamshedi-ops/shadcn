import useTodo from '@/Component/todo'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const {data,loading,getData,addData,deleteData,editData} = useTodo()

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [rule, setRule] = useState('')

  const [editId, setEditId] = useState(null)
  const [open, setOpen] = useState(false)
 
  useEffect(() => {
    getData()
  }, [])

  const clearInputs = () => {
    setImage('')
    setName('')
    setRule('')
    setEditId(null)
  }
 
  const handleAdd = () => {
    clearInputs()
    setOpen(true)
  }
  const handleEdit = (user) => {
    setImage(user.image || '')
    setName(user.name || '')
    setRule(user.rule || '')
    setEditId(user.id)
    setOpen(true)
  }

 
  const handleSubmit = async () => {

    if (!name.trim() || !rule.trim()) return

    const newUser = {  image, name, rule  }

    if (editId !== null) {
      await editData(editId, newUser)
    } else {
      await addData(newUser)
    }
    clearInputs()
    setOpen(false)
  }


  const handleDelete = async (id) => {
    await deleteData(id)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-8">
        <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">+ Add User</button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{editId !== null ? 'Edit User' : 'Add User'}</h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-2 font-medium">
                  Image URL
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-lg w-full outline-none focus:border-blue-500"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-lg w-full outline-none focus:border-blue-500"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

             

              <div>
                <label className="block mb-2 font-medium">
                  Rule
                </label>

                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-lg w-full outline-none focus:border-blue-500"
                  placeholder="Enter rule"
                  value={rule}
                  onChange={(e) => setRule(e.target.value)}
                />
              </div>

            </div>
            <div className="flex gap-3 mt-7">
              <button
                onClick={() => {
                  setOpen(false)
                  clearInputs()
                }}className="bg-gray-400 hover:bg-gray-500 text-white p-3 rounded-lg flex-1">Cancel</button>

              <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex-1">{editId !== null ? 'Save Changes' : 'Add User'}</button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <h2 className="text-center text-xl font-semibold">
          Loading...
        </h2>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((user) => (

            <div key={user.id}className="bg-white border border-gray-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition">
              <img src={user.image || 'https://placehold.co/400x250?text=No+Image'}alt={user.name}className="w-full h-48 object-cover rounded-xl"/>

              <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h2>
              <p className="text-gray-500 mt-2 text-lg">{user.rule}</p>

              <div className="flex gap-3 mt-5">
                <button onClick={() => handleEdit(user)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg flex-1">Edit</button>

                <button onClick={() => handleDelete(user.id)} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg flex-1">Delete</button>
              </div>
            </div>  ))}

        </div>

      )}

    </div>
  )
}

export default Home