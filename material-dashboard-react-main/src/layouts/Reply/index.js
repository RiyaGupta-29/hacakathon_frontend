import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  TextField,
  Button,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const ReplyPage = ({ ticket = {} }) => {
  const [reply, setReply] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [rating, setRating] = useState(0);

  const isReplyEmpty = reply.trim() === ""; // Check if reply is empty

  const handleSendReply = () => {
    console.log("Reply Sent:", reply);
    console.log("Query Rated:", rating, "Stars");
    setOpenConfirm(false);
    setReply("");
    setRating(0);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3} px={5} display="flex" justifyContent="center">
        <Grid container spacing={3} maxWidth="lg">
          <Grid item xs={12}>
            <Card
              sx={{
                p: 4,
                boxShadow: 5,
                borderRadius: 3,
                bgcolor: "#ffffff",
                width: "100%",
                minHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Header */}
              <MDTypography
                variant="h4"
                fontWeight="bold"
                color="primary"
                textAlign="center"
                pb={2}
                borderBottom="2px solid #ddd"
              >
                {ticket.subject || "Query Subject"}
              </MDTypography>

              {/* Query Details */}
              <MDBox
                mb={4}
                p={3}
                bgcolor="#f9f9f9"
                borderRadius={2}
                boxShadow={1}
                border="1px solid #ddd"
              >
                <MDTypography variant="body1" color="text.primary">
                  {ticket.body || "Query details will appear here..."}
                </MDTypography>
              </MDBox>

              {/* Reply Input */}
              <TextField
                label="Type your reply here..."
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                  },
                  mb: 3,
                }}
              />

              {/* Action Buttons */}
              <MDBox display="flex" justifyContent="space-between" alignItems="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#d32f2f",
                    color: "#fff",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#b71c1c" },
                  }}
                >
                  Escalate
                </Button>
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    disabled={isReplyEmpty}
                    sx={{
                      backgroundColor: isReplyEmpty ? "#b0bec5" : "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: isReplyEmpty ? "#b0bec5" : "#1565c0" },
                    }}
                  >
                    Save Reply
                  </Button>
                  <Button
                    variant="contained"
                    disabled={isReplyEmpty}
                    sx={{
                      backgroundColor: isReplyEmpty ? "#b0bec5" : "#ff9800",
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: isReplyEmpty ? "#b0bec5" : "#f57c00" },
                    }}
                  >
                    Add to KB
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#2e7d32",
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#512da8" },
                    }}
                  >
                    Self-Service Option
                  </Button>
                  <Button
                    variant="contained"
                    disabled={isReplyEmpty}
                    sx={{
                      backgroundColor: isReplyEmpty ? "#b0bec5" : "#673ab7",
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: isReplyEmpty ? "#b0bec5" : "#512da8" },
                    }}
                    onClick={() => setOpenConfirm(true)} // Open confirmation dialog
                  >
                    Send
                  </Button>
                </Box>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      {/* Confirmation Dialog */}
      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 2,
            width: "400px",
            textAlign: "center",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Confirm Reply</DialogTitle>
        <DialogContent>
          <MDTypography variant="body1" mb={2}>
            Are you sure you want to send this reply via email?
          </MDTypography>

          {/* Rating inside pop-up */}
          <MDTypography variant="body1" fontWeight="bold" mb={1}>
            Rate this query:
          </MDTypography>
          <Rating
            name="query-rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            size="large"
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
          <Button
            onClick={() => setOpenConfirm(false)}
            sx={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              fontWeight: "bold",
              px: 3,
              "&:hover": { backgroundColor: "#b71c1c" },
            }}
          >
            No
          </Button>
          <Button
            onClick={handleSendReply}
            sx={{
              backgroundColor: "#2e7d32",
              color: "#fff",
              fontWeight: "bold",
              px: 3,
              "&:hover": { backgroundColor: "#1b5e20" },
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

// ✅ PropTypes validation
ReplyPage.propTypes = {
  ticket: PropTypes.shape({
    subject: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default ReplyPage;
