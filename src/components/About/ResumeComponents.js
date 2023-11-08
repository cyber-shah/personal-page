import { Typography } from "@mui/material";
import React from "react";

export default function ResumeComponents(props) {
  const styles = {
    main: {
      maxWidth: "1200px",
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
    <div className="main" style={styles.main}>
      <div style={styles.title}>
        <Typography variant="h5" color="primary">
          {props.title}
        </Typography>
      </div>

      <div style={styles.content}>
        <Typography variant="h6" color="primary">
          {props.position}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {props.company}
        </Typography>

        <Typography
          variant="body1"
          sx={{ paddingTop: 0.5 }}
          color="textSecondary">
                  {props.body1} <br/>
                  {props.body2} <br/>
                  {props.body3}
        </Typography>
      </div>

      <div style={styles.thirds}>
              <Typography variant="body1" sx={{ textAlign: "right" }}>
                  {props.date1} <br/>
                  {props.date2} <br/>
                  {props.date3}
        </Typography>
      </div>
    </div>
  );
}
