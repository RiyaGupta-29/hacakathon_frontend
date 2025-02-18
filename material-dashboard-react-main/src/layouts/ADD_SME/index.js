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

const smeRoles = ["Senior SME", "Lead SME", "Domain Expert"];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("SME Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  role: Yup.string().required("Role is required"),
  department: Yup.string().required("Department is required"),
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

const ADD_SME = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("SME Details:", values);
    resetForm();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <StyledCard>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
              Add SME
            </Typography>

            <Formik
              initialValues={{ name: "", email: "", role: "", department: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, setFieldValue }) => (
                <Form>
                  <Field
                    as={TextField}
                    label="SME Name"
                    name="name"
                    fullWidth
                    margin="normal"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
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

                  {/* Fixed Role Dropdown with Proper Sizing */}
                  <FormControl fullWidth margin="normal" sx={{ minHeight: "56px" }}>
                    <InputLabel>Role</InputLabel>
                    <Select
                      name="role"
                      value={values.role}
                      onChange={(e) => setFieldValue("role", e.target.value)}
                      displayEmpty
                      sx={{ height: "56px", textAlign: "left" }} // Ensuring height consistency
                    >
                      {smeRoles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {touched.role && errors.role && (
                    <Typography color="error" variant="body2">
                      {errors.role}
                    </Typography>
                  )}

                  <Field
                    as={TextField}
                    label="Department"
                    name="department"
                    fullWidth
                    margin="normal"
                    error={touched.department && !!errors.department}
                    helperText={touched.department && errors.department}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3, py: 1.5, fontWeight: "bold" }}
                  >
                    Add SME
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

export default ADD_SME;
