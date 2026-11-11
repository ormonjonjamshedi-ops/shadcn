
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getData,
  handledelete,
  addData,
  editData
} from '@/reduser/counter'

const Home = () => {
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [open, setOpen] = useState(false)


  const [editOpen, setEditOpen] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editImg, setEditImg] = useState("")
  const [editName, setEditName] = useState("")
  const [editRole, setEditRole] = useState("")

  const { data, isLoading } = useSelector((store) => store.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])


  const handleAdd = async (e) => {
    e.preventDefault()

    try {
      await dispatch(addData({
        img,
        name,
        role
      })).unwrap()

      setImg("")
      setName("")
      setRole("")
      setOpen(false)

    } catch (error) {
      console.log(error)
    }
  }

 
  const handleEditOpen = (item) => {
    setEditId(item.id)
    setEditImg(item.img)
    setEditName(item.name)
    setEditRole(item.role)

    setEditOpen(true)
  }

  const handleEdit = async (e) => {
    e.preventDefault()

    try {
      await dispatch(editData({
        id: editId,
        img: editImg,
        name: editName,
        role: editRole
      })).unwrap()

      setEditOpen(false)

    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await dispatch(handledelete(id)).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return (
      <div className="text-center text-3xl mt-20">
        LOADING...
      </div>
    )
  }

  return (
    <div className="p-10">
      <button onClick={() => setOpen(true)} className="bg-green-600 text-white px-8 py-3 rounded-xl mb-10">ADD +</button>
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-7 rounded-2xl shadow-2xl">

            <form onSubmit={handleAdd} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Image URL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="border p-3 rounded-lg text-black"
                required
              />

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-3 rounded-lg text-black"
                required
              />

              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-3 rounded-lg text-black"
                required
              />

              <div className="flex gap-3 mt-3">
                <button type="button" onClick={() => setOpen(false)} className="bg-gray-400 text-white p-3 rounded-lg w-full">Cancel</button>
                <button type="submit" className="bg-green-600 text-white p-3 rounded-lg w-full">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

   
      {editOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-7 rounded-2xl shadow-2xl">
            <form onSubmit={handleEdit} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Image URL"
                value={editImg}
                onChange={(e) => setEditImg(e.target.value)}
                className="border p-3 rounded-lg text-black"
                required
              />

              <input
                type="text"  placeholder="Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-3 rounded-lg text-black"
                required/>

              <input
                type="text"
                placeholder="Role"
                value={editRole}
                onChange={(e) => setEditRole(e.target.value)}
                className="border p-3 rounded-lg text-black"
                required/>

              <div className="flex gap-3 mt-3">
                <button type="button" onClick={() => setEditOpen(false)} className="bg-gray-400 text-white p-3 rounded-lg w-full">Cancel</button>

                <button type="submit" className="bg-green-600 text-white p-3 rounded-lg w-full">Save</button>
              </div>

            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data?.map((e) => (
          <div key={e.id} className="w-full border-2 bg-blue-100 text-center rounded-2xl p-5 shadow-lg">
            <img src={e.image} alt={e.name} className="w-full h-80 object-cover rounded-xl"/>

            <h1 className="text-2xl font-bold mt-3">{e.name}</h1>

            <h1 className="text-lg text-gray-600">{e.role}</h1>

            <div className="flex justify-center gap-3 mt-5">

              <button className="p-3 bg-red-600 text-white rounded-xl" onClick={() => handleDelete(e.id)}>Delete</button>
              <button className="p-3 bg-green-600 text-white rounded-xl"   onClick={() => handleEditOpen(e)}>Edit</button>
</div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Home
