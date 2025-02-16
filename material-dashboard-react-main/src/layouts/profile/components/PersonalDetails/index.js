import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
import {
  Card,
  CardContent,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Icon,
  Avatar,
  Typography,
} from "@mui/material";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import backgroundImage from "assets/images/bg-profile.jpeg";

const Profile = () => {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, []);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      {/* Background Section */}
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />

      {/* Main Profile Card */}
      <Card sx={{ position: "relative", mt: -8, mx: 3, py: 2, px: 2 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src="/static/images/avatar/1.jpg" alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                John Doe
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Software Engineer
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <CardContent>
                <MDBox display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    <strong>Email:</strong> john.doe@example.com
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Phone:</strong> +1 234 567 890
                  </Typography>
                </MDBox>
              </CardContent>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
};

export default Profile;
