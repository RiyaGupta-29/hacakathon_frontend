import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const HelpSupport = () => {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        borderRadius: "16px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
        padding: "24px",
        transition: "0.3s",
        "&:hover": { boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.4)" },
      }}
    >
      <CardContent>
        <MDTypography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            color: "#FFD700",
            textTransform: "uppercase",
          }}
          gutterBottom
        >
          Help & Support
        </MDTypography>
        <Typography
          variant="body1"
          sx={{
            color: "#f0f0f0",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "400",
            marginBottom: "16px",
          }}
        >
          Need assistance? Our support team is here to help.
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            color: "#1c1e26",
            fontWeight: "bold",
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { background: "#FFA500" },
          }}
        >
          Contact Support
        </Button>
      </CardContent>
    </Card>
  );
};

export default HelpSupport;
