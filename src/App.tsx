import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Outlet, useLocation } from "react-router";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";

export const App = () => {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setTitle(location.pathname.replace(/\W/g, " "));
  }, [location]);
  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
};
