import { ChangeEvent, useState } from 'react'
import './App.css'
import { Student } from './interfaces/Student';
import EnrolmentForm from './components/EnrolmentForm'
import EnrolList from './components/EnrolList';
import { EnrolViewModel } from './viewmodels/EnrolViewModel';
import { useEnrolViewModel } from './hooks/useEnrolViewModel';

const enrolViewModel = new EnrolViewModel();

function App() {
  // const [program, setProgram] = useState("UG");
  // const [ugEnrolments, setUGEnrolments] = useState(0);
  // const [pgEnrolments, setPGEnrolments] = useState(0);
  const [student, setStudent] = useState<Student>();
  const [editingStudent, setEditingStudent] = useState<Student>();

  // use ViewModel
  const {students, program, ugEnrolments, pgEnrolments, addStudent, removeStudent, updateStudent, setProgram, setUgEnrolments, setPgEnrolments} = useEnrolViewModel(enrolViewModel);

  const handleChangeEnrolments = (updateEnrolments: number) => {
    console.log({ug: ugEnrolments, pg: pgEnrolments})
  program == "UG" ? setUgEnrolments(updateEnrolments) : setPgEnrolments(updateEnrolments); 
  }

  const handleChangeStudent = (student: Student) => {
    setStudent(student);
  }

  const selectedEnrolments = (): number => {
    return program == "UG" ? ugEnrolments : pgEnrolments; 
  }

  const handleChangeProgram = (event: ChangeEvent<HTMLInputElement> ) => {
    setProgram(event.target.value); 
  }

  const handleStudentRemoved = (student: Student): void => {
    student.program === "UG" ? setUgEnrolments(ugEnrolments-1) : setPgEnrolments(pgEnrolments -1); 
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
      <EnrolmentForm addStudent={addStudent} chosenProgram={program} 
      onChangeEnrolments={handleChangeEnrolments} onStudentChanged={handleChangeStudent}  
      currentEnrolments={selectedEnrolments()} editingStudent={editingStudent}/>
      
      <EnrolList students={students} student={student} 
      onStudentRemoved={handleStudentRemoved} onStudentEditing={setEditingStudent}
      removeStudent={removeStudent} updateStudent={updateStudent}/>
    </div>
  )

}

export default App
