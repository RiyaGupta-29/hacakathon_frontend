// @mui material components
import { useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Sample team member data
const teamMembers = [
  { name: "Alice Johnson", role: "Tax Specialist", status: "online", avatar: "A" },
  { name: "Michael Lee", role: "SME - Taxation", status: "offline", avatar: "M" },
  { name: "Sophia Brown", role: "Query Analyst", status: "online", avatar: "S" },
  { name: "David Wilson", role: "Finance Consultant", status: "offline", avatar: "D" },
];

function TeamMemberStatus() {
  const [filter, setFilter] = useState("all");

  // Filter members based on selection
  const filteredMembers =
    filter === "all" ? teamMembers : teamMembers.filter((member) => member.status === filter);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Team Member Status
        </MDTypography>
      </MDBox>

      {/* Filter Buttons */}
      <MDBox display="flex" justifyContent="center" my={2}>
        <ButtonGroup variant="contained">
          <Button color={filter === "all" ? "primary" : "inherit"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button
            color={filter === "online" ? "success" : "inherit"}
            onClick={() => setFilter("online")}
          >
            Online
          </Button>
          <Button
            color={filter === "offline" ? "error" : "inherit"}
            onClick={() => setFilter("offline")}
          >
            Offline
          </Button>
        </ButtonGroup>
      </MDBox>

      <MDBox p={2}>
        <List>
          {filteredMembers.map((member, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>{member.avatar}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={member.name} secondary={member.role} />
              <Icon sx={{ color: member.status === "online" ? "green" : "red" }}>
                {member.status === "online" ? "check_circle" : "cancel"}
              </Icon>
            </ListItem>
          ))}
        </List>
      </MDBox>
    </Card>
  );
}

export default TeamMemberStatus;
