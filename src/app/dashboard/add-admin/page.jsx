"use client";

import { useState } from "react";
import classes from "./addAdmin.module.css";
const { Box, Button } = require("@mui/material");

const addAdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitFormHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await fetch("/api/create-admin", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ body: { username, password } }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className={classes.container}>
      <Box sx={{ width: "500px" }}>
        <h2>ADD AN ADMIN</h2>
        <div className={classes.single_input__div}>
          <div className={classes.input__div}>
            <label htmlFor="username">USERNAME : </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
            />
          </div>
          <div className={classes.input__div}>
            <label htmlFor="password">PASSWORD : </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="passoword"
            />
          </div>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{ width: "50%", height: "50px", fontSize: "25px" }}
              onClick={submitFormHandler}
              className={classes.save}
            >
              ADD
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default addAdminPage;
