import { Typography } from "@mui/material";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavbarMUI(props) {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Home" href="/" />
          <Tab value="two" label="Projects" href="/projects" />
          <Tab value="three" label="About" href="/about"/>
          <Tab value="four" label="Contact" href="/contact"/>
          <Tab value="five" label="Resume" href="/resume"/>
          <Tab icon={<NightlightRoundIcon />} aria-label="Mode" />
        </Tabs>
      </div>
    </div>
  );
}
export default NavbarMUI;
