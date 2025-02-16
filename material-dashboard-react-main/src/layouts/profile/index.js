// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Profile components
import PersonalDetails from "./components/PersonalDetails";
import WorkSummary from "./components/WorkSummary";
import FeedbackRatings from "./components/FeedbackRatings";
import HelpSupport from "./components/HelpSupport";
import LogoutSession from "./components/LogoutSession";
import TeamHierarchy from "./components/TeamHierarchy";

// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  boxShadow: theme.shadows[4],
  padding: theme.spacing(3),
  transition: "0.3s",
  background: theme.palette.background.paper,
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

function Profile() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />

      {/* Full-width Personal Details Section */}
      <StyledCard sx={{ width: "100%", mb: 4 }}>
        <MDBox p={3}>
          <PersonalDetails />

          {/* Nested Profile Sections Inside Personal Details */}
          <MDBox mt={4}>
            <Grid container spacing={3}>
              {[WorkSummary, FeedbackRatings, TeamHierarchy, HelpSupport, LogoutSession].map(
                (Component, index) => (
                  <Grid item xs={12} md={6} xl={4} key={index}>
                    <StyledCard>
                      <Component />
                    </StyledCard>
                  </Grid>
                )
              )}
            </Grid>
          </MDBox>
        </MDBox>
      </StyledCard>
    </DashboardLayout>
  );
}

export default Profile;
