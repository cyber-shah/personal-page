import { Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

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
      justifyContent: "space-between",
    },
    title: {
      flex: 1,
    },
    content: {
      "text-align": "left",
      flex: 3,
    },
  };

  return (
    <Stack spacing={0}>
      <Item>
        <div className="main" style={styles.main}>
          <div style={styles.title}>
            <Typography variant="h5" color="primary">
              Education
            </Typography>
          </div>

          <div style={styles.content}>
            <Typography variant="h6" color="primary">
              MS in Computer Science
            </Typography>
            <Typography variant="h5" color="textPrimary">
              Northeastern University, Boston, MA
            </Typography>

            <Typography
              variant="body1"
              sx={{ paddingTop: 0.5 }}
              color="textSecondary"
            >
              Khoury College of Computer Sciences
              <br /> Concentration: Systems and Software
              <br /> Related Courses: Database Management Systems, Algorithms,
              Data Structures, Discrete Structures
            </Typography>
          </div>

          <div style={styles.thirds}>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              May 2025 <br />
              (Expected) <br />
              GPA: 4.00
            </Typography>
          </div>
        </div>
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
              Graduate School of Design
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
    </Stack>
  );
}
