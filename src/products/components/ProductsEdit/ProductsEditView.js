import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./productsEditStyle";

export default function ProductsEditView() {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            "& > :not(style)": { margin: "10px 0" },
          }}
          autoComplete="off"
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              // onChange={(e) => {
              //   handleProductSearchOnChange(e.target.value);
              // }
            />
          </Search>
          <Box
            sx={{
              "& > button": {
                m: 1,
              },
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" color="secondary">
              Cauta produs
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
