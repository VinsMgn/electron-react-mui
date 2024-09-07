import Grid from "@mui/material/Grid2";
import React from "react";

import { gridWrapperStyles } from "./style";

export const GridWrapper = ({ children }) => {
  return <Grid sx={gridWrapperStyles}>{children}</Grid>;
};
