import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Search, SearchIconWrapper, StyledInputBase } from "./toolBoxStyle";

export default function ToolBox() {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            "& > :not(style)": { margin: "10px 0" },
          }}
          autoComplete="off"
        >
          <TextField
            disabled
            fullWidth
            id="total"
            label="Valoare totala"
            placeholder="Total"
            variant="standard"
            size="small"
          />
          <TextField
            disabled
            fullWidth
            id="produse"
            label="Numar produse"
            placeholder="Numar produse"
            variant="standard"
            size="small"
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </CardContent>
    </Card>
  );
}
