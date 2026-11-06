import { useStudents } from "../context/StudentContext";

export default function StudentList() {
  const { state, dispatch } = useStudents();

  return (
    <div className="grid grid-cols-3 gap-10">
  
      {state.students.map(function (s) {
        return (
          <div className="border-4 w-120 flex flex-col gap-10" key={s.id}>
          <h1 className="text-4xl text-green-600">  {s.name}</h1>
          <img src={s.img} alt="" className="w-50" />
          <button className="border-2 p-5 text-3xl"
              onClick={function () {
                dispatch({ type: "START_EDIT", payload: s });
              }}
            >
          Edit
            </button>

      
            <button className=" border-2 p-5 text-3xl bg-red-600"
              onClick={function () {
                dispatch({ type: "DELETE", payload: s.id });
              }}
            >
         Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}