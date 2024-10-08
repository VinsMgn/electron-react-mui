import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { cardStyles } from "./style";

export const BasicCard = ({ header, content }) => {
  return (
    <Card sx={{ cardStyles }}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};
