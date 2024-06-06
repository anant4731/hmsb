"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Web3 from "web3";

const drawerWidth = 240;
const navItems = ["CONNECT WALLET", "LOGIN"];

export default function Navbar(props) {
  const connectToMetaMask = async () => {
    if (typeof window !== "undefined") {
      if (window.ethereum || window.web3) {
        try {
          let web3;
          if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            await window.ethereum.enable(); // Request account access if needed
          } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
          }

          const accounts = await web3.eth.getAccounts();
          console.log("accounts =>", accounts);
          console.log(accounts[0]);
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Install MetaMask first");
      }
    }
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HMSB
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "black" }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              margin: "0 15px",
            }}
          >
            <Link href={"/"}>HMSB</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href={"/dashboard/add-admin"}>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  margin: "0 15px",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                ADD AN ADMIN
              </Button>
            </Link>
            <Link href={"/api/auth/signout"}>
              <Button
                sx={{
                  backgroundColor: "red",
                  color: "#fff",
                  margin: "0 15px",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid red",
                  },
                }}
              >
                LOGOUT
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
