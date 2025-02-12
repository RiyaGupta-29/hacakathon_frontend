import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";
import { useState } from "react";

export default function TicketTable() {
  const [tickets, setTickets] = useState([
    {
      id: "001",
      subject: "Tax Compliance",
      sender: "John Doe",
      priority: "High",
      status: "Pending",
      date: "08-02-2025",
    },
    {
      id: "002",
      subject: "VAT Filing",
      sender: "Jane Smith",
      priority: "Medium",
      status: "In Progress",
      date: "07-02-2025",
    },
    {
      id: "003",
      subject: "Corporate Tax",
      sender: "Mike Johnson",
      priority: "Low",
      status: "Resolved",
      date: "06-02-2025",
    },
  ]);

  const handleApprove = (id) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "In Progress" } : ticket
      )
    );
  };

  const handleReject = (id) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== id));
  };

  const columns = [
    { Header: "Subject", accessor: "subject", width: "30%", align: "left" },
    { Header: "Query ID", accessor: "id", width: "10%", align: "center" },
    { Header: "Sender", accessor: "sender", width: "20%", align: "left" },
    { Header: "Priority", accessor: "priority", width: "10%", align: "center" },
    { Header: "Status", accessor: "status", width: "15%", align: "center" },
    { Header: "Date", accessor: "date", width: "10%", align: "center" },
    { Header: "Actions", accessor: "actions", width: "15%", align: "center" },
  ];

  const rows = tickets.map((ticket) => ({
    subject: ticket.subject,
    id: ticket.id,
    sender: ticket.sender,
    priority: ticket.priority,
    status: ticket.status,
    date: ticket.date,
    actions: (
      <MDBox display="flex" justifyContent="center">
        {ticket.status === "Pending" && (
          <>
            <MDButton
              variant="contained"
              color="success"
              size="small"
              onClick={() => handleApprove(ticket.id)}
            >
              Approve
            </MDButton>
            <MDButton
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleReject(ticket.id)}
              sx={{ ml: 1 }}
            >
              Reject
            </MDButton>
          </>
        )}
        {ticket.status === "In Progress" && (
          <MDButton variant="contained" color="info" size="small">
            Start Working
          </MDButton>
        )}
      </MDBox>
    ),
  }));

  return { columns, rows };
}
