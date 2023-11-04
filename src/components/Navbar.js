import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';;

const StyledFrame = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 2356.51px;

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-Light", Helvetica;
    font-size: 53.1px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -2.21px;
    position: relative;
    width: fit-content;
  }

  & .div {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 66.32px;
    justify-content: center;
    position: relative;
  }

  & .text-wrapper-2 {
    color: #ffffff;
    font-family: "Inter-Light", Helvetica;
    font-size: 39.8px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
  }

  & .sun-fill {
    height: 53.05px;
    position: relative;
    width: 53.05px;
  }
`;

function Navbar(props) {
  return (
    <StyledFrame>
      <div className="text-wrapper">PS.</div>
      <div className="div">
        <div className="text-wrapper-2">Projects</div>
        <div className="text-wrapper-2">Resume</div>
        <div className="text-wrapper-2">Contact</div>
        <img className="sun-fill" alt="Sun fill" src="sun-fill-1.svg" />
      </div>
    </StyledFrame>
  );
};

function NavbarMUI(props) {
    const style = {
        Main: {  
            'align-items': 'center',
            display: 'flex',
            'justify-content': 'space-between',
            position: 'relative',
            width: '100wh',
            height : '10vh',
            p: 10,},
        
    }

    return (
        <div className = "Main" style = {style.Main}>
            <div className="left">
                <Typography variant='h2'>
                    PS.
                </Typography>
            </div>
            <div className="SideText">
                <Tabs
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                    >
                    <Tab label="Projects" />
                    <Tab label="Resume" />
                    <Tab label="Contact" />
                    <Tab icon={<NightlightRoundIcon />} aria-label="phone" />
                </Tabs>
            </div>
        </div>
    )
}
export default NavbarMUI;