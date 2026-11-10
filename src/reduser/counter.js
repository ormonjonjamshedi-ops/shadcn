import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  data:[
    {
      id:1,
      name:"Abdullo",
      age:16,
      job:"student",
    },
     {
      id:2,
      name:"Said",
      age:12,
      job:"teacher",
    },
     {
      id:3,
      name:"Abu",
      age: 23,
      job:"bloger",
    },
     {
      id:4,
      name:"Sabad",
      age:55,
      job:"developer",
    },
  ]
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
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

export const { deleteUser, addUser, editUser} =counterSlice.actions
export default counterSlice.reducer