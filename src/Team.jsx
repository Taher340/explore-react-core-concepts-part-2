import { useState } from "react"

export default function Team(){
    const [team, setTeam]= useState(11);

    const teamStyle = {
        border: '2px solid tomato',
        margin: '10px',
        padding: '5px',
        borderRadius:'15px'

    }

    const handleIn=()=>{
        const newTeam = team +1;
        setTeam(newTeam);
    }

    const handleOut=()=>{
        const newTeam = team -1;
        setTeam(newTeam);
    }


    return (
        <div style= {teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleIn}>IN</button>
            <button onClick={handleOut}>OUT</button>
        </div>
    )
}