
import {
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

import { Button } from "@/components/ui/button"

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

  const resetForm = () => {
    setElem({ id: null, name: "", age: "", job: "" })
  }

  const handleAdd = (e) => {
    e.preventDefault()

    dispatch(addUser({
      ...elem,
      id: Date.now()
    }))

    resetForm()
    setAddOpen(false)
  }

  const handleEdit = (user) => {
    setElem(user)
    setEditOpen(true)
  }

  const handleSave = (e) => {
    e.preventDefault()

    dispatch(editUser(elem))

    resetForm()
    setEditOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Header */}
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              User Management
            </h1>
            <p className="text-gray-500">
              Manage your users easily
            </p>
          </div>

          {/* Add Dialog */}
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={resetForm}
                className="bg-blue-600 hover:bg-blue-700"
              >
                + Add User
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleAdd} className="flex flex-col gap-4">

                <input
                  value={elem.name}
                  onChange={(e) => setElem({...elem, name:e.target.value})}
                  placeholder="Name"
                  className="border rounded-lg p-3"
                  required
                />

                <input
                  value={elem.age}
                  onChange={(e) => setElem({...elem, age:e.target.value})}
                  placeholder="Age"
                  type="number"
                  className="border rounded-lg p-3"
                  required
                />

                <input
                  value={elem.job}
                  onChange={(e) => setElem({...elem, job:e.target.value})}
                  placeholder="Job"
                  className="border rounded-lg p-3"
                  required
                />

                <Button type="submit">Add User</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mb-5 flex justify-between">
          <h2 className="text-2xl font-bold text-slate-800">
            All Users
          </h2>

          <p className="text-gray-500">
            Total: {data.length} users
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 border border-gray-100"
            >

          
              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                  {e.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {e.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {e.job}
                  </p>
                </div>

              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-5">
                <p className="text-gray-500 text-sm">Age</p>
                <h3 className="font-semibold text-slate-800">
                  {e.age} years old
                </h3>
              </div>

    
              <div className="flex gap-3">

                <Button
                  onClick={() => handleEdit(e)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Edit
                </Button>

                <Button
                  onClick={() => dispatch(deleteUser(e.id))}
                  className="flex-1 bg-red-500 hover:bg-red-600"
                >
                  Delete
                </Button>

              </div>

            </div>
          ))}

        </div>

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSave} className="flex flex-col gap-4">

              <input
                value={elem.name}
                onChange={(e) => setElem({...elem, name:e.target.value})}
                placeholder="Name"
                className="border rounded-lg p-3"
                required
              />

              <input
                value={elem.age}
                onChange={(e) => setElem({...elem, age:e.target.value})}
                placeholder="Age"
                type="number"
                className="border rounded-lg p-3"
                required
              />

              <input
                value={elem.job}
                onChange={(e) => setElem({...elem, job:e.target.value})}
                placeholder="Job"
                className="border rounded-lg p-3"
                required
              />

              <Button type="submit">
                Save Changes
              </Button>

            </form>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  )
}

export default Home
