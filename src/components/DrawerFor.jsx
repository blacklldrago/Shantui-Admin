import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { MainListItems } from "./ListItems";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Swipeable() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <div>
        <Box
          sx={{
            
            textAlign: "center",
            display: "flex",
            gap: "2px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/panel">
            <img className="tractor" src={logo} height={80} width={80} alt="" />
          </Link>
            <Typography component="h1" variant="h4">
              Shantui
            </Typography>
        </Box>
        <Divider />
        <List component="nav">
          <MainListItems />
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "white" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
