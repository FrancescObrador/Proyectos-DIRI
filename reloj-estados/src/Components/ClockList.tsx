import { useState } from "react";

interface LapProps{
    laps: string[]
}

function ClockList({laps}: LapProps) {

    return (
    <>
        <ul >
        {
            laps.map((lap) => {
                return <li className="" key={lap}>{lap}</li>
            })
        }
        </ul>
    </>
    )
}

export default ClockList