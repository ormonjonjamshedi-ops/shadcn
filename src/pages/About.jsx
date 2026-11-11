import { addUser, deleteUser, editUser } from '@/reduser/counter'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'



const About = () => {
const { data } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')

  const [editId, setEditId] = useState(null)

  // ADD AND EDIT
  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !age || !job.trim()) return

    if (editId !== null) {
      dispatch(editUser({
        id: editId,
        name,
        age: Number(age),
        job
      }))
    } else {
      dispatch(addUser({
        id: Date.now(),
        name,
        age: Number(age),
        job
      }))
    }

    setName('')
    setAge('')
    setJob('')
    setEditId(null)
  }

  // EDIT
  function handleEdit(user) {
    setName(user.name)
    setAge(user.age)
    setJob(user.job)
    setEditId(user.id)
  }

  // CANCEL EDIT
  function handleCancel() {
    setName('')
    setAge('')
    setJob('')
    setEditId(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        User Management
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow mb-10"
      >

        <h2 className="text-xl font-bold mb-5">
          {editId !== null ? 'Edit User' : 'Add New User'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Enter job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:border-blue-500"
          />

        </div>

        <div className="flex gap-3 mt-5">

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {editId !== null ? 'Update User' : 'Add User'}
          </button>

          {editId !== null && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg"
            >
              Cancel
            </button>
          )}

        </div>

      </form>

      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold mb-5">
          All Users ({data.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {data.map((user) => (

            <div
              key={user.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <h2 className="text-xl font-bold">
                {user.name}
              </h2>

              <p className="text-gray-500 mt-2">
                Age: {user.age}
              </p>

              <p className="text-gray-500">
                Job: {user.job}
              </p>

              <div className="flex gap-3 mt-5">

                {/* EDIT */}
                <button
                  onClick={() => handleEdit(user)}
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                >
                  Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

        {data.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No users found
          </p>
        )}

      </div>

    </div>
  )
}

export default About