import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import ImageIcon from "@mui/icons-material/Image";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DnsIcon from "@mui/icons-material/Dns";

import { ROUTES } from "../../shared/enums/route.enum";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    text: "Authentication",
    route: ROUTES.AUTHENTICATION,
  },
  {
    id: 1,
    icon: <DnsIcon />,
    text: "Database",
    route: ROUTES.DATABASE,
  },
  {
    id: 2,
    icon: <ImageIcon />,
    text: "Storage",
    route: ROUTES.STORAGE,
  },
  {
    id: 3,
    icon: <PublicIcon />,
    text: "Hosting",
    route: ROUTES.HOSTING,
  },
  {
    id: 4,
    icon: <SettingsEthernetIcon />,
    text: "Functions",
    route: ROUTES.FUNCTIONS,
  },
  {
    id: 5,
    icon: <SettingsInputComponentIcon />,
    text: "Machine learning",
    route: ROUTES.MACHINE_LEARNING,
  },
];
