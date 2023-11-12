import { Typography } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { Link, useLocation } from "react-router-dom";

function NavbarMUI(props) {
  const location = useLocation();

  const style = {
    Main: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      width: "100wh",
      height: "10vh",
      p: 10,
    },
    left: {
      padding: "20px",
    },
  };

  return (
    <div className="Main" style={style.Main}>
      <div className="left" style={style.left}>
        <Typography variant="h2">PS.</Typography>
      </div>
      <div className="SideText">
        <Tabs
          value={location.pathname}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="/" label="Home" component={Link} to="/" />
          {/* <Tab value="/projects" label="Projects" component={Link} to="/projects" /> */}
          <Tab value="/about" label="About" component={Link} to="/about"/>
          <Tab value="/resume" label="Resume" component={Link} to="/resume"/>
          <Tab 
              icon= <NightlightRoundIcon/>
              aria-label="Mode"
              onClick={props.toggleDarkMode}
            />        
          </Tabs>
      </div>
    </div>
  );
}
export default NavbarMUI;
