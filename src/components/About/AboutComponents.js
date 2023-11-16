import { Typography, Grid } from "@mui/material";
import React from "react";

export default function ResumeComponents(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="1200px"
      padding="20px"
      margin="0 auto"
    >
      {/* Title */}
      <Grid item xs={12} sm={4} sx={{ paddingBottom: 2}} >
        <Typography variant="h5" color="primary">
          {props.title}
        </Typography>
      </Grid>

      {/* Content */}
      <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
        <Typography variant="h6" color="primary">
          {props.position}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {props.company}
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 0.5, textAlign: "left" }} color="textSecondary">
          {props.body1} <br />
          {props.body2} <br />
          {props.body3}
        </Typography>
      </Grid>

      {/* Thirds */}
      <Grid item xs={12} sm={2}>
        <Typography variant="body1" sx={{ textAlign: "right" }}>
          {props.date1} <br />
          {props.date2} <br />
          {props.date3}
        </Typography>
      </Grid>
    </Grid>
  );
}
