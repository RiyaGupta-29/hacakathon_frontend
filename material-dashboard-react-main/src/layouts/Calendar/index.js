import React, { useState, useEffect } from "react";
import { Card, useMediaQuery, IconButton } from "@mui/material";
import { WbSunny, DarkMode } from "@mui/icons-material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "animate.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    // Fetch deadlines from localStorage
    const storedDeadlines = JSON.parse(localStorage.getItem("ticketDeadlines")) || [];

    // Convert deadlines to event format
    const deadlineEvents = storedDeadlines.map((ticket) => ({
      title: `🚀 Ticket ${ticket.queryId} Deadline`,
      start: new Date(ticket.deadline),
      end: new Date(ticket.deadline),
    }));

    setEvents(deadlineEvents);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3} px={5} display="flex" justifyContent="center">
        <Card
          sx={{
            p: 4,
            boxShadow: 5,
            borderRadius: 3,
            bgcolor: darkMode ? "#121212" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
            width: "100%",
            minHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            transition: "background-color 0.3s ease-in-out",
          }}
          className="animate__animated animate__fadeIn"
        >
          {/* Header */}
          <MDBox display="flex" justifyContent="space-between" alignItems="center" pb={2}>
            <MDTypography
              variant="h4"
              fontWeight="bold"
              color="primary"
              textAlign="center"
              flexGrow={1}
            >
              📅 Calendar - Ticket Deadlines
            </MDTypography>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <WbSunny /> : <DarkMode />}
            </IconButton>
          </MDBox>

          {/* Calendar Component */}
          <MDBox mt={3} px={2}>
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{
                height: "75vh",
                width: "100%",
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#ffffff" : "#000000",
                borderRadius: "10px",
                padding: "10px",
                transition: "all 0.3s ease-in-out",
              }}
              className="animate__animated animate__fadeInUp"
            />
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
};

export default Calendar;
