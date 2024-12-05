import { useState } from "react";
import Button from "./Button";

interface LapProps{
    laps: string[]
    removeLap: (lap: string) => void
}

function ClockList({laps, removeLap}: LapProps) {

    return (
    <>
        <ul >
        {
            laps.map((lap) => {
                return <li className="" key={lap}>
                    {lap}
                    <button onClick={() => removeLap(lap)}>X</button>
                    </li>
            })
        }
        </ul>
    </>
    )
}

export default ClockList