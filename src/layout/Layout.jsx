import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import AccountMenu from "../components/AccountMenu";
import AppBar from "../components/AppBar";
import Copyright from "../components/Copyright";
import Drawer from "../components/Drawer";
import { MainListItems } from "../components/ListItems";
import logo from "../assets/logo.png";
import { drawerWidth } from "../components/Drawer";
import SwipeableD from "../components/DrawerFor";
import "./Layout.css";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Layout() {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", overflow:"hidden", height:"100vh" }}>
        <CssBaseline />
        <AppBar
          sx={{
            zIndex: "1",
            width: "100%",
          }}
          position="absolute"
          color="warning"
          open={true}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="fake"></div>
            <div className="re">
              <SwipeableD />
            </div>
            <AccountMenu />
          </Toolbar>
        </AppBar>
        <div className="fra" >
          <Drawer variant="permanent"   open={true} >
            <Box
            
              sx={{
                
                textAlign: "center",
                display: "flex",
                gap: "2px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-10px",
                paddingTop: "20px",
              }}
            >
              <Link to="/panel">
                <img
                  className="tractor"
                  src={logo}
                  height={80}
                  width={80}
                  alt=""
                />
              </Link>
              <Typography component="h1" variant="h4">
                Shantui
              </Typography>
            </Box>
            <Divider />
            <List component="nav" sx={{overflowX:"hidden"}}>
              <MainListItems />
            </List>
          </Drawer>
        </div>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
