import React, { useReducer, useState } from 'react'

const initialState = {
  searchQuery: "",
  selectedUser: null,
  editUser: null,
  isAddModalOpen: false,
  data: [
    { id: 1, image: "/Ellipse.png", name: "Ahmad", surname: "Aliev", work: "Full-Stack Developer", age: 24 },
    { id: 2, image: "/celvin.png", name: "Amrullo", surname: "Valiev", work: "UI/UX Designer", age: 19 },
    { id: 3, image: "/elina.png", name: "Elina", surname: "Sarkisova", work: "Project Manager", age: 28 },
    { id: 4, image: "/jonson.png", name: "Daler", surname: "Rahimov", work: "DevOps Engineer", age: 31 },
    { id: 5, image: "/Ellipse.png", name: "Farida", surname: "Sattorova", work: "Frontend Developer", age: 22 },
    { id: 6, image: "/stive.png", name: "Suhrob", surname: "Karimov", work: "Cyber Security Specialist", age: 27 },
    { id: 7, image: "/celvin.png", name: "Javohir", surname: "Sobirov", work: "Backend Developer", age: 25 },
    { id: 8, image: "/elina.png", name: "Malika", surname: "Qodirova", work: "Data Analyst", age: 21 },
    { id: 9, image: "/stive.png", name: "Rustam", surname: "Ismoilov", work: "QA Automation Tester", age: 30 }
  ]
}

// Reducer bo switch-case ivazshuda ba else-if
const countReducer = (state, action) => {
  if (action.type === "SET_SEARCH") {
    return { ...state, searchQuery: action.payload }
  } else if (action.type === "DELETE") {
    return {
      ...state,
      data: state.data.filter((item) => item.id !== action.payload)
    }
  } else if (action.type === "ADD_USER") {
    return {
      ...state,
      data: [...state.data, { ...action.payload, id: Date.now() }],
      isAddModalOpen: false
    }
  } else if (action.type === "EDIT_USER") {
    return {
      ...state,
      data: state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ),
      editUser: null
    }
  } else if (action.type === "SET_SELECTED_USER") {
    return { ...state, selectedUser: action.payload }
  } else if (action.type === "SET_EDIT_USER") {
    return { ...state, editUser: action.payload }
  } else if (action.type === "TOGGLE_ADD_MODAL") {
    return { ...state, isAddModalOpen: action.payload }
  } else {
    return state
  }
}

const Users = () => {
  const [state, dispatch] = useReducer(countReducer, initialState)

  const filteredData = state.data.filter((person) =>
    `${person.name} ${person.surname} ${person.work}`
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase())
  )

  return (
    <div className="relative min-h-screen overflow-hidden text-white p-6 bg-slate-950">
      {/* Anime Glowing Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Animated Cyber/Anime Grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#a855f7 1px, #020617 1px)`,
            backgroundSize: `40px 40px`,
            backgroundPosition: `0 0, 20px 20px`
          }}
        ></div>
      </div>

      {/* Title */}
      <div className="flex justify-center gap-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wider">
        <h1>MY COMMAND</h1>
        <h1>ALWAYS READY</h1>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center my-8 backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
        <input
          type="search"
          value={state.searchQuery}
          onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          className="w-96 border-2 border-cyan-400 p-4 rounded-xl text-xl text-white bg-black/50 focus:bg-black/80 focus:border-pink-500 outline-none transition-all placeholder-gray-400"
          placeholder="Search team member..."
        />
        <button
          onClick={() => dispatch({ type: "TOGGLE_ADD_MODAL", payload: true })}
          className="w-60 p-4 bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 font-bold rounded-xl text-xl transition-all shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
        >
          ADD +
        </button>
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((person) => (
          <div
            key={person.id}
            className="backdrop-blur-md bg-slate-900/60 border border-purple-500/30 rounded-2xl p-5 shadow-2xl flex flex-col justify-between hover:border-cyan-400/60 transition-all hover:-translate-y-1"
          >
            <div>
              <img
                src={person.image}
                alt={`${person.name} ${person.surname}`}
                className="rounded-full w-36 h-36 object-cover mx-auto mb-4 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold text-cyan-300 tracking-wide">
                  {person.name} {person.surname}
                </h2>
                <p className="text-lg text-purple-200 font-medium">{person.work}</p>
                <p className="text-emerald-400 font-semibold">Age: {person.age}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={() => dispatch({ type: "DELETE", payload: person.id })}
                className="flex-1 bg-red-500/80 hover:bg-red-600 py-2 rounded-lg font-semibold transition-all border border-red-400/30"
              >
                Delete
              </button>
              <button
                onClick={() => dispatch({ type: "SET_EDIT_USER", payload: person })}
                className="flex-1 bg-amber-500/80 hover:bg-amber-600 py-2 rounded-lg font-semibold transition-all border border-amber-400/30"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: "SET_SELECTED_USER", payload: person })}
                className="flex-1 bg-cyan-600/80 hover:bg-cyan-500 py-2 rounded-lg font-semibold transition-all border border-cyan-400/30"
              >
                Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal */}
      {state.selectedUser && (
        <UserModal title="User Info" onClose={() => dispatch({ type: "SET_SELECTED_USER", payload: null })}>
          <div className="text-center text-white space-y-3">
            <img src={state.selectedUser.image} className="w-32 h-32 rounded-full mx-auto border-2 border-cyan-400 object-cover shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <h3 className="text-2xl font-bold text-cyan-300">{state.selectedUser.name} {state.selectedUser.surname}</h3>
            <p className="text-lg text-gray-200">Work: {state.selectedUser.work}</p>
            <p className="text-lg text-emerald-400">Age: {state.selectedUser.age}</p>
          </div>
        </UserModal>
      )}

      {/* Add Modal */}
      {state.isAddModalOpen && (
        <UserModal title="Add New User" onClose={() => dispatch({ type: "TOGGLE_ADD_MODAL", payload: false })}>
          <UserForm
            onSubmit={(newUser) => dispatch({ type: "ADD_USER", payload: newUser })}
            buttonText="Add"
          />
        </UserModal>
      )}

      {/* Edit Modal */}
      {state.editUser && (
        <UserModal title="Edit User" onClose={() => dispatch({ type: "SET_EDIT_USER", payload: null })}>
          <UserForm
            initialData={state.editUser}
            onSubmit={(updatedUser) => dispatch({ type: "EDIT_USER", payload: updatedUser })}
            buttonText="Save Changes"
          />
        </UserModal>
      )}
    </div>
  )
}

const UserModal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 w-full max-w-md text-white relative shadow-[0_0_30px_rgba(6,182,212,0.3)]">
      <h2 className="text-2xl font-bold mb-4 text-center border-b border-cyan-500/30 pb-2 text-cyan-400">{title}</h2>
      {children}
      <button onClick={onClose} className="mt-4 w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition-all">
        Close
      </button>
    </div>
  </div>
)

const UserForm = ({ initialData, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState(
    initialData || { name: "", surname: "", work: "", age: "", image: "/Ellipse.png" }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white focus:border-cyan-400 outline-none"
        required
      />
      <input
        type="text"
        placeholder="Surname"
        value={formData.surname}
        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
        className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white focus:border-cyan-400 outline-none"
        required
      />
      <input
        type="text"
        placeholder="Work"
        value={formData.work}
        onChange={(e) => setFormData({ ...formData, work: e.target.value })}
        className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white focus:border-cyan-400 outline-none"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
        className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white focus:border-cyan-400 outline-none"
        required
      />
      <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded hover:from-cyan-600 hover:to-blue-700 font-semibold transition-all">
        {buttonText}
      </button>
    </form>
  )
}

export default Users