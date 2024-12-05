import { useEffect, useState } from 'react'

function Clock() {

    const [time, setTime] = useState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    })

    useEffect(() => {
        const inverval = setInterval(() => {
            const now = new Date();
            setTime({
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            })
        }, 1000);
    })

    return (
        <div className='clock'>
            {time.hours.toString().padStart(2, "0")}:
            {time.minutes.toString().padStart(2, "0")}:
            {time.seconds.toString().padStart(2, "0")}
        </div>
    )
}

export default Clock