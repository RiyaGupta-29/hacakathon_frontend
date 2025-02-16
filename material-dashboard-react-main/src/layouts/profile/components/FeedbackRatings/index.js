import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import MDTypography from "components/MDTypography";

const FeedbackRatings = () => {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #3f2b96 0%, #a8c0ff 100%)",
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
          Feedback & Ratings
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
            ⭐{" "}
            <span>
              Received <strong>4.8/5</strong> average rating from clients.
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
            💬{" "}
            <span>
              Positive feedback on <strong>communication skills</strong>.
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
            🏆{" "}
            <span>
              Recognized for <strong>problem-solving abilities</strong>.
            </span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeedbackRatings;
