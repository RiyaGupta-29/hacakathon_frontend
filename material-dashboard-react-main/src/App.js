import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

// Components & Layouts
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import MDBox from "components/MDBox";

// Themes & Context
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Routes
import routes from "routes";
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Setup RTL Cache
  useMemo(() => {
    setRtlCache(createCache({ key: "rtl", stylisPlugins: [rtlPlugin] }));
  }, []);

  // Update Document Direction
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Scroll to Top on Route Change
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Handle Mouse Events for Sidenav
  const handleOnMouseEnter = () => miniSidenav && setMiniSidenav(dispatch, false);
  const handleOnMouseLeave = () => setMiniSidenav(dispatch, true);

  // Toggle Configurator
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Render Routes
  const renderRoutes = (allRoutes) =>
    allRoutes.map((route) =>
      route.collapse
        ? renderRoutes(route.collapse)
        : route.route && (
            <Route exact path={route.route} element={route.component} key={route.key} />
          )
    );

  return (
    <ThemeProvider
      theme={
        direction === "rtl" ? (darkMode ? themeDarkRTL : themeRTL) : darkMode ? themeDark : theme
      }
    >
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="3.25rem"
            height="3.25rem"
            bgColor="white"
            shadow="sm"
            borderRadius="50%"
            position="fixed"
            right="2rem"
            bottom="2rem"
            zIndex={99}
            color="dark"
            sx={{ cursor: "pointer" }}
            onClick={handleConfiguratorOpen}
          >
            <Icon fontSize="small" color="inherit">
              settings
            </Icon>
          </MDBox>
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {renderRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
