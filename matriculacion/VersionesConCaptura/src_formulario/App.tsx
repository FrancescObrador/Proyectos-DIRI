import { ChangeEvent, useState } from 'react'
import './App.css'
import EnrolmentForm from './components/EnrolmentForm'

function App() {
  const [program, setProgram] = useState("UG");
  const handleChangeProgram = (event: ChangeEvent<HTMLSelectElement> ) => {
    setProgram(event.target.value); 
  };

  return (
    <div className="App">
      {/* <div className='programs'>
        <label>Selecciona el tipo de estudio:</label>
        <select className='appDropDowns' onChange={handleChangeProgram} value={program}>
          <option value="UG">Grado</option> 
          <option value="PG">Postgrado</option>
        </select>
      </div> */}
      <EnrolmentForm chosenProgram={program}/>
    </div>
  )

}

export default App
