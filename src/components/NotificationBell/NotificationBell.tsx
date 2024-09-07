import { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { BacicMenu } from "../BasicMenu/BasicMenu";

export const NotificationBell = ({ iconColor }) => {
  const notifcations = [
    { id: 1, name: "Notification 1" },
    { id: 2, name: "Notification 2" },
    { id: 3, name: "Notification 3" },
  ];

  const newNotifications = `You have ${notifcations.length} notifications`;
  const noNotifications = "You have no new notifications";
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title={notifcations.length > 0 ? newNotifications : noNotifications}
      >
        <IconButton
          onClick={notifcations.length ? handleOpen : () => {}}
          color={iconColor}
        >
          <Badge badgeContent={notifcations.length} color="primary">
            <NotificationIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BacicMenu
        menuItems={notifcations}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};
