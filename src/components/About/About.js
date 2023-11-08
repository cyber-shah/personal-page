import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ResumeComponents from "./ResumeComponents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <>
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
          date1="Jan 2023 - May 2025"
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
          date1="September 2022 "
          date2=" - December 2022 "
          date3="(Incomplete)"
        />
      </Item>

      <Item>
        <ResumeComponents
          title=""
          position="Bachelors in Architecture"
          company="Sardar Patel University, India"
          body1="APIED, Vallabh Vidhyanagar"
          date1="March 2014"
          date2="- December 2019"
        />
      </Item>

      <Item>
        <ResumeComponents
          title="Experience"
          position="Computational Designer"
          company="VastuShilpa Sangath LLP, India"
          body1="* C# Plugin Development: 10+ plugins and scripts on Visual Studio and RhinoCommon SDK to create
generative design algorithms, reducing modeling time by 30%. "
          body2= "* Generative design algorithms: Created optimized building designs reducing energy use by 27% through parametric
          modeling and structural analysis techniques. "
        body3 = ""
          date1=" August 2020 "
          date2 = "- July 2022"
        />
      </Item>


      <Item>
        <ResumeComponents
          title=""
          position="Graduate Teaching Assistant"
          company="Northeastern University, Boston, MA"
          body1="Programming Basics"
          date1=" September 2023 - Present"
        />
      </Item>


      <Item>
        <ResumeComponents
          title=""
          position="Lab Assistant"
          company="Harvard Education Innovation"
          body1="Harvard Education School, Cambridge, MA"
          date1=" September 2022 "
          date2="- December 2022"
        />
      </Item>

      </Stack>
      </>
  );
}