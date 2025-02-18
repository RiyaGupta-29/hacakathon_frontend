// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Calendar from "layouts/Calendar";
import Trends from "layouts/Trends";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// New Admin Components
import ADD_SME from "layouts/ADD_SME";
import ADD_USER from "layouts/ADD_USER";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    icon: <Icon fontSize="small">calendar_today</Icon>,
    route: "/calendar",
    component: <Calendar />,
  },
  {
    type: "collapse",
    name: "Trends",
    key: "trends",
    icon: <Icon fontSize="small">trending_up</Icon>,
    route: "/trends",
    component: <Trends />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },

  // Admin Panel Section
  {
    type: "title",
    title: "Admin Panel",
    key: "admin-panel",
  },
  {
    type: "collapse",
    name: "Add SME",
    key: "add-sme",
    icon: <Icon fontSize="small">business</Icon>, // Icon for SME
    route: "/admin/add-sme",
    component: <ADD_SME />,
  },
  {
    type: "collapse",
    name: "Add User",
    key: "add-user",
    icon: <Icon fontSize="small">group_add</Icon>, // Icon for adding users
    route: "/admin/add-user",
    component: <ADD_USER />,
  },

  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
