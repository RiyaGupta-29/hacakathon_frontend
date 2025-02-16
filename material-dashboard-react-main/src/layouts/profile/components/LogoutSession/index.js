import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import MDTypography from "components/MDTypography";

const LogoutSession = () => {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #3f0d12 0%, #a71d31 100%)",
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
            color: "#ffb3b3",
            textTransform: "uppercase",
          }}
          gutterBottom
        >
          Logout & Session
        </MDTypography>
        <Typography
          variant="body1"
          sx={{
            color: "#f8d7da",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "400",
            marginBottom: "16px",
          }}
        >
          Manage your session and logout securely.
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)",
            color: "#fff",
            fontWeight: "bold",
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { background: "#cc0000" },
          }}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default LogoutSession;
