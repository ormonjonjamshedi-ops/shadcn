import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function App() {
  const api = "https://to-dos-api.softclub.tj/api/to-dos";
  const imgApi = "https://to-dos-api.softclub.tj/images/";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [image, setImage] = useState(null);


  const [infoOpen, setInfoOpen] = useState(false);
  const [infoData, setInfoData] = useState(null);

async function getData() {
  try {
    const res = await axios.get(api);
    setData(res.data.data || []);
  } catch (error) {
    console.log(error);

  }
}

  useEffect(() => {
    getData();
  }, []);

  function openAdd() {
    setSelectedItem(null);
    setName("");
    setDescription("");
    setIsCompleted(false);
    setImage(null);
    setOpen(true);
  }


  function openEdit(item) {
    setSelectedItem(item);
    setName(item.name || "");
    setDescription(item.description || "");
    setIsCompleted(Boolean(item.isCompleted));
    setImage(null);
    setOpen(true);
  }

  
  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      return;
    }

    if (!selectedItem && !image) {
    
      return;
    }

    try {
      if (selectedItem) {
        const payload = {
          id: selectedItem.id,
          name: name.trim(),
          description: description.trim(),
          isCompleted: isCompleted,
        };

        await axios.put(api, payload);
        toast.success("Updated successfully");
      } else {
       
        const formData = new FormData();
        formData.append("Name", name.trim());
        formData.append("Description", description.trim());
        formData.append("IsCompleted", String(isCompleted));
        formData.append("Images", image);

        await axios.post(api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Added successfully");
      }

      setOpen(false);
      setSelectedItem(null);
      setName("");
      setDescription("");
      setIsCompleted(false);
      setImage(null);
      getData();
    } catch (error) {
      console.error(error.response?.data || error.message);

    }
  }


  async function handleDelete(id) {
    try {
      await axios.delete(`${api}?id=${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    
    }
  }

  function handleInfo(item) {
    setInfoData(item);
    setInfoOpen(true);
  }
  const filteredData = data.filter((item) => {
    const value = search.toLowerCase().trim();
    return (
      (item.name || "").toLowerCase().includes(value) ||
      (item.description || "").toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 ">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
         <div className="mb-5 flex max-w-md gap-2">
        <Input
          type="search"
          placeholder="Search "
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
      </div><Button onClick={openAdd}>Add +</Button>
      </div>
     
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.images?.length > 0 ? (
                    <img
                      src={`${imgApi}${item.images[0].imageName}`}
                      alt={"Image"}
                      className="h-10 w-10 rounded-full object-cover"  />
                  ) : (null)}
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="max-w-56 truncate"> {item.description}  </TableCell>
                <TableCell>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                     item.isCompleted ? "bg-green-100 text-green-700": "bg-red-100 text-red-700"
                    }`}>
                    {item.isCompleted ? "Active" : "Inactive"}  </span>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline" onClick={() => openEdit(item)}>
                      Edit </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}> Delete</Button>
                    <Button size="sm" variant="secondary" onClick={() => handleInfo(item)}> Info</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>


      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedItem ? "Edit" : "Add"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                value={String(isCompleted)}
                onChange={(e) => setIsCompleted(e.target.value === "true")} >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            {!selectedItem && (
              <div className="space-y-2">
                <Label htmlFor="image">Image (required)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)} required  />
              </div>
            )}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{selectedItem ? "Save" : "Add"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Information</DialogTitle>
          </DialogHeader>

          {infoData && (
            <div className="space-y-3">
              {infoData.images?.length > 0 && (
                <img
                  src={`${imgApi}${infoData.images[0].imageName}`}
                  alt={infoData.name || "Image"}
                  className="h-24 w-24 rounded-full object-cover"/>
              )}
              <p><strong>ID:</strong> {infoData.id}</p>
              <p><strong>Name:</strong> {infoData.name}</p>
              <p><strong>Description:</strong> {infoData.description}</p>
              <p><strong>Status:</strong> {infoData.isCompleted ? "Active" : "Inactive"}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}