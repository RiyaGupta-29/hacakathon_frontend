export default function data() {
  return {
    columns: [
      { Header: "Subject", accessor: "subject", width: "30%", align: "left" },
      { Header: "Query ID", accessor: "queryId", align: "left" },
      { Header: "Sender", accessor: "sender", align: "left" },
      { Header: "Priority", accessor: "priority", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Date", accessor: "date", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        subject: "Tax Filing Delay",
        queryId: "QID-12345",
        sender: "John Doe",
        priority: "High",
        status: "Pending",
        date: "12-02-2025",
        action: "Approve | Reject",
      },
      {
        subject: "VAT Reimbursement",
        queryId: "QID-67890",
        sender: "Jane Smith",
        priority: "Medium",
        status: "In Progress",
        date: "11-02-2025",
        action: "48h Timer",
      },
      {
        subject: "Tax Policy Update",
        queryId: "QID-11223",
        sender: "Robert Johnson",
        priority: "Low",
        status: "Resolved",
        date: "10-02-2025",
        action: "View",
      },
      {
        subject: "Payroll Tax Issue",
        queryId: "QID-44556",
        sender: "Emily Davis",
        priority: "High",
        status: "Pending",
        date: "13-02-2025",
        action: "Approve | Reject",
      },
      {
        subject: "Customs Tax Clarification",
        queryId: "QID-77889",
        sender: "Michael Brown",
        priority: "Medium",
        status: "Resolved",
        date: "09-02-2025",
        action: "View",
      },
    ],
  };
}
