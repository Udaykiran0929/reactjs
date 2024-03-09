import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function App9() {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    //console.log("Component loaded");
    useEffect(() => {
        if(wickets > 0) console.log(`wickets: ${wickets}. Better luck next time`);
    }, [wickets]);
    useEffect(() => {
        if(runs > 0) console.log(`wickets: ${wickets}. Better luck next time`);
    }, [runs]);
  return (
    <div>
        <button onClick={() => setRuns((prevState) => prevState +1)}>
            Runs({runs})
        </button>
        <button onClick={() => setWickets((prevState) => prevState +1)}>
            Wickets({wickets})
        </button>
    </div>
  )
}
