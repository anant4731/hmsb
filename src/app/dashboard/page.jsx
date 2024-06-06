"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";

import addPatientLottie from "@/helpers/assets/add_patient.json";
import searchPatientLottie from "@/helpers/assets/search_patient.json";
import allPatientLottie from "@/helpers/assets/all_patients.json";
import addAdminLottie from "@/helpers/assets/add-admin.json";

import { Button } from "@mui/material";

export default function dashboard() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            border: "1px solid #313131",
            borderRadius: "20px",
            width: "800px",
            height: "350px",
            margin: "20px",
          }}
        >
          <Box sx={{ width: "50%", borderRight: "1px solid #313131" }}>
            <Lottie
              style={{ width: "20rem", height: "20rem" }}
              animationData={addPatientLottie}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 40 }} color="white" gutterBottom>
                ADD A NEW PATIENT DATA
              </Typography>
              <Typography sx={{ fontSize: 13 }} color={"white"}>
                Add new patient details to the BLOCKCHAIN.
              </Typography>
              <Link href={"dashboard/new-patient"}>
                <Button variant="contained" sx={{ marginTop: "20px" }}>
                  ADD
                </Button>
              </Link>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>

        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            border: "1px solid #313131",
            borderRadius: "20px",
            width: "800px",
            height: "350px",
            margin: "20px",
          }}
        >
          <Box sx={{ width: "50%", borderRight: "1px solid #313131" }}>
            <Lottie
              style={{ width: "20rem", height: "20rem" }}
              animationData={searchPatientLottie}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 40 }} color="white" gutterBottom>
                SEARCH A PATIENT'S DATA
              </Typography>
              <Typography sx={{ fontSize: 13 }} color={"white"}>
                Find patient records in the BLOCKCHAIN.
              </Typography>
              <Link href={"dashboard/search-patient"}>
                <Button variant="contained" sx={{ marginTop: "20px" }}>
                  SEARCH
                </Button>
              </Link>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>

        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            border: "1px solid #313131",
            borderRadius: "20px",
            width: "800px",
            height: "350px",
            margin: "20px",
          }}
        >
          <Box sx={{ width: "50%", borderRight: "1px solid #313131" }}>
            <Lottie
              style={{ width: "20rem", height: "20rem" }}
              animationData={allPatientLottie}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 40 }} color="white" gutterBottom>
                GET ALL PATIENT'S DATA
              </Typography>
              <Typography sx={{ fontSize: 13 }} color={"white"}>
                View a list of all patients in the BLOCKCHAIN.
              </Typography>
              <Link href={"dashboard/all-patients"}>
                <Button variant="contained" sx={{ marginTop: "20px" }}>
                  SHOW
                </Button>
              </Link>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            border: "1px solid #313131",
            borderRadius: "20px",
            width: "800px",
            height: "350px",
            margin: "20px",
          }}
        >
          <Box sx={{ width: "50%", borderRight: "1px solid #313131" }}>
            <Lottie
              style={{ width: "20rem", height: "20rem" }}
              animationData={addAdminLottie}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 40 }} color="white" gutterBottom>
                ADD AN ADMIN
              </Typography>
              <Typography sx={{ fontSize: 13 }} color={"white"}>
                Add an Employee as an Admin.
              </Typography>
              <Link href={"dashboard/add-admin"}>
                <Button variant="contained" sx={{ marginTop: "20px" }}>
                  ADD
                </Button>
              </Link>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
