
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [
    {
      id: 1,
      name: "Ali",
      age: 19,
      job: "Frontend Developer"
    },
    {
      id: 2,
      name: "Asad",
      age: 18,
      job: "Backend Developer"
    },
    {
      id: 3,
      name: "Ajam",
      age: 20,
      job: "UI/UX Designer"
    },
    {
      id: 4,
      name: "Abdullo",
      age: 21,
      job: "Graphic Designer"
    },
    {
      id: 5,
      name: "Said",
      age: 22,
      job: "Full Stack Developer"
    },
    {
      id: 6,
      name: "Farid",
      age: 17,
      job: "Student"
    },
    {
      id: 7,
      name: "Rustam",
      age: 23,
      job: "Software Engineer"
    },
    {
      id: 8,
      name: "Muhammad",
      age: 20,
      job: "Mobile Developer"
    },
    {
      id: 9,
      name: "Samir",
      age: 19,
      job: "Web Designer"
    },
    {
      id: 10,
      name: "Ismoil",
      age: 24,
      job: "Project Manager"
    }
  ],
  isLoading: false,
  error: null
}
export const api = "https://6aac8504a2413bf0ec10d4af.mockapi.io/furniture-shop"
export const getData = createAsyncThunk(
  "todo/getData",
  async () => {
    try {
      const { data } = await axios.get(api)
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
)


export const handledelete = createAsyncThunk(
  "todo/handleDelete",
  async (id) => {
    try {
      await axios.delete(api + "/" + id)
      return id
    } catch (error) {
      console.log(error)
      throw error
    }
  }
)

export const addData = createAsyncThunk(
  "todo/addData",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(api, newUser)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


export const editData = createAsyncThunk(
  "todo/editData",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        api + "/" + user.id,
        {
          img: user.img,
          name: user.name,
          role: user.role
        }
      )

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)



const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {

    addUser: (state, action) => {
      state.data.push(action.payload)
    },

    
    deleteUser: (state, action) => {
      state.data = state.data.filter(
        (item) => item.id !== action.payload
      )
    },

    editUser: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id
          ? action.payload
          : item
      )
    }

  },

//  asink

  extraReducers: (builder) => {

  
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })

      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })

      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || action.error.message
      })

    
    .addCase(handledelete.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    .addCase(handledelete.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(
        (item) => item.id !== action.payload
      )
    })

    .addCase(handledelete.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload || action.error.message
    })

    
    .addCase(addData.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    .addCase(addData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload)
    })

    .addCase(addData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    
    .addCase(editData.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    .addCase(editData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.map((item) =>
        item.id === action.payload.id? action.payload: item
      )
    })

    .addCase(editData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload || action.error.message
    })

  }
})

export const {addUser,deleteUser, editUser} = counterSlice.actions

export default counterSlice.reducer
