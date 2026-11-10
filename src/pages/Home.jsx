
import {
  decrement,
  increment,
  deleteUser,
  addUser,
  editUser
} from '@/reduser/counter'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Home = () => {
  const { value, data } = useSelector((store) => store.counter)
  const dispatch = useDispatch()

  const [elem, setElem] = useState({
    id: null,
    name: "",
    age: "",
    job: ""
  })

  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  // Add User
  const handleAdd = (e) => {
    e.preventDefault()

    const newUser = {
      id: Date.now(),
      name: elem.name,
      age: elem.age,
      job: elem.job
    }

    dispatch(addUser(newUser))

    setElem({ id: null, name: "", age: "", job: "" })
    setAddOpen(false)
  }

  // Edit User
  const handleEdit = (user) => {
    setElem({
      id: user.id,
      name: user.name,
      age: user.age,
      job: user.job
    })

    setEditOpen(true)
  }

  const handleSave = (e) => {
    e.preventDefault()

    dispatch(editUser(elem))

    setElem({ id: null, name: "", age: "", job: "" })
    setEditOpen(false)
  }

  return (
    <div className="p-5">

      {/* Counter */}
      <div className="flex gap-4 items-center">
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      {/* Add Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger asChild>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
            Add User
          </button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAdd} className="flex flex-col gap-3">

            <input
              value={elem.name}
              onChange={(e) => setElem({ ...elem, name: e.target.value })}
              placeholder="Name"
              className="border p-2 rounded"
              required
            />

            <input
              value={elem.age}
              onChange={(e) => setElem({ ...elem, age: e.target.value })}
              placeholder="Age"
              type="number"
              className="border p-2 rounded"
              required
            />

            <input
              value={elem.job}
              onChange={(e) => setElem({ ...elem, job: e.target.value })}
              placeholder="Job"
              className="border p-2 rounded"
              required
            />

            <button className="bg-green-600 text-white p-2 rounded">
              Add
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Users */}
      <div className="mt-5">
        {data.map((e) => (
          <div key={e.id} className="flex gap-3 items-center border-2 rounded-xl p-3 my-2">

            <h1>Name: {e.name}</h1>
            <h1>Age: {e.age}</h1>
            <h1>Job: {e.job}</h1>

            <button
              onClick={() => dispatch(deleteUser(e.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

            <button
              onClick={() => handleEdit(e)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

          </div>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSave} className="flex flex-col gap-3">

            <input
              value={elem.name}
              onChange={(e) => setElem({ ...elem, name: e.target.value })}
              placeholder="Name"
              className="border p-2 rounded"
              required
            />

            <input
              value={elem.age}
              onChange={(e) => setElem({ ...elem, age: e.target.value })}
              placeholder="Age"
              type="number"
              className="border p-2 rounded"
              required
            />

            <input
              value={elem.job}
              onChange={(e) => setElem({ ...elem, job: e.target.value })}
              placeholder="Job"
              className="border p-2 rounded"
              required
            />

            <button className="bg-blue-600 text-white p-2 rounded">
              Save Changes
            </button>

          </form>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Home
