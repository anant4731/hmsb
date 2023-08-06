"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button} from "@mui/material";

import web3 from "@/app/web3";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";
import NewPatientForm from "@/components/forms/newPatientForm/NewPatientFrom";


export default function NewPatient() {
  const drawer = (
    <div>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <h3>MENU</h3>
      </Box>
      <div onClick={() => setOpenedTab(0)}>
        <Divider />
        <ListItem key={"Personal Details"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Personal Details"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(1)}>
        <Divider />
        <ListItem key={"Vital Signs"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Vital Signs"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(2)}>
        <Divider />
        <ListItem key={"Medical Information"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Medical Information"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(3)}>
        <Divider />
        <ListItem key={"Test Results"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Test Results"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(4)}>
        <Divider />
        <ListItem key={"Treatment Information"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Treatment Information"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(5)}>
        <Divider />
        <ListItem key={"Follow-up and Appointments"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Follow-up and Appointments"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(6)}>
        <Divider />
        <ListItem key={"Insurance and Billing"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Insurance and Billing"} />
          </ListItemButton>
        </ListItem>
      </div>
      <div onClick={() => setOpenedTab(7)}>
        <Divider />
        <ListItem key={"Additional Information"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleRightIcon />
            </ListItemIcon>
            <ListItemText primary={"Additional Information"} />
          </ListItemButton>
        </ListItem>
      </div>
      <Divider />
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
      </Box>
    </div>
  );

  return (
    <NewPatientForm />
  );
}
