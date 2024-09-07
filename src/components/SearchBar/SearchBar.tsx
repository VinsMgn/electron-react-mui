import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

export const SearchBar = ({ placeHolder, onChange, searchBarWidth }) => {
  return (
    <div>
      <SearchIcon />
      <Input
        placeholder={placeHolder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.1rem",
        }}
        disableUnderline
      />
    </div>
  );
};
