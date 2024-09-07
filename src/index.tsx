import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";
import { App } from "./App";
import { ROUTES } from "./shared/enums/route.enum";
import { Authentication } from "./pages/Authentication/Authentication";
import { Database } from "./pages/Database/Database";
import { Functions } from "./pages/Functions/Functions";
import { Hosting } from "./pages/Hosting/Hosting";
import { MachineLearning } from "./pages/MachineLearning/MachineLearning";
import { Storage } from "./pages/Storage/Storage";
import { dashboardTheme } from "./dashboardTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ROUTES.AUTHENTICATION} element={<Authentication />} />
          <Route path={ROUTES.DATABASE} element={<Database />} />
          <Route path={ROUTES.FUNCTIONS} element={<Functions />} />
          <Route path={ROUTES.HOSTING} element={<Hosting />} />
          <Route path={ROUTES.MACHINE_LEARNING} element={<MachineLearning />} />
          <Route path={ROUTES.STORAGE} element={<Storage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
