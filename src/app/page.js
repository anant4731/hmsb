"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  const CLIENT_ID =
    '"865537003147-no2qinl5ql5eb8p4icmecq6hp21rqtia.apps.googleusercontent.com"';
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "http://localhost:3000"; // Update with your actual callback URL
  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
  const [accessToken, setAccessToken] = useState("");
  // useEffect(() => {
  const handleAuthorizationCallback = async () => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log(code);

    if (code) {
      try {
        // Use a more secure way to send client secrets
        const auth = Buffer.from(
          `1066531814491-va8snetn84c03cq54p5jvgc5agcd0gm8.apps.googleusercontent.com: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`
        ).toString("base64");
        const headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${auth}`,
        };

        const data = await axios.post(
          "https://oauth2.googleapis.com/token",
          `code=${code}&redirect_uri=http://localhost:3000&grant_type=authorization_code`,
          { headers }
        );

        const { access_token } = data.data;
        setAccessToken(access_token);
        console.log(access_token);
        // localStorage.setItem("access__token", access_token);
      } catch (error) {
        console.error("Error exchanging code for token:", error);
      }
    }
  };

  handleAuthorizationCallback();
  // }, []);

  const createNewSheet = async () => {
    const res = await fetch("/api/create-sheet", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ token: accessToken }),
    });
    const data = await res.json();
    console.log(data);
    const spreadsheetId = data.response.data.spreadsheetId;
    console.log(spreadsheetId);

    window.open(
      `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
      "_blank"
    );
  };

  const handleConnectGoogleSheets = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=1066531814491-va8snetn84c03cq54p5jvgc5agcd0gm8.apps.googleusercontent.com&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
      "+"
    )}`;
  };
  return (
    <Box component="main" sx={{ p: 3, width: "100%" }}>
      <Toolbar />
      <Hero />
      
    </Box>
  );
}
