import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import MDTypography from "components/MDTypography";

const WorkSummary = () => {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #002f4b 0%, #008c8c 100%)",
        color: "white",
        borderRadius: "16px",
        boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        padding: "24px",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <MDTypography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #ffffff 0%, #d1e3ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Work Summary & Performance
        </MDTypography>
        <Box sx={{ padding: "10px 0" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "500",
              fontFamily: "'Roboto', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 0",
            }}
          >
            ✅{" "}
            <span>
              Completed <strong>10 projects</strong> this quarter.
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "500",
              fontFamily: "'Roboto', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 0",
            }}
          >
            🌟{" "}
            <span>
              Achieved <strong>95% customer satisfaction</strong>.
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "500",
              fontFamily: "'Roboto', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 0",
            }}
          >
            ⏳{" "}
            <span>
              Consistently met <strong>deadlines</strong>.
            </span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WorkSummary;
