"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import factory from "@/app/ethereum/factory";
import patient from "@/app/ethereum/patient";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, LinearProgress, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

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

export default function AllPatients() {
  const [patients, setPatients] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    async function fetchPatients() {
      const p = await factory.methods.getAllPatients().call();
      console.log(p);
      const temp = [];
      for (let i = 0; i < p.length; i++) {
        const pat = patient(p[i]);
        const username = await pat.methods.username().call();
        const gender = await pat.methods.gender().call();
        const phone = Number(await pat.methods.phone().call());
        console.log(Number(phone));
        // setPatients([...patients, username]);
        temp.push({ username, address: p[i], gender, phone });
      }
      setLoading(true);
      setPatients(temp);
      setLoading(false);
    }
    fetchPatients();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function sendMailHandler(index) {
    const formData = patients[index];
    console.log("formData", formData);

    const response = await fetch("/api/send-mail", {
      method: "post",
      body: JSON.stringify({ formData }),
    });
    console.log(response);
  }

  const handleBlockchainFetchData = async () => {
    setValue(0);
    setPatients([]);
    console.log(value);

    setLoading(true);
    const p = await factory.methods.getAllPatients().call();
    console.log(p);
    const temp = [];
    for (let i = 0; i < p.length; i++) {
      const pat = patient(p[i]);
      const username = await pat.methods.username().call();
      const gender = await pat.methods.gender().call();
      const phone = Number(await pat.methods.phone().call());
      const newData = { username, address: p[i], gender, phone };
      setPatients((prevPatients) => {
        const updatedPatients = [...prevPatients, newData];

        return updatedPatients;
      });
    }
    console.log(temp);
    setLoading(false);
  };

  const handleDbFetchData = async () => {
    setValue(1);
    setPatients([]);
    console.log(value);
    setLoading(true);
    const res = await fetch(`/api/patients/fetch-patients`, {
      method: "GET",
    });
    const data = await res.json();
    setPatients(data);
    setLoading(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "100px",
      }}
    >
      <>
        <TableContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <AppBar
            position="static"
            sx={{
              backgroundColor: "black",
              border: "1px solid #313131",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              marginBottom: "20px",
              width: "1400px",
            }}
          >
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              sx={{ backgroundColor: "transparent" }}
            >
              <Tab
                onClick={handleBlockchainFetchData}
                label="From Blockchain"
              />
              <Tab onClick={handleDbFetchData} label="From Database" />
            </Tabs>
          </AppBar>
          {loading ? (
            <CircularProgress
              sx={{ position: "absolute", top: "300px", overflowL: "hidden" }}
            />
          ) : (
            <Table
              sx={{
                backgroundColor: "black",
                width: "1400px",
                border: "2px solid #313131",
                padding: "200px",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}
                    align="left"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}
                    align="left"
                  >
                    Address
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}
                    align="left"
                  >
                    Gender
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}
                    align="left"
                  >
                    Phone
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "20px", fontWeight: "700" }}
                    align="center"
                  >
                    More
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((row, index) => (
                  <TableRow
                    key={value === 1 ? row._id : row.address}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "& td": { color: "white" },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography color={"white"}>{row.username}</Typography>
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="left">
                      {value === 1 ? "None (From DB)" : row.address}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="left">
                      {value === 1 ? row.data?.gender : row.gender}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="left">
                      {value === 1 ? row.data?.phoneNumber : row.phone}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      <Link
                        key={row.address}
                        href={`/dashboard/${
                          value === 1 ? "0000" + row.data?.username : row.address
                        }`}
                      >
                        <Button>Details</Button>
                      </Link>
                      <Button onClick={() => sendMailHandler(index)}>
                        Send Mail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </>
    </Box>
  );
}
