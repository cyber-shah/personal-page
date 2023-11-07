import { Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ResumeComponents from "./ResumeComponents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  const styles = {
    main: {
      "max-width": "1200px",
      padding: "20px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "flex-start",
    },
    title: {
      width: "20%",
    },
    content: {
      width: "60%",
      textAlign: "left",
    },
	  thirds: {
		width: "20%",
      textAlign: "right",
    },
  };

	return (
	  <>
    <Stack spacing={0}>
		<Item>
		</Item>

      <Item>
        <div className="main" style={styles.main}>
          <div style={styles.title}></div>

          <div style={styles.content}>
            <Typography variant="h6" color="primary">
              Masters in Architectural Engineering
            </Typography>
            <Typography variant="h5" color="textPrimary">
              Harvard University, Cambridge, MA
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 0.5 }}
              color="textSecondary"
            >
              Graduate School of Design
              <br /> Concentration: Computational Design
              <br /> Related Courses: 3D printing ceramics, Intro to
              Computational Design,
            </Typography>
          </div>

          <div style={styles.thirds}>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              December 2022 <br />
              (Incomplete)
            </Typography>
          </div>
        </div>
      </Item>

      <Item>
        <div className="main" style={styles.main}>
          <div style={styles.title}></div>

          <div style={styles.content}>
            <Typography variant="h6" color="primary">
              Bachelors in Architecture
            </Typography>
            <Typography variant="h5" color="textPrimary">
              Sardar Patel University, India
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 0.5 }}
              color="textSecondary"
            >
              APIED, Vallabh Vidhyanagar
              <br /> Concentration: Computational Design
              <br /> Related Courses: 3D printing ceramics, Intro to
              Computational Design,
            </Typography>
          </div>

          <div style={styles.thirds}>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              December 2019
            </Typography>
          </div>
        </div>
      </Item>

      <Item>
        <div className="main" style={styles.main}>
          <div style={styles.title}>
            <Typography variant="h5" color="primary">
              Experience
            </Typography>
          </div>

          <div style={styles.content}>
            <Typography variant="h6" color="primary">
              Graduate Teaching Assistant
            </Typography>
            <Typography variant="h5" color="textPrimary">
              Northeastern University, Boston, MA
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 0.5 }}
              color="textSecondary"
            >
              Programming Basics
            </Typography>
          </div>

          <div style={styles.thirds}>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              September 2023 - Present
            </Typography>
          </div>
        </div>
      </Item>

      <Item>
        <div className="main" style={styles.main}>
          <div style={styles.title}>
            <Typography variant="h5" color="primary"></Typography>
          </div>

          <div style={styles.content}>
            <Typography variant="h6" color="primary">
              Lab Assistant{" "}
            </Typography>
            <Typography variant="h5" color="textPrimary">
              Harvard Education Innovation{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: 0.5 }}
              color="textSecondary"
            >
              Harvard Education School, Cambridge, MA
            </Typography>
          </div>

          <div style={styles.thirds}>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              September 2022 - December 2022
            </Typography>
          </div>
        </div>
      </Item>
		</Stack >
		</>
  );
}


// main="Education"
// 				position="MS in Computer Science"
// 				company="Northeastern University, Boston, MA"
// 				body="Khoury College of Computer Sciences
// 							<br /> Concentration: Systems and Software
// 							<br /> Related Courses: Database Management Systems, Algorithms,
// 							Data Structures, Discrete Structuresss"