"use client"
import patient from "@/app/ethereum/patient";
import React from "react";

export default function Page({ params }) {
    const [username, setUsername] = React.useState("")
    const patientId = params.patientId;
    React.useEffect(() => {
        const fetchPatient = async () => {
            const p = await patient(patientId);
            const name = await p.methods.username().call();
            setUsername(name);
        }
        fetchPatient();
    })
    
    return (<div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>USERNAME - {username}</h2>
    </div>)
}