import  counterSlice  from '@/reduser/counter'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})


