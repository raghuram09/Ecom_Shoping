
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
       <Tabs>
        <Tab label="Home" />
        <Tab label="About Me" />
        <Tab label="Projects" />
        
    </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
