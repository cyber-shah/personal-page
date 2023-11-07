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
  return (
    <Stack spacing={0}>
      <Item>
        <ResumeComponents
          title="Education"
          position="MS in Computer Science"
          company="Northeastern University, Boston, MA"
          body1="Khoury College of Computer Sciences"
          body2="Concentration: Systems and Software"
          body3="Courses: Database Management Systems, Algorithms,
							Data Structures, Discrete Structures"
          date1="May 2025"
          date2="(expected)"
          date3="GPA 4.0"
        />
      </Item>

      <Item>
        <ResumeComponents
          title=""
          position="Masters in Architectural Engineering"
          company="Harvard University, Cambridge, MA"
          body1="Graduate School of Design"
          body2="Concentration: Computational Design"
          body3="Courses: 3D printing ceramics, Intro to
              Computational Design"
          date1="December 2022 "
          date2="(Incomplete)"
        />
      </Item>

      <Item>
        <ResumeComponents
          title=""
          position="Bachelors in Architecture"
          company="Sardar Patel University, India"
          body1="APIED, Vallabh Vidhyanagar"
          body2="Concentration: Computational Design"
          body3="Courses: 3D printing ceramics, Intro to
              Computational Design"
          date1="March 2014 -"
          date2="December 2019"
        />
      </Item>
    </Stack>
  );
}

//  <Item>
//         <div className="main" style={styles.main}>
//           <div style={styles.title}>
//             <Typography variant="h5" color="primary">
//               Experience
//             </Typography>
//           </div>

//           <div style={styles.content}>
//             <Typography variant="h6" color="primary">
//               Graduate Teaching Assistant
//             </Typography>
//             <Typography variant="h5" color="textPrimary">
//               Northeastern University, Boston, MA
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ paddingTop: 0.5 }}
//               color="textSecondary"
//             >
//               Programming Basics
//             </Typography>
//           </div>

//           <div style={styles.thirds}>
//             <Typography variant="body1" sx={{ textAlign: "right" }}>
//               September 2023 - Present
//             </Typography>
//           </div>
//         </div>
//       </Item>

{
  /* <Item>
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
      </Item> */
}
