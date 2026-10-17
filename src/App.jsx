import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const api = "https://to-dos-api.softclub.tj"

export default function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [addImages, setAddImages] = useState([])

  const [openAdd, setOpenAdd] = useState(false)
  const [addName, setAddName] = useState("")
  const [addDescription, setAddDescription] = useState("")
  const [addStatus, setAddStatus] = useState("active")

  const [openEdit, setOpenEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editStatus, setEditStatus] = useState("active")

  const [openInfo, setOpenInfo] = useState(false)
  const [infoItem, setInfoItem] = useState(null)

  async function getData() {
    try {
      const { data } = await axios.get(api + "/api/to-dos")
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  async function handleDelete(id) {
    try {
      await axios.delete(api +"/api/to-dos?id=" + id)
      getData()
    } catch (error) {
      console.log(error)
    }
  }
async function handleAdd() {
  try {
    const formData = new FormData()
    formData.append("Name", addName)
    formData.append("Description", addDescription)
    for (const file of addImages) {
      formData.append("Images", file)
    }
    await axios.post(api + "/api/to-dos", formData)
    setAddName("")
    setAddDescription("")
    setAddStatus("active")
    setAddImages([])
    setOpenAdd(false)
    getData()
  } catch (error) {
    console.log(error.response?.data)
  }
}
  function handleOpenEdit(item) {
    setEditId(item.id)
    setEditName(item.name)
    setEditDescription(item.description)
    setEditStatus(item.isCompleted ? "active" : "inactive")
    setOpenEdit(true)
  }

  async function handleEdit() {
    try {
      await axios.put(api + "/api/to-dos", {
        id: editId,
        name: editName,
        description: editDescription,
        isCompleted: editStatus === "active",
      })
      setOpenEdit(false)
      getData()
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenInfo(item) {
    setInfoItem(item)
    setOpenInfo(true)
  }

  const filter = data.filter((e) =>
    e.name?.toLowerCase().includes(search.toLowerCase())
  )
  async function handleDeleteImage(imageId) {
  try {
    await axios.delete(api + "/api/to-dos/images/" + imageId)
    getData()
  } catch (error) {
    console.log(error.response?.data)
  }
}
  return (
    <div>
      <Field orientation="horizontal">
        <Input
          type="search" placeholder="Search..." value={search} 
           onChange={(e) => setSearch(e.target.value)}/>
        <Dialog open={openAdd} onOpenChange={setOpenAdd}>
          <form>
            <DialogTrigger render={<Button variant="outline">ADD+</Button>} />
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>ADD profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
        <Label htmlFor="images-1">Images</Label>
      <Input
    id="images-1"
          type="file"
    multiple
    onChange={(e) => setAddImages(Array.from(e.target.files))}
  />
            </Field>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1"name="name"value={addName}onChange={(e) => setAddName(e.target.value)}/>
                </Field>
                <Field>
                  <Label htmlFor="username-1">Description</Label>
                  <Input id="username-1"name="username"value={addDescription}onChange={(e) => setAddDescription(e.target.value)}/>
                </Field>
                <Field>
                  <Label htmlFor="status-1">Status</Label>
                  <select id="status-1"value={addStatus} onChange={(e) => setAddStatus(e.target.value)}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button type="button" onClick={handleAdd}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </Field>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Surname</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filter.map((e) => (
            <TableRow key={e.id} >
              <TableCell className="font-medium">
        
        <Carousel className="w-[100px] max-w-[12rem] sm:max-w-xs ml-9">
  <CarouselContent>
  {e.images?.map((img) => (
  <CarouselItem key={img.id}>
    <img
      className="w-[100px] h-[100px] object-cover"
      src={api + "/images/" + img.imageName}
      alt=""/>
    <Button
      variant="destructive"
      size="sm"
      className="w-[100px] mt-1"
      onClick={() => handleDeleteImage(img.id)}>
      Delete
    </Button>
  </CarouselItem>
))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      
    </Carousel>
    
              </TableCell>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.description}</TableCell>
              <TableCell>{e.isCompleted ? "Active" : "Inactive"}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleOpenInfo(e)}>Info</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenEdit(e)}>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleDelete(e.id)}>Delete </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>Change the data and click save.</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="edit-name">Name</Label>
              <Input id="edit-name"  value={editName}onChange={(e) => setEditName(e.target.value)}/></Field>
             <Field>
              <Label htmlFor="edit-desc">Description</Label>
              <Input id="edit-desc"
                value={editDescription}onChange={(e) => setEditDescription(e.target.value)}/>
            </Field>
            <Field>
              <Label htmlFor="edit-status">Status</Label>
               <select id="edit-status"value={editStatus}onChange={(e) => setEditStatus(e.target.value)}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="button" onClick={handleEdit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={openInfo} onOpenChange={setOpenInfo}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Info</DialogTitle>
          </DialogHeader>
          {infoItem ? (
            <div className="space-y-2">
          
              <p><span>Name:</span> {infoItem.name}</p>
              <p><span>Description:</span> {infoItem.description}</p>
              <p><span>Status:</span> {infoItem.isCompleted ? "Active" : "Inactive"}</p>
            </div>
          ):null}
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Close</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}