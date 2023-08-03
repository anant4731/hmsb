"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";
import Link from "next/link";

export default function AllPatients() {
  const [patients, setPatients] = React.useState([]);

  React.useEffect(() => {
    async function fetchPatients() {
      const p = await factory.methods.getAllPatients().call();
      console.log(p);
      const temp = [];
      for (let i = 0; i < p.length; i++) {
        const pat = patient(p[i]);
        const username = await pat.methods.username().call();
        const gender = await pat.methods.gender().call();
        const phone = await pat.methods.phone().call();
        // setPatients([...patients, username]);
        temp.push({ username, address: p[i], gender, phone });
      }
      setPatients(temp);
    }
    fetchPatients();
  });

  return (
    <Box textAlign={"center"}>
      <Toolbar />

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
          <Link key={text.address} href={`/dashboard/${text.address}`}>
            <Box
              sx={{
                backgroundColor: "black",
                border: "2px solid #313131",
                margin: "20px 0",
                alignItems: "center",
                borderRadius: "20px",
              }}
              height={"200px"}
              width={"450px"}
            >
              <h3>{text.username}</h3>
              <h3>{text.gender}</h3>
              <h3>{text.phone}</h3>
              <p>{text.address}</p>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
