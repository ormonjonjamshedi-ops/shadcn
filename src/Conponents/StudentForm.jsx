import { useState, useEffect } from "react";
import { useStudents } from "../context/StudentContext";

export default function StudentForm() {
  const { state, dispatch } = useStudents();
  const [name, setName] = useState("");


  useEffect(function () {
    if (state.editing) {
      setName(state.editing.name);
    } else {
      setName("");
    }
  }, [state.editing]);


  function handleSubmit(e) {
    e.preventDefault();            

    if (name.trim() === "") {  
      return;
    }

    if (state.editing) {
  
      dispatch({
        type: "UPDATE",
        payload: { id: state.editing.id, name: name },
      });
    } else {

      dispatch({ type: "ADD", payload: name });
    }

    setName("");              
  }

  return (
    <form onSubmit={handleSubmit} className=" flex justify-center gap-40 m-5">
      <input className="w-100  p-3 border-4 "
        placeholder="Name"
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
      />

      <button type="submit" className="w-50 border-4 p-3 ">
        {state.editing ? "sAVE" : "ADD "}
      </button>

     
      {state.editing && (
        <button
          type="button"
          onClick={function () {
            dispatch({ type: "CANCEL_EDIT" });
          }}
        >
       DELETE
        </button>
      )}
    </form>
  );
}