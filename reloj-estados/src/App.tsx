import { useEffect, useState } from 'react'
import './App.css'
import Clock from './Components/Clock'
import Button from './Components/Button'
import ClockList from './Components/ClockList'

function App() {
  
  
  const getLaps = (): string[] => {
    const saved = localStorage.getItem('laps');
    return saved ? JSON.parse(saved) : [];
  }
  
  const [laps, setLaps] = useState<string[]>(() => getLaps());
  
  useEffect(() => {
    localStorage.setItem('laps', JSON.stringify(laps));
  }, [laps])

  const addLap = () => {
    let date = new Date();
    const newLap: string = `${
    date.getHours().toString().padStart(2, "0")}:
    ${date.getMinutes().toString().padStart(2, "0")}:
    ${date.getSeconds().toString().padStart(2, "0")}`
    
    setLaps([...laps, newLap]);
  }

  return (
    <>
      <Clock></Clock>
      <Button onClick={ addLap }></Button>
      <ClockList laps={laps}></ClockList>
    </>
  )
}

export default App
