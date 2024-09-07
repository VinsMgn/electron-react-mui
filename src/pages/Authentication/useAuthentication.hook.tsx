import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Box, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import { cardHeaderStyles } from "./style";
import { CommonButton } from "../../components/Button/Button";

export const useAuthentication = () => {
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };
    const addUser = () => {
      console.log("click");
    };
    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeHolder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => {
    console.log("content");
    return (
      <Typography
        align="center"
        sx={{
          margin: "40px 16px",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.3rem",
        }}
      >
        No users for this project yet
      </Typography>
    );
  };

  return { getHeader, getContent };
};
