import { useRef, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const api = 'https://6aac8504a2413bf0ec10d4af.mockapi.io/furniture-shop'
const emptyForm = { id: null, name: '', status: false, image: '' }

const App = () => {
    const queryClient = useQueryClient()
    const [form, setForm] = useState(emptyForm)
    const modal = useRef(null)

    const { data = [], isLoading, isError } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axios.get(api)
            return res.data
        },
    })

    const refresh = () => queryClient.invalidateQueries({ queryKey: ['items'] })

    const addItem = useMutation({
        mutationFn: (item) => axios.post(api, item),
        onSuccess: refresh,
    })

    const deleteItem = useMutation({
        mutationFn: (id) => axios.delete(`${api}/${id}`),
        onSuccess: refresh,
    })

    const updateItem = useMutation({
        mutationFn: (item) => axios.put(`${api}/${item.id}`, item),
        onSuccess: refresh,
    })

 
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const item = {
            name: formData.get('name'),
            image: formData.get('image'),
            status: formData.get('status') === 'on',
        }

        if (form.id) {
            updateItem.mutate({ ...item, id: form.id })
        } else {
            addItem.mutate(item)
        }

        modal.current.close()
    }

  
    const openForm = (item = emptyForm) => {
        setForm({ ...emptyForm, ...item })
        modal.current.showModal()
    }

    if (isLoading) return <h1 className='text-center mt-20 text-xl'>Loading...</h1>
    if (isError) return <h1 className='text-center mt-20 text-xl text-red-500'>Error!</h1>

    return (
        <div className='min-h-screen bg-slate-50 p-6'>
            <div className='max-w-5xl mx-auto'>
            
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-3xl font-bold'>Furniture Shop</h1>
                    <button
                        className='bg-indigo-600 text-white rounded-lg px-4 py-2 cursor-pointer'
                        onClick={() => openForm()}
                    >+ Add</button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {data.length === 0 && <p>Nothing found.</p>}

                    {data.map((elem) => (
                        <div key={elem.id} className='bg-white rounded-xl shadow p-4 flex flex-col gap-3'>
                            {elem.image && (
                                <img
                                    src={elem.image}
                                    alt={elem.name}
                                    className='w-full h-48 object-cover rounded-lg'
                                />
                            )}

                            <h2 className='text-lg font-semibold'>{elem.name}</h2>

                            <label className='flex items-center gap-2 text-sm cursor-pointer'>
                                <input
                                    type='checkbox'
                                    checked={elem.status}
                                    onChange={() => updateItem.mutate({ ...elem, status: !elem.status })}
                                />
                                {elem.status ? 'Online' : 'Offline'}
                            </label>

                            <div className='flex gap-2'>
                                <button
                                    className='flex-1 border border-red-300 text-red-600 rounded-lg py-2 cursor-pointer'
                                    onClick={() => deleteItem.mutate(elem.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className='flex-1 border rounded-lg py-2 cursor-pointer'
                                    onClick={() => openForm(elem)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <dialog className='m-auto w-[90%] max-w-md rounded-xl p-6 backdrop:bg-black/50' ref={modal}>
                <form key={form.id ?? 'new'} className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <h1 className='text-xl font-semibold'>{form.id ? 'Edit' : 'Add'}</h1>

                    <input
                        className='border rounded-lg px-3 py-2'
                        name='name'
                        defaultValue={form.name}
                        placeholder='Name...'
                        required
                    />
                    <input
                        className='border rounded-lg px-3 py-2'
                        name='image'
                        defaultValue={form.image}
                        placeholder='Image URL...'
                    />

                    <label className='flex items-center gap-2 text-sm'>
                        <input type='checkbox' name='status' defaultChecked={form.status} />
                        Online
                    </label>

                    <div className='flex justify-end gap-2'>
                        <button
                            className='border rounded-lg px-4 py-2 cursor-pointer'
                            type='button'
                            onClick={() => modal.current.close()}
                        >
                            Cancel
                        </button>
                        <button className='bg-indigo-600 text-white rounded-lg px-4 py-2 cursor-pointer' type='submit'>
                            Save
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default App