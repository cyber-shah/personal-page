import { Typography } from "@mui/material/index.js";
import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Landing(props) {
  const styles = {
    About: {
      margin: "0 auto",
      width: "80vw",
      height: "90vh",
      alignItems: "center",
    },

    text: {
      height: "30%",
      margin: "0 auto",
      paddingTop: "10%",
      alignItems: "center",
    },

    Links: {
      width: "80%",
      height: "70%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end" /* This will center items vertically */,
      padding: "25px",
      gap: "4vw",
      margin: "0 auto" /* This will center the .Links div */,
    },
  }


  return (
    <div className="About" style={styles.About}>
      {/* <style>{mediaQueryStyles}</style> */}

      
      <div className="text" style={styles.text}>
        <Typography variant="h6">Hey! I'm</Typography>

        <div>
          <Typography variant="h1">Pranchal Shah</Typography>
        </div>

        <Typography variant="h6">
          a full stack software developer and MS Computer Science candidate at
          Northeastern University.
          <br /> <br /> <br /> I am actively seeking co-op + internship
          opportunities where I can use
          <br /> software to solve pressing business problems!
        </Typography>
      </div>

      <div className="Links" style={styles.Links}>
        <Button
          component="a"
          href="https://www.linkedin.com/in/pranchals/"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          startIcon={<LinkedInIcon />}
        >
          Linkedin
        </Button>

        <Button
          component="a"
          href="https://github.com/cyber-shah?tab=overview&from=2023-11-01&to=2023-11-13"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>

        <Button
          component="a"
          href="mailto:shah.pranc@northeastern.edu"
          color="secondary"
          startIcon={<SendIcon />}
        >
          Email
        </Button>
      </div>
    </div>
  );
}

export default Landing;
