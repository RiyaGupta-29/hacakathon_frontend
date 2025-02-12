export default function getTicketTableData() {
  const tickets = [
    {
      id: "TQ12345",
      subject: "Tax Deduction Eligibility",
      sender: "John Doe",
      priority: "High",
      status: "Pending",
      date: "10-02-2025",
    },
    {
      id: "TQ12346",
      subject: "Corporate Tax Filing",
      sender: "Jane Smith",
      priority: "Medium",
      status: "Pending",
      date: "09-02-2025",
    },
    {
      id: "TQ12347",
      subject: "GST Refund Process",
      sender: "Michael Brown",
      priority: "Low",
      status: "Resolved",
      date: "08-02-2025",
    },
  ];

  const columns = [
    { Header: "Query ID", accessor: "queryId", align: "left" },
    { Header: "Subject", accessor: "subject", align: "left" },
    { Header: "Sender", accessor: "sender", align: "left" },
    { Header: "Priority", accessor: "priority", align: "center" },
    { Header: "Status", accessor: "status", align: "center" },
    { Header: "Date", accessor: "date", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  const rows = tickets.map((ticket) => ({
    queryId: ticket.id,
    subject: ticket.subject,
    sender: ticket.sender,
    priority: ticket.priority,
    status: ticket.status,
    date: ticket.date,
    action: "Actions Here", // Replace with actual buttons if needed
  }));

  return { columns, rows };
}
