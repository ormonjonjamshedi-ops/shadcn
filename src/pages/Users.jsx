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

const countReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload }

    case "DELETE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload)
      }

    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: Date.now() }],
        isAddModalOpen: false
      }

    case "EDIT_USER":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        editUser: null
      }

    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.payload }

    case "SET_EDIT_USER":
      return { ...state, editUser: action.payload }

    case "TOGGLE_ADD_MODAL":
      return { ...state, isAddModalOpen: action.payload }

    default:
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
    <div className="relative min-h-screen overflow-hidden text-white p-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27661-large.mp4" type="video/mp4" />
      </video>

      {/* Title */}
      <div className="flex justify-center gap-10 text-4xl font-bold text-cyan-400 drop-shadow-md">
        <h1>MY COMMAND</h1>
        <h1>ALWAYS READY</h1>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center my-8 backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20">
        <input
          type="search"
          value={state.searchQuery}
          onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          className="w-96 border-2 border-cyan-400 p-4 rounded-xl text-xl text-black bg-white/80 focus:bg-white outline-none"
          placeholder="Search here..."
        />
        <button
          onClick={() => dispatch({ type: "TOGGLE_ADD_MODAL", payload: true })}
          className="w-60 p-4 bg-emerald-500 hover:bg-emerald-600 font-bold rounded-xl text-xl transition-all shadow-lg"
        >
          ADD +
        </button>
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((person) => (
          <div
            key={person.id}
            className="backdrop-blur-lg bg-black/40 border border-white/20 rounded-xl p-5 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <img
                src={person.image}
                alt={`${person.name} ${person.surname}`}
                className="rounded-full w-36 h-36 object-cover mx-auto mb-4 border-2 border-cyan-400 shadow-md"
              />
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-semibold text-cyan-300">
                  {person.name} {person.surname}
                </h2>
                <p className="text-lg text-gray-300">{person.work}</p>
                <p className="text-green-400">Age: {person.age}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={() => dispatch({ type: "DELETE", payload: person.id })}
                className="flex-1 bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold transition-all"
              >
                Delete
              </button>
              <button
                onClick={() => dispatch({ type: "SET_EDIT_USER", payload: person })}
                className="flex-1 bg-amber-500 hover:bg-amber-600 py-2 rounded-lg font-semibold transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: "SET_SELECTED_USER", payload: person })}
                className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold transition-all"
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
          <div className="text-center text-black space-y-3">
            <img src={state.selectedUser.image} className="w-32 h-32 rounded-full mx-auto border-2 border-cyan-500 object-cover" />
            <h3 className="text-2xl font-bold">{state.selectedUser.name} {state.selectedUser.surname}</h3>
            <p className="text-lg">Work: {state.selectedUser.work}</p>
            <p className="text-lg">Age: {state.selectedUser.age}</p>
          </div>
        </UserModal>
      )}

      
      {state.isAddModalOpen && (
        <UserModal title="Add New User" onClose={() => dispatch({ type: "TOGGLE_ADD_MODAL", payload: false })}>
          <UserForm
            onSubmit={(newUser) => dispatch({ type: "ADD_USER", payload: newUser })}
            buttonText="Add"
          />
        </UserModal>
      )}

      
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
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-2xl p-6 w-full max-w-md text-black relative shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">{title}</h2>
      {children}
      <button onClick={onClose} className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg">
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
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Surname"
        value={formData.surname}
        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Work"
        value={formData.work}
        onChange={(e) => setFormData({ ...formData, work: e.target.value })}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {buttonText}
      </button>
    </form>
  )
}

export default Users