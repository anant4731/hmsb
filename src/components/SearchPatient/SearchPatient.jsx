"use client";

import React from "react";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import classes from "./SearchPatient.module.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SearchPatient() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Router = useRouter();

  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const addressInvalidToast = () => {
    toast.error("Invalid User Address!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const findPatientHandler = async () => {
    let allPatients = [];
    allPatients = await factory.methods.getAllPatients().call();
    console.log("value =>", value);
    if (value === 0 && allPatients.includes(address)) {
      Router.push(`/dashboard/${address}`);
    } else if (value === 1) {
      const res = await fetch(`/api/patients/fetch-patient/email?email=${email}`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      if(res.ok) {
        Router.push(`/dashboard/0000${email}`);
      }
    } else {
      addressInvalidToast();
    }
  };
  return (
    <>
      <div className={classes.container}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "0",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: 600 }}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "black",
                border: "1px solid #313131",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                marginBottom: "20px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                sx={{ backgroundColor: "transparent" }}
              >
                <Tab label="Address" {...a11yProps(0)} />
                <Tab label="Email" {...a11yProps(1)} />
                <Tab label="Phone" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
          </Box>
          <form className={classes.form__div}>
            {value === 0 && (
              <div>
                <div>
                  <label>Enter the Address : </label>
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <button onClick={findPatientHandler} type="button">
                    SEARCH
                  </button>
                </div>
              </div>
            )}
            {value === 1 && (
              <div>
                <div>
                  <label>Enter the Email : </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <button onClick={findPatientHandler} type="button">
                    SEARCH
                  </button>
                </div>
              </div>
            )}
            {value === 2 && (
              <div>
                <div>
                  <label>Enter the Phone Number : </label>
                  <input
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <button onClick={findPatientHandler} type="button">
                    SEARCH
                  </button>
                </div>
              </div>
            )}
          </form>
        </Box>
      </div>
    </>
  );
}
