"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Toolbar } from "@mui/material";

import web3 from "@/app/web3";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";
import NewPatientForm from "@/components/hero/newPatientForm/NewPatientFrom";

const drawerWidth = 340;

export default function NewPatient() {
  const [data, setData] = React.useState();

  const [username, setUsername] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [phone, setPhone] = React.useState(0);

  const [sbp, setSbp] = React.useState("");
  const [dbp, setDbp] = React.useState("");
  const [pulsePressure, setPulsePressure] = React.useState("");
  const [pulse, setPulse] = React.useState("");
  const [respiratoryRate, setRespiratoryRate] = React.useState("");
  const [temperature, setTemperature] = React.useState("");
  const [oxygenSaturation, setOxygenSaturation] = React.useState("");
  const [bloodGlucose, setBloodGlucose] = React.useState("");

  const [openedTab, setOpenedTab] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const submitBasicDetailsForm = (e) => {
    e.preventDefault();
    const basicDetailsdata = { username, gender, phone };
    setData({ ...data, basicDetailsdata });
    setGender("male");
    setPhone(0);
    setUsername("");
  };
  const submitVitalSignsForm = (e) => {
    e.preventDefault();
    const vitalSignsData = {
      sbp,
      dbp,
      pulsePressure,
      pulse,
      respiratoryRate,
      temperature,
      bloodGlucose,
      oxygenSaturation,
    };
    setData({ ...data, vitalSignsData });
  };

  const onSendPatientData = async (e) => {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      console.log(data.basicDetailsdata.username);
      await factory.methods
        .createNewPatient()
        .send({ from: accounts[0] });
      const allPatients = await factory.methods.getAllPatients().call();
      const newPatientAddress = allPatients[allPatients.length - 1];
      console.log(newPatientAddress);
      const newPatient = patient(newPatientAddress);
      console.log(newPatient);
      await newPatient.methods
        .setUsername(data.basicDetailsdata.username)
        .send({ from: accounts[0] });

      const newPatientUsername = await newPatient.methods.username().call();
      console.log(newPatientUsername);
    } catch (err) {
      console.log(err);
    }
  };

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
        <Button onClick={onSendPatientData} type="button" variant="contained">
          SUBMIT
        </Button>
      </Box>
    </div>
  );

  return (
    <NewPatientForm />
    //   <Box component="main" sx={{ p: 3, width: "100%" }}>
    //     <CssBaseline />

    //     <Box
    //       component="nav"
    //       sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    //       aria-label="mailbox folders"
    //     >
    //       <Drawer
    //         variant="temporary"
    //         open={mobileOpen}
    //         onClose={handleDrawerToggle}
    //         ModalProps={{
    //           keepMounted: true,
    //         }}
    //         sx={{
    //           display: { xs: "block", sm: "none" },
    //           "& .MuiDrawer-paper": {
    //             boxSizing: "border-box",
    //             width: drawerWidth,
    //           },
    //         }}
    //       >
    //         {drawer}
    //       </Drawer>
    //       <Drawer
    //         variant="permanent"
    //         sx={{
    //           display: { xs: "none", sm: "block" },
    //           "& .MuiDrawer-paper": {
    //             boxSizing: "border-box",
    //             width: drawerWidth,
    //           },
    //         }}
    //         open
    //       >
    //         {drawer}
    //       </Drawer>
    //     </Box>

    //     {openedTab === 0 && (
    //       <Box
    //         component="main"
    //         sx={{
    //           color: "white",
    //           textAlign: "center",
    //           flexGrow: 1,
    //           p: 3,
    //         }}
    //       >
    //         <Toolbar />
    //         <NewPatientForm />
    //       </Box>
    //       // <form onSubmit={submitBasicDetailsForm}>
    //       //   <Box
    //       // component="main"
    //       // sx={{
    //       //   color:'white',
    //       //   textAlign: "center",
    //       //   flexGrow: 1,
    //       //   p: 3,
    //       // }}
    //       //   >
    //       //     <h1>ENTER PATIENTS PERSONAL DETAILS</h1>
    //       //     <div>
    //       //       <FormControl sx={{ m: 1, width: "50ch", color:'white' }} variant="outlined">
    //       //         <OutlinedInput
    //       //           value={username}
    //       //           id="username"
    //       //           onChange={(e) => setUsername(e.target.value)}
    //       //           aria-describedby="fullname"
    //       //           inputProps={{
    //       //             "aria-label": "fullname",
    //       //           }}
    //       //         />
    //       //         <FormHelperText id="fullname">Fullname</FormHelperText>
    //       //       </FormControl>
    //       //     </div>
    //       //     <div>
    //       //       <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
    //       //         <RadioGroup
    //       //           row
    //       //           aria-labelledby="gender"
    //       //           defaultValue={gender}
    //       //           name="radio-buttons-group"
    //       //           onChange={(e) => setGender(e.target.value)}
    //       //         >
    //       //           <FormControlLabel
    //       //             value="female"
    //       //             control={<Radio />}
    //       //             label="Female"
    //       //           />
    //       //           <FormControlLabel
    //       //             value="male"
    //       //             control={<Radio />}
    //       //             label="Male"
    //       //           />
    //       //           <FormControlLabel
    //       //             value="other"
    //       //             control={<Radio />}
    //       //             label="Other"
    //       //           />
    //       //         </RadioGroup>
    //       //       </FormControl>
    //       //     </div>
    //       //     <div>
    //       //       <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
    //       //         <LocalizationProvider dateAdapter={AdapterDayjs}>
    //       //           <DatePicker />
    //       //         </LocalizationProvider>
    //       //       </FormControl>
    //       //     </div>
    //       //     <div>
    //       //       <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
    //       //         <OutlinedInput
    //       //           type="number"
    //       //           id="phone"
    //       //           value={phone}
    //       //           onChange={(e) => setPhone(+e.target.value)}
    //       //           aria-describedby="phone"
    //       //           inputProps={{
    //       //             "aria-label": "phone",
    //       //           }}
    //       //         />
    //       //         <FormHelperText id="height">Phone Number</FormHelperText>
    //       //       </FormControl>
    //       //     </div>
    //       //     <div>
    //       //       <Button type="submit" variant="outlined">
    //       //         ADD DATA
    //       //       </Button>
    //       //     </div>
    //       //   </Box>
    //       // </form>
    //     )}
    //     {openedTab === 1 && (
    //       <form onSubmit={submitVitalSignsForm}>
    //         <Box
    //           component="main"
    //           sx={{
    //             textAlign: "center",
    //             flexGrow: 1,
    //             p: 3,
    //           }}
    //         >
    //           <h1>ENTER PATIENTS VITAL SIGNS</h1>
    //           <div>
    //             <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="sbp"
    //                 type="number"
    //                 onChange={(e) => setSbp(e.target.value)}
    //                 aria-describedby="sbp"
    //                 inputProps={{
    //                   "aria-label": "sbp",
    //                 }}
    //               />
    //               <FormHelperText id="sbp">SBP</FormHelperText>
    //             </FormControl>
    //             <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="dbp"
    //                 type="number"
    //                 onChange={(e) => setDbp(e.target.value)}
    //                 aria-describedby="dbp"
    //                 inputProps={{
    //                   "aria-label": "dbp",
    //                 }}
    //               />
    //               <FormHelperText id="dbp">DBP</FormHelperText>
    //             </FormControl>
    //             <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="pulse_pressure"
    //                 type="number"
    //                 onChange={(e) => setPulsePressure(e.target.value)}
    //                 aria-describedby="pulse_pressure"
    //                 inputProps={{
    //                   "aria-label": "pulse_pressure",
    //                 }}
    //               />
    //               <FormHelperText id="pulse_pressure">
    //                 Pulse Pressure
    //               </FormHelperText>
    //             </FormControl>
    //           </div>
    //           <div>
    //             <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="pulse"
    //                 type="number"
    //                 onChange={(e) => setPulse(e.target.value)}
    //                 aria-describedby="pulse"
    //                 inputProps={{
    //                   "aria-label": "pulse",
    //                 }}
    //               />
    //               <FormHelperText id="pulse">Pulse</FormHelperText>
    //             </FormControl>
    //           </div>
    //           <div>
    //             <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="respiratory_rate"
    //                 type="number"
    //                 onChange={(e) => setRespiratoryRate(e.target.value)}
    //                 aria-describedby="respiratory_rate"
    //                 inputProps={{
    //                   "aria-label": "respiratory_rate",
    //                 }}
    //               />
    //               <FormHelperText id="respiratory_rate">
    //                 Respiratory Rate
    //               </FormHelperText>
    //             </FormControl>
    //           </div>
    //           <div>
    //             <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="temperature"
    //                 type="number"
    //                 onChange={(e) => setTemperature(e.target.value)}
    //                 aria-describedby="temperature"
    //                 inputProps={{
    //                   "aria-label": "temperature",
    //                 }}
    //               />
    //               <FormHelperText id="temperature">Temperature</FormHelperText>
    //             </FormControl>
    //           </div>
    //           <div>
    //             <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="oxygen"
    //                 type="number"
    //                 onChange={(e) => setOxygenSaturation(e.target.value)}
    //                 aria-describedby="oxygen"
    //                 inputProps={{
    //                   "aria-label": "oxygen",
    //                 }}
    //               />
    //               <FormHelperText id="oxygen">Oxygen Saturation</FormHelperText>
    //             </FormControl>
    //           </div>
    //           <div>
    //             <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
    //               <OutlinedInput
    //                 id="glucose"
    //                 type="number"
    //                 onChange={(e) => setBloodGlucose(e.target.value)}
    //                 aria-describedby="glucose"
    //                 inputProps={{
    //                   "aria-label": "glucose",
    //                 }}
    //               />
    //               <FormHelperText id="glucose">
    //                 Blood Glucose Level
    //               </FormHelperText>
    //             </FormControl>
    //           </div>
    //           <Button type="submit" variant="outlined">
    //             ADD DATA
    //           </Button>
    //         </Box>
    //       </form>
    //     )}
    //   </Box>
  );
}
