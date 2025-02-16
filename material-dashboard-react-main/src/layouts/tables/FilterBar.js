import React, { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { FormControl, InputLabel, TextField } from "@mui/material";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const FilterBar = ({ onFilter }) => {
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [dateOrder, setDateOrder] = useState("");
  const [customDate, setCustomDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    const newFilters = { priority, status, dateOrder, customDate, [type]: value };

    if (type === "priority") setPriority(value);
    if (type === "status") setStatus(value);

    if (type === "dateOrder") {
      setDateOrder(value);
      setShowDatePicker(value === "custom");
    }

    if (type === "customDate") {
      setCustomDate(value);
      newFilters.dateOrder = value ? "custom" : "";
    }

    onFilter(newFilters);
  };

  // Reset all filters
  const handleReset = () => {
    setPriority("");
    setStatus("");
    setDateOrder("");
    setCustomDate(null);
    setShowDatePicker(false);
    onFilter({ priority: "", status: "", dateOrder: "", customDate: null });
  };

  return (
    <MDBox display="flex" justifyContent="start" alignItems="center" mb={3} gap={2} flexWrap="wrap">
      {/* Priority Filter */}
      <FormControl variant="outlined" sx={{ minWidth: 160 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => handleFilterChange("priority", e.target.value)}
          label="Priority"
        >
          <MenuItem value="">All Priorities</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>

      {/* Status Filter */}
      <FormControl variant="outlined" sx={{ minWidth: 180 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          label="Status"
        >
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      {/* Date Sorting */}
      <FormControl variant="outlined" sx={{ minWidth: 180 }}>
        <InputLabel>Sort by Date</InputLabel>
        <Select
          value={dateOrder}
          onChange={(e) => handleFilterChange("dateOrder", e.target.value)}
          label="Sort by Date"
        >
          <MenuItem value="">Sort by Date</MenuItem>
          <MenuItem value="newest">Newest to Oldest</MenuItem>
          <MenuItem value="oldest">Oldest to Newest</MenuItem>
          <MenuItem value="custom">Custom Date</MenuItem>
        </Select>
      </FormControl>

      {/* Show Date Picker Only If "Custom Date" is Selected */}
      {showDatePicker && (
        <Flatpickr
          value={customDate}
          options={{ dateFormat: "d-m-Y" }} // Ensuring the correct format
          onChange={(date) =>
            handleFilterChange(
              "customDate",
              date.length ? date[0].toLocaleDateString("en-GB").replace(/\//g, "-") : null
            )
          }
          placeholder="Select Date"
          render={({ value, defaultValue, ...props }, ref) => (
            <TextField
              {...props}
              inputRef={ref}
              variant="outlined"
              sx={{ minWidth: 170 }}
              value={value || ""}
              placeholder="Custom Date"
            />
          )}
        />
      )}

      {/* Reset Filters Button */}
      <MDButton variant="contained" color="error" onClick={handleReset} sx={{ height: "40px" }}>
        Reset
      </MDButton>
    </MDBox>
  );
};

FilterBar.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterBar;
