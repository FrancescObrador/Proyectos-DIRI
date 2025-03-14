import { ChangeEvent, useState } from 'react'
import './App.css'
import EnrolmentForm, { Student } from './components/EnrolmentForm'
import EnrolList from './components/EnrolList';

function App() {
  const [program, setProgram] = useState("UG");

  const [ugEnrolments, setUGEnrolments] = useState(0);
  const [pgEnrolments, setPGEnrolments] = useState(0);
  const [student, setStudent] = useState<Student>();
  const [editingStudent, setEditingStudent] = useState<Student>();

  const handleChangeEnrolments = (updateEnrolments: number) => {
  program == "UG" ? setUGEnrolments(updateEnrolments) : setPGEnrolments(updateEnrolments); };

  const handleChangeStudent = (student: Student) => {
    setStudent(student);
  }
  const selectedEnrolments = (): number => {
    return program == "UG" ? ugEnrolments : pgEnrolments; }

  const handleChangeProgram = (event: ChangeEvent<HTMLInputElement> ) => {
    setProgram(event.target.value); 
  };

  const handleStudentRemoved = (student: Student): void => {
    student.program === "UG" ? setUGEnrolments(ugEnrolments-1) : setPGEnrolments(pgEnrolments -1); 
  }

  return (
    <div className="App">
      <div className="programs"> 
        <ul className="ulEnrol">
          <li className="parentLabels"> <input
          type="radio"
          value="UG"
          name="programGroup" defaultChecked onChange={handleChangeProgram}
          />
          Grado
          <input
          type="radio"
          className="radioSel"
          value="PG"
          name="programGroup" onChange={handleChangeProgram}
          />
          Postgrado
          </li>
          <li>Matriculaciones actuales: {selectedEnrolments()}</li> 
          </ul>
        </div>
      <EnrolmentForm chosenProgram={program} onChangeEnrolments={handleChangeEnrolments} currentEnrolments={selectedEnrolments()} onStudentChanged={handleChangeStudent} editingStudent={editingStudent}/>
      <EnrolList student={student} onStudentRemoved={handleStudentRemoved} onStudentEditing={setEditingStudent}/>
    </div>
  )

}

export default App
