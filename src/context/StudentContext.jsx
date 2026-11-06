import { createContext, useContext, useReducer } from "react";
const initialState = {
  students: [
    { id: 1, name: "Алӣ", img:"public/girl.png" },
    { id: 2, name: "Вали", img:"public/car.png"},
       { id: 3, name: "abu", img:"public/flover.png"},
  ],
  editing: null,
};

function studentReducer(state, action) {

  if (action.type === "ADD") {
    const newStudent = { id: Date.now(), name: action.payload };
    return {
      ...state,                                   
      students: [...state.students, newStudent], 
    };
  }

  if (action.type === "DELETE") {
    return {
      ...state,
   
      students: state.students.filter(function (s) {
        return s.id !== action.payload;
      }),
    };
  }

  if (action.type === "START_EDIT") {
    return { ...state, editing: action.payload };
  }

  if (action.type === "UPDATE") {
    return {
      ...state,
      students: state.students.map(function (s) {
        if (s.id === action.payload.id) {
          return action.payload;  
        }
        return s;                 
      }),
      editing: null,            
    };
  }

  if (action.type === "CANCEL_EDIT") {
    return { ...state, editing: null };
  }

  return state;
}

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}