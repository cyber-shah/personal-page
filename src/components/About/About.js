import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ResumeComponents from "./AboutComponents";

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
            body={[
              {
                id: 1,
                body: "Khoury College of Computer Sciences"
              },
              {
                id: 2,
                body: "Concentration: Systems and Software"
              },
              {
                id: 3,
                body: "Courses: Database Management Systems, Algorithms, Data Structures, Discrete Structures"
              }
            ]}
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
            body={[
              {
                id: 1,
                body: "Graduate School of Design"
              },
              {
                id: 2,
                body: "Concentration: Computational Design"
              },
              {
                id: 3,
                body: "Courses: 3D printing ceramics, Intro to Computational Design"
              }
            ]}
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
            body={[{ id: 1, body: "APIED, Vallabh Vidhyanagar" }]}
            date1="March 2014"
            date2="- December 2019"
          />
        </Item>


        <Item>
          <ResumeComponents
            title="Experience"
            position="Computational Designer"
            company="VastuShilpa Sangath LLP, India"
            body={[
              {
                id: 1,
                body: "* Crafted and deployed 10+ C# plugins and scripts utilizing Visual Studio and RhinoCommon SDK. Achieved a 30% reduction in modeling time, optimizing generative design algorithms."
              },
              {
                id: 2,
                body: "* Created energy generative design algorithms incorporating parametric modeling and structural analysis techniques. Significantly reduced energy usage by 27% - understood with simulations."
              },
              {
                id: 3,
                body: "* Automated 40% of repetitive documentation tasks through Python scripts, resulting in the elimination of over 200 man-hours per project. Accelerated 3D model and documentation generation by 45%."
              },
              {
                id: 4,
                body: "* Generative design algorithms: Created optimized building designs reducing energy use by 27% through parametric modeling and structural analysis techniques. Spearheaded data processing and analysis efforts, contributing to a 27% reduction in construction waste."
              }
            ]}
            date1="August 2020"
            date2="- July 2022"
          />
        </Item>


        <Item>
          <ResumeComponents
            title=""
            position="Graduate Teaching Assistant"
            company="Northeastern University, Boston, MA"
            body={[{ id: 1, body: "Programming Basics with Prof. Pedro Cruz" }]}
            date1=" September 2023 - Present"
          />
        </Item>

        <Item>
          <ResumeComponents
            title=""
            position=""
            company=""
            body={[{ id: 1, body: "Viz Fundamentals : Frontend Development" }]}
            date1="January 2024 - Present"
          />
        </Item>


        <Item>
          <ResumeComponents
            title=""
            position="Lab Assistant"
            company="Harvard Education Innovation"
            body={[{ id: 1, body: "Harvard Education School, Cambridge, MA" }]}
            date1=" September 2022 "
            date2="- December 2022"
          />
        </Item>
      </Stack>
    </>
  );
}
