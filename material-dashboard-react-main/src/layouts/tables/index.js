// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import FilterBar from "./FilterBar"; // Importing the FilterBar component

// React Router
import { useNavigate } from "react-router-dom";

// Data
import projectsTableData from "./data/TicketTable";
import { useState, useEffect } from "react"; // Importing useState and useEffect

function Tables() {
  const navigate = useNavigate(); // Hook for navigation
  const tableData = projectsTableData();
  const pColumns = tableData.columns || []; // Ensure columns is defined
  const pRows = tableData.rows || []; // Ensure rows is defined
  const [filteredRows, setFilteredRows] = useState(Array.isArray(pRows) ? pRows : []); // Ensure filteredRows is an array
  const [timers, setTimers] = useState({}); // State to manage timers for each ticket

  const handleFilter = (filters) => {
    const { priority, status, dateOrder, customDate } = filters;

    let filteredData = Array.isArray(pRows) ? pRows : []; // Ensure pRows is treated as an array

    if (priority) {
      filteredData = filteredData.filter((row) => row.priority === priority);
    }

    if (status) {
      filteredData = filteredData.filter((row) => row.status === status);
    }

    if (dateOrder === "newest") {
      filteredData = [...filteredData].sort(
        (a, b) =>
          new Date(b.date.split("-").reverse().join("-")) -
          new Date(a.date.split("-").reverse().join("-"))
      );
    } else if (dateOrder === "oldest") {
      filteredData = [...filteredData].sort(
        (a, b) =>
          new Date(a.date.split("-").reverse().join("-")) -
          new Date(b.date.split("-").reverse().join("-"))
      );
    } else if (dateOrder === "custom" && customDate) {
      filteredData = filteredData.filter((row) => row.date === customDate);
    }

    setFilteredRows(filteredData);
  };

  const handleApprove = (queryId) => {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 48); // Set deadline 48 hours from now

    const updatedRows = filteredRows.map((row) =>
      row.queryId === queryId ? { ...row, status: "In Progress", action: "48h Timer" } : row
    );

    setFilteredRows(updatedRows);
    setTimers((prevTimers) => ({
      ...prevTimers,
      [queryId]: 48 * 60 * 60, // 48 hours in seconds
    }));

    // Save deadlines in localStorage
    const existingDeadlines = JSON.parse(localStorage.getItem("ticketDeadlines")) || [];
    const newDeadlines = [...existingDeadlines, { queryId, deadline }];
    localStorage.setItem("ticketDeadlines", JSON.stringify(newDeadlines));
  };

  const handleReject = (queryId) => {
    setFilteredRows((prevRows) => prevRows.filter((row) => row.queryId !== queryId));
  };

  // Handle row click for "In Progress" tickets
  const handleRowClick = (queryId) => {
    navigate(`/reply/${queryId}`); // Navigate to the ticket details page
  };

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const newTimers = { ...prevTimers };
        Object.keys(newTimers).forEach((key) => {
          if (newTimers[key] > 0) {
            newTimers[key] -= 1;
          }
        });
        return newTimers;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time for display
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hrs}h ${mins}m`;
  };

  // Modify rows to include action buttons and timers
  const displayedRows = filteredRows.map((row) => ({
    ...row,
    action:
      row.status === "Pending" ? (
        <>
          <MDButton size="small" color="success" onClick={() => handleApprove(row.queryId)}>
            Approve
          </MDButton>
          <MDButton size="small" color="error" onClick={() => handleReject(row.queryId)}>
            Reject
          </MDButton>
        </>
      ) : row.status === "In Progress" ? (
        <>
          <LinearProgress
            variant="determinate"
            value={(1 - timers[row.queryId] / (48 * 60 * 60)) * 100}
          />
          <MDTypography variant="caption" color="textSecondary">
            {formatTime(timers[row.queryId])} remaining
          </MDTypography>
        </>
      ) : (
        row.action
      ),
    onClick: row.status === "In Progress" ? () => handleRowClick(row.queryId) : null, // Add click handler for "In Progress" rows
  }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <FilterBar onFilter={handleFilter} /> {/* Adding the FilterBar component */}
                <DataTable
                  table={{ columns: pColumns, rows: displayedRows }} // Using modified rows
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                  onRowClick={(row) => row.onClick && row.onClick()} // Handle row click
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
