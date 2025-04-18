import React, { useState } from 'react'
    const [time,setTime] = useState(false);
    const [running,setRunning]= useState(false);


    useEffect(() =>{
        if(!running) return;
        const timer = setInterval(() => setTime((t) => t+1) , 1000);
        return () => clearInterval(timer);
    },[running]);
   

    const formatTime =(t) => new Date(t * 1000).toISOString().substr(11 ,8);

  return (
    <div>
        <h2>{formatTime(time)}</h2>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button
         onClick={() => {
            setRunning(false);
            setTime(0);
         }}
         >
        Reset
        </button>

    </div>
  )


export default stopWatch