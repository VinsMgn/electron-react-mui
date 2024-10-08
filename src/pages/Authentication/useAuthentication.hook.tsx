import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Box, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";

import { cardHeaderStyles } from "./style";
import { CommonButton } from "../../components/Button/Button";
import { useState } from "react";
import { useCounterStore } from "../../shared/stores/counter.store";

export const useAuthentication = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState(users);
  const { count, increment, decrement } = useCounterStore();

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    };
    const filterData = (value) => {
      const loweredCaseValue = value.toLowerCase().trim();
      if (loweredCaseValue === "") {
        setUsers(searchResult);
      } else {
        const filteredData = searchResult.filter((user) => {
          return Object.keys(user).some((key) =>
            user[key].toString().toLowerCase().includes(loweredCaseValue)
          );
        });
        setUsers(filteredData);
      }
    };
    const addUser = () => {
      setOpen(true);
    };
    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeHolder="Search by email address, phone number, or user UID"
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <Typography>Number of user : {count} </Typography>
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

  const onClose = () => {
    setOpen(false);
  };

  const addNewUser = (data) => {
    users.push({ ...data });
    increment();
    onClose();
  };

  const deleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.userId !== userId));
    decrement();
  };

  const getContent = () => {
    return (
      <>
        {users.length > 0 ? (
          <Box>
            {users.map((user) => {
              return (
                <Box
                  key={user.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography>{user.email}</Typography>
                  <Typography>{user.phone}</Typography>
                  <Typography>{user.userId}</Typography>
                  <IconButton onClick={() => deleteUser(user.userId)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              );
            })}
          </Box>
        ) : (
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
        )}
      </>
    );
  };

  return { getHeader, getContent, open, onClose, addNewUser };
};
