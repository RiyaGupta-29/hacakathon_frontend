import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Dummy SME list for selection
const smeList = ["John Doe (Lead SME)", "Alice Johnson (Senior SME)"];

// Validation Schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  assignedSME: Yup.string().required("Assign an SME"),
});

// Styled Card Component for Better UI
const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 500,
  margin: "auto",
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: theme.shadows[4],
  transition: "0.3s",
  background: theme.palette.background.paper,
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

const ADD_USER = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("User Details:", values);
    resetForm();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <StyledCard>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
              Add User
            </Typography>

            <Formik
              initialValues={{ userName: "", email: "", assignedSME: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, setFieldValue }) => (
                <Form>
                  <Field
                    as={TextField}
                    label="User Name"
                    name="userName"
                    fullWidth
                    margin="normal"
                    error={touched.userName && !!errors.userName}
                    helperText={touched.userName && errors.userName}
                  />

                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    fullWidth
                    margin="normal"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />

                  {/* Fixed Assign SME Dropdown */}
                  <FormControl fullWidth margin="normal" sx={{ minHeight: "56px" }}>
                    <InputLabel>Assign SME</InputLabel>
                    <Select
                      name="assignedSME"
                      value={values.assignedSME}
                      onChange={(e) => setFieldValue("assignedSME", e.target.value)}
                      displayEmpty
                      sx={{ height: "56px", textAlign: "left" }} // Ensuring height consistency
                    >
                      {smeList.map((sme) => (
                        <MenuItem key={sme} value={sme}>
                          {sme}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {touched.assignedSME && errors.assignedSME && (
                    <Typography color="error" variant="body2">
                      {errors.assignedSME}
                    </Typography>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3, py: 1.5, fontWeight: "bold" }}
                  >
                    Add User
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </StyledCard>
      </MDBox>
    </DashboardLayout>
  );
};

export default ADD_USER;
