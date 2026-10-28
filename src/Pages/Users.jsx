import { api } from '@/api/auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const Users = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const token = localStorage.getItem("token")

 
  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openInfo, setOpenInfo] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("user")
  const [city, setCity] = useState("")

  const [selectedUser, setSelectedUser] = useState(null)

  const getUsers = async () => {
    try {
      const { data } = await axios.get(api + "/users", {
        headers: { Authorization: "Bearer " + token },
      })
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const filteredData = data.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase()) ||
    user.email?.toLowerCase().includes(search.toLowerCase()) ||
    user.role?.toLowerCase().includes(search.toLowerCase()) ||
    user.city?.toLowerCase().includes(search.toLowerCase())
  )

  
  const handleAdd = async () => {
    try {
      await axios.post(
        api + "/users",
        { name, email, password, role, city },
        { headers: { Authorization: "Bearer " + token } }
      )
      setOpenAdd(false)
      setName("")
      setEmail("")
      setPassword("")
      setRole("user")
      setCity("")
      getUsers()
    } catch (error) {
      console.log(error)

    }
  }
  const openEditModal = (user) => {
    setSelectedUser(user)
    setName(user.name )
    setEmail(user.email )
   
    setRole(user.role)
    setCity(user.city )
    setOpenEdit(true)
  }

  const handleEdit = async () => {
    try {
      const body = { name, email, role, city }
      

      await axios.put(
        api + `/users/${selectedUser.id}`,
        body,
        { headers: { Authorization: "Bearer " + token } }
      )
      setOpenEdit(false)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

 
  const handleDelete = async (id) => {
    try {
      await axios.delete(api + `/users/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  const openInfoModal = (user) => {
    setSelectedUser(user)
    setOpenInfo(true)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 gap-4">
        <Input
          placeholder="Search by name, email, role or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"  />
        <Button onClick={() => setOpenAdd(true)} className="bg-blue-600">
          + Add User
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead>CITY</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button size="sm" className="bg-blue-600" onClick={() => openInfoModal(user)}>
                  INFO
                </Button>
                <Button size="sm" className="bg-green-600" onClick={() => openEditModal(user)}>
                  EDIT
                </Button>
                <Button size="sm" className="bg-red-600" onClick={() => handleDelete(user.id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
   
      <Dialog open={openAdd} onOpenChange={setOpenAdd}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label>Name *</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Email *</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>

              <Input value={role}onChange={(e) => setRole(e.target.value)}placeholder="user or admin"/>
</div>
            <div>
              <Label>City</Label>
              <Input value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenAdd(false)}>Cancel</Button>
            <Button onClick={handleAdd}>Add User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Role</Label>
              <Input value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div>
              <Label>City</Label>
              <Input value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button onClick={handleEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openInfo} onOpenChange={setOpenInfo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Information</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-2 py-4">
              <p><b>ID:</b> {selectedUser.id}</p>
              <p><b>Name:</b> {selectedUser.name}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Role:</b> {selectedUser.role}</p>
              <p><b>City:</b> {selectedUser.city}</p>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setOpenInfo(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Users