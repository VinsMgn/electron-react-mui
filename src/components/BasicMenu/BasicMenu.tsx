import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const BacicMenu = ({ anchorEl, open, handleClose, menuItems }) => {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
