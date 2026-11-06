import StudentForm from "./Conponents/StudentForm";
import StudentList from "./Conponents/StudentList";


export default function App() {
  return (
    <div>
      <h1 className="text-4xl text-center">Users</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}