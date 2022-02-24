import { AppBar, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Wrapper,
} from "./toolBoxStyle";

export default function ToolBox() {
  return (
    <Wrapper>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "18.5ch", height: "8ch" },
        }}
        autoComplete="off"
      >
        <TextField
          disabled
          id="total"
          label="TOTAL"
          defaultValue="Total"
          variant="filled"
          size="small"
        />
      </Box>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Wrapper>
  );
}
