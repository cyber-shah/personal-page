import { Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
    <Stack spacing={2}>
      <Item>
        <div className="main" style={styles.main}>
          <div style={styles.title}>
            <Typography variant="h6">Education</Typography>
          </div>

          <div style={styles.content}>
            <Typography variant="h6">
              Northeastern University, Boston, MA
              <br /> MS in Computer Science - Align
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 0.5 }}>
              Khoury College of Computer Sciences
              <br /> Concentration: Systems and Software
              <br /> Related Courses: Database Management Systems, Algorithms,
              Scalable Distributed Systems.
            </Typography>
            <br />
            <br />
            <Typography variant="h6">
              Harvard University, Cambridge, MA
              <br /> Masters in Architecture and Computational Design
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

      <Item></Item>
      <Item>Item 3</Item>
    </Stack>
  );
}
// <div className='main' style={styles.main} >
//     <div style={styles.title}>
//         <Typography variant='h6'>
//             Education
//         </Typography>
//     </div>

// </div>
