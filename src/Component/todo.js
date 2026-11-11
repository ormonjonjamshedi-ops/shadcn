import { create } from 'zustand'
import axios from 'axios'

const API = "https://6aac8504a2413bf0ec10d4af.mockapi.io/furniture-shop"

const useTodo = create((set, get) => ({
  data: [],
  loading: false,

  
  getData: async () => {
    set({ loading: true })

    try {
      const { data } = await axios.get(API)

      set({
        data: Array.isArray(data) ? data : data.data || [],
        loading: false
      })
    } catch (error) {
      console.log(error)
      set({ loading: false })
    }
  },

  addData: async (newUser) => {
    try {
      await axios.post(API, newUser)
      get().getData()
    } catch (error) {
      console.log(error)
    }
  },

deleteData: async (id) => {
  try {
    await axios.delete(`${API}/${id}`)

    set((state) => ({
      data: state.data.filter((item) => item.id !== id)
    }))

  } catch (error) {
    console.log(error)
  }
},


  editData: async (id, updatedUser) => {
    try {
      await axios.put(`${API}/${id}`, updatedUser)
      get().getData()
    } catch (error) {
      console.log(error)
    }
  }
}))

export default useTodo