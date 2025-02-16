import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const profileView = [
  {
    id: "1",
    name: "Manager",
    role: "Manager",
    subordinates: [
      {
        id: "2",
        name: "Team Lead",
        role: "Team Lead",
        subordinates: [{ id: "3", name: "John Doe", role: "Software Engineer" }],
      },
    ],
  },
];

const fullHierarchy = [
  {
    id: "1",
    name: "Manager",
    role: "Manager",
    subordinates: [
      {
        id: "2",
        name: "Team Lead 1",
        role: "Team Lead",
        subordinates: [
          { id: "3", name: "John Doe", role: "Software Engineer" },
          { id: "4", name: "Alice Johnson", role: "Software Engineer" },
        ],
      },
      {
        id: "5",
        name: "Team Lead 2",
        role: "Team Lead",
        subordinates: [
          { id: "6", name: "Bob Brown", role: "Software Engineer" },
          { id: "7", name: "Emily Davis", role: "Software Engineer" },
        ],
      },
    ],
  },
];

const HierarchyNode = ({ member }) => (
  <Box sx={{ textAlign: "center", marginBottom: 2 }}>
    <Tooltip title={member.role} arrow>
      <AccountCircle sx={{ fontSize: "3rem", color: "#4FC3F7" }} />
    </Tooltip>
    <Typography
      variant="h6"
      sx={{ fontWeight: "bold", color: "#ffffff", fontFamily: "'Poppins', sans-serif" }}
    >
      {member.name}
    </Typography>
    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
      {member.role}
    </Typography>
    {member.subordinates && (
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
        {member.subordinates.map((sub) => (
          <HierarchyNode key={sub.id} member={sub} />
        ))}
      </Box>
    )}
  </Box>
);

HierarchyNode.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    subordinates: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const TeamHierarchy = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #212121 0%, #37474F 100%)",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.4)",
        transition: "0.3s",
        "&:hover": { boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)" },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            color: "#4FC3F7",
            textTransform: "uppercase",
          }}
        >
          Team Hierarchy
        </Typography>
        <Box sx={{ background: "#263238", borderRadius: "12px", padding: "16px", marginTop: 2 }}>
          <HierarchyNode member={profileView[0]} />
        </Box>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            mt: 3,
            background: "linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%)",
            color: "#ECEFF1",
            fontWeight: "bold",
            "&:hover": { background: "#0288D1" },
          }}
        >
          View Full Hierarchy
        </Button>

        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Full Team Hierarchy
          </DialogTitle>
          <DialogContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <HierarchyNode member={fullHierarchy[0]} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setOpen(false)}
              sx={{
                background: "#4FC3F7",
                color: "#263238",
                fontWeight: "bold",
                "&:hover": { background: "#0288D1" },
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TeamHierarchy;
