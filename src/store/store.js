import counterSlice from '@/reduser/counter'
import usersSlice from '@/reduser/users' 
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,               
  }
})