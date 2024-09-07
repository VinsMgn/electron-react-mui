import Avatar from "@mui/material/Avatar";

import { NotificationBell } from "../../components/NotificationBell/NotificationBell";
import { CommonButton } from "../../components/Button/Button";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

export const Header = ({ title }) => {
  const headerStyles = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#009be5",
      padding: "20px",
    },
    topRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      "*": {
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      paddingLeft: "250px",
    },
    link: {
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    webButton: {
      marginRight: "5px",
      color: "#fff",
      borderColor: "#fff",
    },
    helpIcon: {
      color: "#fff",
    },
  };

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <NotificationBell iconColor="white" />
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1">{title}</Typography>
        <Box>
          <CommonButton sx={headerStyles.webButton} variant="outlined">
            Web setup
          </CommonButton>
          <Tooltip title="Help">
            <IconButton sx={headerStyles.helpIcon}>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
