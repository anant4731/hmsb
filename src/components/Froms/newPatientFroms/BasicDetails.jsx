"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";

const BasicDetailsForm = () => {

  // states
  const [username, setUsername] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [phone, setPhone] = React.useState(0);

  const submitBasicDetailsForm = (e) => {
    e.preventDefault();
    const data = { username, gender, phone };
    console.log(data)
    setGender("male");
    setPhone(0);
    setUsername("");
  };
  return (
    <form onSubmit={submitBasicDetailsForm}>
      <Box
        component="main"
        sx={{
          textAlign: "center",
          flexGrow: 1,
          p: 3,
        }}
      >
        <h1>ENTER PATIENT'S PERSONAL DETAILS</h1>
        <div>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <OutlinedInput
            value={username}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="fullname"
              inputProps={{
                "aria-label": "fullname",
              }}
            />
            <FormHelperText id="fullname">Fullname</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <RadioGroup
              row
              aria-labelledby="gender"
              defaultValue={gender}
              name="radio-buttons-group"
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <OutlinedInput
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(+e.target.value)}
              aria-describedby="phone"
              inputProps={{
                "aria-label": "phone",
              }}
            />
            <FormHelperText id="height">Phone Number</FormHelperText>
          </FormControl>
        </div>
        <div>
          <Button type="submit" variant="outlined">
            ADD DATA
          </Button>
        </div>
      </Box>
    </form>
  );
};
export default BasicDetailsForm;
