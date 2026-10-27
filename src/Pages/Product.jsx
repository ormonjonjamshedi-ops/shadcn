import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '@/api/auth'
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Product = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [editUser, setEditUser] = useState(null)
  const [isAddOpen, setIsAddOpen] = useState(false)

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: "",
    city: ""
  })

  const [addForm, setAddForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    city: ""
  })

  
  const getUsers = async () => {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(api + "/users", {
        headers: { Authorization: `Bearer ${token}` }
      })

      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdd = async () => {
    try {
      const token = localStorage.getItem('token')

      const res = await axios.post(api + "/users", addForm, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setUsers([...users, res.data.data || res.data])
      setAddForm({ name: "", email: "", password: "", role: "", city: "" })
      setIsAddOpen(false)
      alert("Корбари нав илова шуд")
    } catch (error) {
      console.log("Add Error:", error.response?.data || error.message)
      alert("Хатогӣ: " + (error.response?.data?.message || error.message))
    }
  }

  
  const handleDelete = async (id) => {
    if (!window.confirm("Мутмаин ҳастед?")) return

    try {
      const token = localStorage.getItem('token')
      await axios.delete(api + `/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setUsers(users.filter((user) => user.id !== id))
    } catch (error) {
      console.log(error)
      alert("Хатогӣ ҳангоми нест кардан")
    }
  }

  
  const handleEdit = (user) => {
    setEditUser(user)
    setEditForm({
      name: user.name ,
      email: user.email,
      role: user.role ,
      city: user.city 
    })
  }

 
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token')

      await axios.put(api + `/users/${editUser.id}`, editForm, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setUsers(users.map((user) =>
        user.id === editUser.id ? { ...user, ...editForm } : user
      ))
      setEditUser(null)
    } catch (error) {
      console.log(error)
      alert("Хатогӣ ҳангоми таҳрир")
    }
  }
  
  const handleInfo = (user) => {
    setSelectedUser(user)
  }

  useEffect(() => {
    getUsers()
  }, [])



  const filteredUsers = users.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="flex items-center justify-between mb-6 gap-4">
        <InputGroup className="max-w-sm">
          <InputGroupInput
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>

        <Button
          className="bg-lime-500 hover:bg-lime-600 text-white"
          onClick={() => setIsAddOpen(true)}>
          Add +
        </Button>
      </div>

     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredUsers.map((item) => (
            <TableRow key={item.id || item.email}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role || "-"}</TableCell>
              <TableCell>{item.city || "-"}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => handleDelete(item.id)}>
                  DELETE
                </Button>
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => handleEdit(item)}>
                  EDIT
                </Button>
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => handleInfo(item)}>
                  INFO
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

   
      {isAddOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
          
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 rounded"
                value={addForm.name}
                onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}/>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={addForm.email}
                onChange={(e) => setAddForm({ ...addForm, email: e.target.value })}/>
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
                value={addForm.password}
                onChange={(e) => setAddForm({ ...addForm, password: e.target.value })}/>
              <input
                type="text"
                placeholder="Role"
                className="w-full border p-2 rounded"
                value={addForm.role}
                onChange={(e) => setAddForm({ ...addForm, role: e.target.value })}/>
              <input
                type="text"
                placeholder="City"
                className="w-full border p-2 rounded"
                value={addForm.city}
                onChange={(e) => setAddForm({ ...addForm, city: e.target.value })}/>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="bg-lime-500 hover:bg-lime-600 text-white"
                onClick={handleAdd}
              >
               Save
              </Button>
              <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {editUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
      
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 rounded"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}/>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}/>
              <input
                type="text"
                placeholder="Role"
                className="w-full border p-2 rounded"
                value={editForm.role}
                onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}/>
              <input
                type="text"
                placeholder="City"
                className="w-full border p-2 rounded"
                value={editForm.city}
                onChange={(e) => setEditForm({ ...editForm, city: e.target.value })} />
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={handleUpdate}
              >
               SAve
              </Button>
              <Button variant="outline" onClick={() => setEditUser(null)}>
               Cansel
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Маълумоти корбар</h2>
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role || "-"}</p>
            <p><strong>City:</strong> {selectedUser.city || "-"}</p>

            <Button
              className="mt-6"
              variant="outline"
              onClick={() => setSelectedUser(null)}
            >
              Пӯшидан
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product