import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  value: 100,
  data:[
    {
      id:1,
      name:"Abdullo",
      age:16,
      job:"bot",
    },
     {
      id:2,
      name:"Said",
      age:12,
      job:"bot",
    },
     {
      id:3,
      name:"Abu",
      age: 23,
      job:"bot",
    },
     {
      id:4,
      name:"Sabad",
      age:55,
      job:"bot",
    },
  ]

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
        state.value+=1
  },
decrement:(state, action)=>{
    state.value -=1
},
deleteUser:(state,{payload})=>{
  state.data=state.data.filter((e) =>e.id!=payload)
},
addUser:(state,{payload:newUser})=>{
  state.data=[...state.data, newUser]
},

editUser:(state,{payload:newUser})=>{
  state.data=state.data.map((e)=>e.id==newUser.id?newUser:e)
},
  }
})

export const {increment, decrement, deleteUser, addUser, editUser} =counterSlice.actions
export default counterSlice.reducer