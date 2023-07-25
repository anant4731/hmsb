"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

const VitalSignsForm = () => {
  return (
    <Box
      component="main"
      sx={{
        textAlign: "center",
        flexGrow: 1,
        p: 3,
      }}
    >
      <h1>ENTER PATIENT'S VITAL SIGNS</h1>
      <div>
        <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
          <OutlinedInput
            id="sbp"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="sbp"
            inputProps={{
              "aria-label": "sbp",
            }}
          />
          <FormHelperText id="sbp">SBP</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
          <OutlinedInput
            id="dbp"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="dbp"
            inputProps={{
              "aria-label": "dbp",
            }}
          />
          <FormHelperText id="dbp">DBP</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
          <OutlinedInput
            id="pulse_pressure"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="pulse_pressure"
            inputProps={{
              "aria-label": "pulse_pressure",
            }}
          />
          <FormHelperText id="pulse_pressure">Pulse Pressure</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <OutlinedInput
            id="pulse"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="pulse"
            inputProps={{
              "aria-label": "pulse",
            }}
          />
          <FormHelperText id="pulse">Pulse</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <OutlinedInput
            id="respiratory_rate"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="respiratory_rate"
            inputProps={{
              "aria-label": "respiratory_rate",
            }}
          />
          <FormHelperText id="respiratory_rate">
            Respiratory Rate
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <OutlinedInput
            id="temperature"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="temperature"
            inputProps={{
              "aria-label": "temperature",
            }}
          />
          <FormHelperText id="temperature">Temperature</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <OutlinedInput
            id="oxygen"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="oxygen"
            inputProps={{
              "aria-label": "oxygen",
            }}
          />
          <FormHelperText id="oxygen">Oxygen Saturation</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <OutlinedInput
            id="glucose"
            type="number"
            // onChange={(e) => setUsername(e.target.value)}
            aria-describedby="glucose"
            inputProps={{
              "aria-label": "glucose",
            }}
          />
          <FormHelperText id="glucose">Blood Glucose Level</FormHelperText>
        </FormControl>
      </div>
    </Box>
  );
};
export default VitalSignsForm;
