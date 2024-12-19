interface Lap {
    id: string
    value: string
}

interface LapProps{
    laps: Lap[]
    removeLap: (lapId: string) => void
}

function ClockList({laps, removeLap}: LapProps) {

    return (
    <div className="clock-list">
        <ul>
        {
            laps.map((lap) => {
                return <li className="clock-list-item" key={lap.id}>
                    {lap.value}
                    <button className="minimal-button" onClick={() => removeLap(lap.id)}>X</button>
                    </li>
            })
        }
        </ul>
    </div>
    )
}

export default ClockList