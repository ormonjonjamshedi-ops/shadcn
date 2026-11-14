import React, { useState } from 'react';
import { useFormik } from 'formik';

const App = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Ali', email: 'ali@mail.com', role: 'Student' },
        { id: 2, name: 'Vali', email: 'vali@mail.com', role: 'Teacher' },
    ]);
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [editId, setEditId] = useState(null);
    const [infoId, setInfoId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const formik = useFormik({
        initialValues: { name: '', email: '', role: 'Student' },
        validate: (values) => {
            const errors = {};
            if (!values.name) errors.name = 'Name is required';
            return errors;
        },

        onSubmit: (values) => {
            if (editId === null) {
                setUsers([...users, { ...values, id: Date.now() }]);
            } else {
                const newUsers = users.map((user) => {
                    if (user.id === editId) {
                        return { ...values, id: editId };
                    }
                    return user;
                });
                setUsers(newUsers);
            }
            closeDialog();
        },
    });

    function openAdd() {
        setEditId(null);
        formik.resetForm();
        setIsOpen(true);
    }

    function openEdit(user) {
        setEditId(user.id);
        formik.setValues({
            name: user.name,
            email: user.email,
            role: user.role,
        });
        setIsOpen(true);
    }

    function closeDialog() {
        setIsOpen(false);
        setEditId(null);
        formik.resetForm();
    }

    function deleteUser(id) {
        setUsers(users.filter((user) => user.id !== id));
    }

    function toggleInfo(id) {
        if (infoId === id) {
            setInfoId(null);
        } else {
            setInfoId(id);
        }
    }

    const filteredUsers = users.filter((user) => {
        const text = search.toLowerCase();
        const matchSearch =
            user.name.toLowerCase().includes(text) ||
            user.email.toLowerCase().includes(text);
        const matchRole = roleFilter === 'all' || user.role === roleFilter;
        return matchSearch && matchRole;
    });

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">User</h1>

                <div className="bg-white p-5 rounded-xl shadow mb-6 flex flex-col sm:flex-row gap-3">
                    <input type="text"
                        placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 border p-3 rounded-lg"/>

                    <select value={roleFilter}onChange={(e) => setRoleFilter(e.target.value)}className="border p-3 rounded-lg">
                        <option value="all">All roles</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button onClick={openAdd} className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">Add User</button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                        <div className="space-y-4">
                            {filteredUsers.map((user) => (
                                <div key={user.id} className="border p-4 rounded-lg">
                                 <div className="flex flex-col sm:flex-row justify-between gap-4">
                   <div>
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    <p className="text-gray-500">{user.email}</p>
                           </div>

      <div className="flex gap-2">
               <button onClick={() => toggleInfo(user.id)} className="bg-gray-400 text-white px-4 py-2 rounded-lg"
               >Info</button>
                  <button onClick={() => openEdit(user)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >Edit</button>
                <button onClick={() => deleteUser(user.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg">
                  Delete</button>
                     </div>
                 </div>
                                  
       {infoId === user.id && (
                        <div className="mt-4 bg-gray-100 p-3 rounded-lg text-gray-700">
                         <p>ID: {user.id}</p>
                         <p>Name: {user.name}</p>
                         <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                                     </div>
                                    )}
                                </div>
                            ))}
                        </div>
                </div>
            </div>

           
      {isOpen && (
           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                  <div className="bg-white w-full max-w-md p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold mb-5">
                            {editId === null ? 'Add User' : 'Edit User'}
                        </h2>

                        <form onSubmit={formik.handleSubmit} className="space-y-4">
                            <div>
                                <input type="text" name="name" placeholder="Enter your name" value={formik.values.name}
                           onChange={formik.handleChange} className="w-full border p-3 rounded-lg"
                          />
                          {formik.errors.name && (
                                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                                )}
                            </div>
                  <div>
                    <input type="email" name="email" placeholder="Enter your email" value={formik.values.email}
                            onChange={formik.handleChange} className="w-full border p-3 rounded-lg"/>
                  {formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}
                    </div>

               <select name="role" value={formik.values.role} onChange={formik.handleChange} className="w-full border p-3 rounded-lg">
                        <option value="Student">Student</option>
                       <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                       </select>
                       <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">{editId === null ? 'Add User' : 'Update User'}</button>
                       <button type="button" onClick={closeDialog} className="w-full bg-gray-400 text-white p-3 rounded-lg">Cancel</button>
                      </form>
                </div>
               </div>
          )}
        </div>
    );
};

export default App;