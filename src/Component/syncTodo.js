import { create } from 'zustand'

const useSyncTodo = create((set) => ({

  data: [
    {
      id: 1,
      image: 'https://i.pravatar.cc/300?img=1',
      name: 'Ali',
      rule: 'Developer'
    },
    {
      id: 2,
      image: 'https://i.pravatar.cc/300?img=2',
      name: 'Asad',
      rule: 'Designer'
    }
  ],

  addData: (newUser) => set((state) => ({
    data: [
      ...state.data,
      {
        id: Date.now(),
        ...newUser
      }
    ]
  })),


  deleteData: (id) => set((state) => ({
    data: state.data.filter((item) => item.id !== id)
  })),

  
  editData: (id, updatedUser) => set((state) => ({
    data: state.data.map((item) =>
      item.id === id
        ? { ...item, ...updatedUser }
        : item
    )
  }))

}))

export default useSyncTodo