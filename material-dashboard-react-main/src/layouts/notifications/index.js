import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [queryAlerts, setQueryAlerts] = useState({
    highPriority: false,
    assigned: false,
    delayed: false,
    completed: false,
  });

  const openAlert = (type) => setQueryAlerts({ ...queryAlerts, [type]: true });
  const closeAlert = (type) => setQueryAlerts({ ...queryAlerts, [type]: false });

  const renderSnackbar = (type, color, icon, message) => (
    <MDSnackbar
      color={color}
      icon={icon}
      title="Query Alert"
      content={message}
      open={queryAlerts[type]}
      onClose={() => closeAlert(type)}
      close={() => closeAlert(type)}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5">Query Alerts</MDTypography>
                <MDTypography variant="body2" color="text">
                  Get notified about query status changes and urgent actions.
                </MDTypography>
              </MDBox>
              <MDBox px={3} pb={3}>
                <MDAlert color="error" dismissible>
                  High-Priority Query Received! Immediate action required.
                </MDAlert>
                <MDAlert color="info" dismissible>
                  A query has been assigned to an SME.
                </MDAlert>
                <MDAlert color="warning" dismissible>
                  A query response is delayed. Follow up needed.
                </MDAlert>
                <MDAlert color="success" dismissible>
                  Query marked as completed!
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h5">Live Notifications</MDTypography>
              </MDBox>
              <MDBox p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="error"
                      onClick={() => openAlert("highPriority")}
                      fullWidth
                    >
                      High-Priority Query
                    </MDButton>
                    {renderSnackbar(
                      "highPriority",
                      "error",
                      "warning",
                      "A new high-priority query needs attention!"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="info"
                      onClick={() => openAlert("assigned")}
                      fullWidth
                    >
                      Query Assigned
                    </MDButton>
                    {renderSnackbar(
                      "assigned",
                      "info",
                      "person",
                      "A query has been assigned to an SME."
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      onClick={() => openAlert("delayed")}
                      fullWidth
                    >
                      Delayed Response
                    </MDButton>
                    {renderSnackbar(
                      "delayed",
                      "warning",
                      "schedule",
                      "A query response is overdue. Follow-up required."
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      color="success"
                      onClick={() => openAlert("completed")}
                      fullWidth
                    >
                      Query Completed
                    </MDButton>
                    {renderSnackbar(
                      "completed",
                      "success",
                      "check",
                      "Query successfully resolved!"
                    )}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
