import { AppBar, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Wrapper,
} from "./toolBoxStyle";

export default function ToolBox() {
  return (
    <Wrapper>
      <Card>
        <CardContent>
          <Search>
            {/* <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: "100%", height: "8ch" },
            }}
            autoComplete="off"
          > */}
            <TextField
              disabled
              fullWidth
              id="total"
              label="TOTAL"
              placeholder="Total"
              variant="filled"
              size="small"
            />
            {/* </Box> */}
          </Search>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
