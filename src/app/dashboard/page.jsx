import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function dashboard() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        p: 3,
        width: "100%",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {/* <Toolbar /> */}
      <Link href={"dashboard/new-patient"}>
        <Card
          sx={{
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            width: 300,
            height: 300,
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 25 }} color="white" gutterBottom>
              NEW PATIENT
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link href={"dashboard/patient"}>
        <Card
          sx={{
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            width: 300,
            height: 300,
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 25 }} color="white" gutterBottom>
              EXISTING PATIENT
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link href={"dashboard/all-patients"}>
        <Card
          sx={{
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            width: 300,
            height: 300,
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 25 }} color="white" gutterBottom>
              SHOW ALL PATIENTS
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
