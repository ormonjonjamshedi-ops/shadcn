import { useState } from "react";
import { useTodo } from "../Component/todo";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../components/ui/table";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";

export default function Home() {
  const data = useTodo((state) => state.data);
  const addUser = useTodo((state) => state.addUser);
  const updateUser = useTodo((state) => state.updateUser);
  const deleteUser = useTodo((state) => state.deleteUser);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");
  const [work, setWork] = useState("");

  const [infoOpen, setInfoOpen] = useState(false);
  const [infoId, setInfoId] = useState(null);

  const infoUser = data.find((user) => user.id === infoId);

  function resetForm() {
    setName("");
    setAge("");
    setCity("");
    setImg("");
    setWork("");
    setEditingId(null);
  }

  function handleOpenChange(value) {
    setOpen(value);

    if (!value) {
      resetForm();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const numericAge = Number(age);

    if (
      !name.trim() ||
      age.trim() === "" ||
      !Number.isInteger(numericAge) ||
      numericAge < 0 ||
      !city.trim() ||
      !work.trim()
    ) {
      return;
    }

    const user = {
      name: name.trim(),
      age: numericAge,
      city: city.trim(),
      img: img.trim(),
      work: work.trim(),
    };

    if (editingId === null) {
      addUser(user);
    } else {
      updateUser(editingId, user);
    }

    handleOpenChange(false);
  }

  function handleEdit(user) {
    setEditingId(user.id);
    setName(user.name);
    setAge(String(user.age));
    setCity(user.city ?? "");
    setImg(user.img ?? "");
    setWork(user.work ?? "");
    setOpen(true);
  }

  function handleInfo(user) {
    setInfoId(user.id);
    setInfoOpen(true);
  }

  function handleInfoChange(value) {
    setInfoOpen(value);

    if (!value) {
      setInfoId(null);
    }
  }

  function handleDelete(id) {
    deleteUser(id);

    if (editingId === id) {
      handleOpenChange(false);
    }

    if (infoId === id) {
      handleInfoChange(false);
    }
  }

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="bg-background px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div className="w-full space-y-2 sm:max-w-sm">
            <Label htmlFor="search-users">
              Search users
            </Label>

            <Input
              id="search-users"
              type="search"
              placeholder="Search by name..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button type="button" onClick={resetForm}>
                Add User
              </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>
                  {editingId === null ? "Add User" : "Edit User"}
                </DialogTitle>

                <DialogDescription>
                  Enter the user details below.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user-name">Full name</Label>

                  <Input
                    id="user-name"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="user-age">Age</Label>

                    <Input
                      id="user-age"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Enter age"
                      value={age}
                      onChange={(event) => setAge(event.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-city">City</Label>

                    <Input
                      id="user-city"
                      placeholder="Enter city"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-work">Work</Label>

                  <Input
                    id="user-work"
                    placeholder="Enter occupation"
                    value={work}
                    onChange={(event) => setWork(event.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-img">
                    Image URL (optional)
                  </Label>

                  <Input
                    id="user-img"
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    value={img}
                    onChange={(event) => setImg(event.target.value)}
                  />
                </div>

                <DialogFooter className="gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleOpenChange(false)}
                  >
                    Cancel
                  </Button>

                  <Button type="submit">
                    {editingId === null
                      ? "Add User"
                      : "Save Changes"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>

          <CardContent>
            {filteredUsers.length === 0 ? (
              <div className="rounded-xl border border-dashed px-4 py-14 text-center">
                <h3 className="font-semibold">
                  {data.length === 0
                    ? "No users yet"
                    : "No users found"}
                </h3>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="pl-4">Name</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Work</TableHead>
                      <TableHead className="pr-4 text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="py-4 pl-4">
                          <div className="flex items-center gap-3">
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 font-semibold text-primary">
                              <span aria-hidden="true">
                                {user.name.trim().charAt(0).toUpperCase()}
                              </span>

                              {user.img && (
                                <img key={user.img}
                                  src={user.img} alt=""
                                  className="absolute inset-0 h-full w-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                              )}
                            </div>

                            <span className="font-medium">
                              {user.name}
                            </span>
                          </div>
                        </TableCell>

                        <TableCell>{user.age}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>{user.work }</TableCell>

                        <TableCell className="pr-4">
                          <div className="flex justify-end gap-2">
                            <Button
                              type="button"
                              variant="secondary"
                              size="sm"
                              onClick={() => handleInfo(user)}
                              aria-label={`View ${user.name}`}
                            >
                              Info
                            </Button>

                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(user)}
                              aria-label={`Edit ${user.name}`}
                            >
                              Edit
                            </Button>

                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(user.id)}
                              aria-label={`Delete ${user.name}`}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <Dialog open={infoOpen} onOpenChange={handleInfoChange}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>User Information</DialogTitle>
            </DialogHeader>

            {infoUser && (
              <div className="space-y-5">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-3xl font-bold text-primary">
                    <span aria-hidden="true">
                      {infoUser.name.trim().charAt(0).toUpperCase()}
                    </span>

                    {infoUser.img && (
                      <img
                        key={`${infoUser.id}-${infoUser.img}`}
                        src={infoUser.img}
                        alt={infoUser.name}
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                  </div>

                  <h2 className="text-xl font-semibold">
                    {infoUser.name}
                  </h2>
                </div>

                <dl className="divide-y rounded-xl border px-4">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">Age</dt>
                    <dd>{infoUser.age} years</dd>
                  </div>

                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">City</dt>
                    <dd className="text-right">
                      {infoUser.city}
                    </dd>
                  </div>

                  <div className="flex justify-between gap-4 py-3">
                    <div className="text-muted-foreground">Work</div>
                    <div className="text-right">
                      {infoUser.work}
                    </div>
                  </div>
                </dl>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}