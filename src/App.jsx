import './App.css'
import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"

const initialData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@example.com",
    role: "User",
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "User",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Editor",
  },
]

export default function CheckboxInTable() {
  const [tableData, setTableData] = React.useState(initialData)
  const [selectedRows, setSelectedRows] = React.useState(new Set(["1"]))
  const [search, setSearch] = React.useState("")

  const [openAdd, setOpenAdd] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    role: "User",
  })

  const [openEdit, setOpenEdit] = React.useState(false)
  const [editData, setEditData] = React.useState({
    id: "",
    name: "",
    email: "",
    role: "User",
  })

  const filteredData = tableData.filter((row) => {
    const searchLower = search.toLowerCase()
    return (
      row.name.toLowerCase().includes(searchLower) ||
      row.email.toLowerCase().includes(searchLower) ||
      row.role.toLowerCase().includes(searchLower)
    )
  })

  const isAllSelected =
    filteredData.length > 0 && selectedRows.size === filteredData.length
  const isIndeterminate =
    selectedRows.size > 0 && selectedRows.size < filteredData.length

  const handleSelectAll = (checked) => {
    if (checked === true) {
      setSelectedRows(new Set(filteredData.map((row) => row.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id, checked) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
  }

  const handleDelete = (id) => {
    setTableData((prev) => prev.filter((row) => row.id !== id))
    setSelectedRows((prev) => {
      const newSelected = new Set(prev)
      newSelected.delete(id)
      return newSelected
    })
  }

  // ADD
  const handleAdd = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    const newUser = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
    }

    setTableData((prev) => [...prev, newUser])
    setFormData({ name: "", email: "", role: "User" })
    setOpenAdd(false)
  }

  // EDIT
  const openEditDrawer = (row) => {
    setEditData({
      id: row.id,
      name: row.name,
      email: row.email,
      role: row.role,
    })
    setOpenEdit(true)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    if (!editData.name || !editData.email) return

    setTableData((prev) =>
      prev.map((row) =>
        row.id === editData.id
          ? {
              ...row,
              name: editData.name,
              email: editData.email,
              role: editData.role,
            }
          : row
      )
    )
    setOpenEdit(false)
  }

  return (
    <div className="p-6 space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search by name, email or role..."
            className="w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <Button variant="ghost" onClick={() => setSearch("")}>
              Clear
            </Button>
          )}
        </div>

        <Dialog open={openAdd} onOpenChange={setOpenAdd}>
          <DialogTrigger asChild>
            <Button>ADD +</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add user</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value }) } placeholder="Enter name"  /> </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value }) }
                  placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value }) }
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="User">User</option>
                </select>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpenAdd(false)}
                >Cancel</Button>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  checked={  isAllSelected ? true : isIndeterminate  ? "indeterminate"   : false }onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell  colSpan={5}  className="h-24 text-center text-muted-foreground" >
                  Ҳеҷ натиҷа ёфт нашуд
                </TableCell>
              </TableRow> ) : (
              filteredData.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={selectedRows.has(row.id) ? "selected" : undefined}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(row.id)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(row.id, checked === true)
                      }/>
                  </TableCell>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline">
                        Info
                      </Button>
                    <Button size="sm" variant="outline" onClick={() => openEditDrawer(row)}>   Edit </Button>

                      <Button
                       size="sm" variant="destructive" onClick={() => handleDelete(row.id)} >Delete</Button>  
                    </div>
                  </TableCell>
                </TableRow> ))
            )}
          </TableBody>
        </Table>
      </div>
      <Drawer open={openEdit} onOpenChange={setOpenEdit}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit user</DrawerTitle>
          </DrawerHeader>

          <form onSubmit={handleEdit} className="px-4 space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value }) }/>
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <select value={editData.role}   onChange={(e) =>  setEditData({ ...editData, role: e.target.value }) }
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="User">User</option>
              </select>
            </div>
            <DrawerFooter className="px-0">
              <Button type="submit">Save changes</Button>
              <DrawerClose asChild>
                <Button type="button" variant="outline">   Cancel </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  )
}