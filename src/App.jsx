import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
    const [users, setUsers] = useState([
        { id: 1, image: "/girl.png", name: "ali", email: "Salom@gmail.com", age: 12 },
        { id: 2, image: "/girl.png", name: "vali", email: "Salom@gmail.com", age: 12 },
        { id: 3, image: "/girl.png", name: "Sali", email: "Salom@gmail.com", age: 12 }
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [editId, setEditId] = useState(null);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (editId !== null) {
            setUsers(prev => prev.map(user => user.id === editId ? { ...data, id: editId } : user));
            setEditId(null);
        } else {
            setUsers(prev => [...prev, { ...data, id: Date.now() }]);
        }
        reset();
        setIsOpen(false);
    };

    const deleteUser = (id) => setUsers(prev => prev.filter(user => user.id !== id));

    const editUser = (user) => {
        setEditId(user.id);
        setValue('image', user.image);
        setValue('name', user.name);
        setValue('email', user.email);
        setValue('age', user.age);
        setIsOpen(true);
    };

    const closeModal = () => {
        setEditId(null);
        reset();
        setIsOpen(false);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto">
             <div className="flex justify-between items-center mb-6 gap-4">
              <input type="text" value={search} 
               placeholder="Search by name or email..." onChange={(e) => setSearch(e.target.value)} 
               className="w-full border bg-white p-3 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-400"/>
           <button onClick={() => { reset(); setEditId(null); setIsOpen(true); }} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl shadow-md whitespace-nowrap transition">+ Add User</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredUsers.map((user) => (
                        <div key={user.id} className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-100">
                                <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-xl text-gray-800">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <p className="text-sm font-medium text-gray-600 mt-1">Age: {user.age}</p>
                            </div>
                 <div className="flex gap-3 pt-4 mt-4 border-t border-gray-100">
                      <button onClick={() => editUser(user)} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition">Edit</button>
                      <button onClick={() => deleteUser(user.id)} className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-xl transition">Delete</button>
                    </div>
                   </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl relative">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
                        <h2 className="text-xl font-bold mb-5">{editId !== null ? 'Edit User' : 'Add User'}</h2>
                        
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                   <input type="text" placeholder="Image URL" className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" {...register('image', { required: 'Image is required' })} />
                      {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                    </div>
           <div>
              <input type="text" placeholder="Name" className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" {...register('name', { required: 'Name is required' })} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                   </div>
             <div>
               <input type="email" placeholder="Email" className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" {...register('email', { required: 'Email is required' })} />
                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                     </div>
               <div>
                <input type="number" placeholder="Age" className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" {...register('age', { required: 'Age is required', valueAsNumber: true, min: { value: 15, message: 'Minimum age is 15' } })} />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                 </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-medium transition shadow-md">
                  {editId !== null ? 'Update User' : 'Add User'}  </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;