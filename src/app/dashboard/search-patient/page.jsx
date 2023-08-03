"use client";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";

export default function ExistingPatient() {
  const [address, setAddress] = React.useState("");

  const [username, setUsername] = React.useState("")

  const findPatientHandler = async () => {
    let allPatients = [];
    allPatients = await factory.methods.getAllPatients().call();
    if(allPatients.includes(address)) {
      const patientContract = patient(address);
      const _username = await patientContract.methods.username().call();
      console.log(_username)
      setUsername(_username);
    }
  }
  return (
    <React.Fragment>
      <Toolbar />
      <form>
        <div>
          <label>Enter the patients address : </label>
          <input type="text" onChange={(e)=>setAddress(e.target.value)} />
        </div>
        <button onClick={findPatientHandler} type="button">SEARCH</button>
      </form>

      <div>
        username : {username}
      </div>
    </React.Fragment>
  );
}
