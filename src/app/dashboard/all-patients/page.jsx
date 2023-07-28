"use client";
import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";

export default function AllPatients() {
  const [patients, setPatients] = React.useState([]);

  async function fetchPatients() {
    const p = await factory.methods.getAllPatients().call();
    console.log(p);
    const temp = [];
    for (let i = 0; i < p.length; i++) {
      const pat = patient(p[i]);
      const username = await pat.methods.username().call();
      // setPatients([...patients, username]);
      temp.push({ username: username, address: p[i] });
    }
    setPatients(temp);
  }

  return (
    <Box textAlign={"center"}>
      <Toolbar />
      <Button onClick={fetchPatients}>GET ALL PATIENTS</Button>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {patients.map((text, index) => (
          <Box height={"300px"} width={"600px"}>
            <h3 key={text.address}>{text.username}</h3>
            <p>{text.address}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
