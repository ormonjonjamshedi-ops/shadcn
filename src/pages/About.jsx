import React, { useState } from 'react'
import useSyncTodo from '@/Component/syncTodo'

const About = () => {

  const {data,addData, deleteData, editData } = useSyncTodo()

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [rule, setRule] = useState('')

  const [editId, setEditId] = useState(null)
  const [open, setOpen] = useState(false)


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
    setImage(user.image)
    setName(user.name)
    setRule(user.rule)
    setEditId(user.id)
    setOpen(true)
  }

  
  const handleSubmit = () => {

    if (!name.trim()) return

    const newUser = {
      image,
      name,
      rule
    }

    if (editId !== null) {
      editData(editId, newUser)
    } else {
      addData(newUser)
    }

    clearInputs()
    setOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-8">
        <button onClick={handleAdd} className="bg-blue-600 text-white px-5 py-3 rounded-lg">+ Add User</button>
      </div>


      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-5">{editId !== null ? 'Edit User' : 'Add User'}</h2>
            <div className="flex flex-col gap-4">

              <input
                className="border p-3 rounded-lg"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              <input
                className="border p-3 rounded-lg"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="border p-3 rounded-lg"
                placeholder="Rule"
                value={rule}
                onChange={(e) => setRule(e.target.value)} />

            </div>

            <div className="flex gap-3 mt-6">

              <button   onClick={() => {setOpen(false) 
                  clearInputs()}} className="bg-gray-400 text-white p-3 rounded-lg flex-1">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-600 text-white p-3 rounded-lg flex-1">{editId !== null ? 'Save' : 'Add'}</button>

            </div>

          </div>

        </div>

      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {data.map((user) => (

          <div key={user.id} className="bg-white border p-5 rounded-xl shadow">
 
            <img src={user.image}alt={user.name}className="w-full h-48 object-cover rounded-lg"/>

            <h2 className="text-xl font-bold mt-4">{user.name}</h2>

            <p className="text-gray-500">{user.rule}</p>

            <div className="flex gap-3 mt-5">
              <button onClick={() => handleEdit(user)}className="bg-yellow-500 text-white p-2 rounded-lg flex-1">Edit</button>
              <button onClick={() => deleteData(user.id)} className="bg-red-600 text-white p-2 rounded-lg flex-1">Delete</button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default About