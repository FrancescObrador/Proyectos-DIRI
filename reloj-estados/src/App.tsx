import { useEffect, useState } from 'react'
import './App.css'
import Clock from './Components/Clock'
import Button from './Components/Button'
import ClockList from './Components/ClockList'

interface Lap {
  id: string
  value: string
}

function App() {

  const getLaps = (): Lap[] => {
    const saved = localStorage.getItem('laps');
    return saved ? JSON.parse(saved) : [];
  }

  const [laps, setLaps] = useState<Lap[]>(() => getLaps());

  useEffect(() => {
    localStorage.setItem('laps', JSON.stringify(laps));
  }, [laps])

  const addLap = () => {
    let date = new Date();
    const newLap: string = `${
    date.getHours().toString().padStart(2, "0")}:
    ${date.getMinutes().toString().padStart(2, "0")}:
    ${date.getSeconds().toString().padStart(2, "0")}`

    let lap: Lap = { id: crypto.randomUUID(), value: newLap }

    setLaps([...laps, lap]);
  }

  const removeLap = (toRemoveLapId: string) => {
    let newLaps = [...laps];
    newLaps = newLaps.filter(lap => lap.id !== toRemoveLapId )
    setLaps([...newLaps]);
  }

  return (
    <>
      <Clock></Clock>
      <Button onClick={ addLap }></Button>
      <ClockList laps={laps} removeLap={removeLap}></ClockList>
    </>
  )
}

export default App
