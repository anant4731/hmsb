import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Hero from "@/components/hero/Hero";

export default function Home(props) {
  return (
    <Box component="main" sx={{ p: 3, width: "100%" }}>
      <Toolbar />
      <Hero />
      
    </Box>
  );
}
