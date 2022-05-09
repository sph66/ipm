import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";

import { Search, SearchIconWrapper, StyledInputBase } from "./toolBoxStyle";

export default function ToolBoxView({
  total,
  numberProd,
  handleProductSearchOnChange,
  handleDownloadInventory,
  handleDownload,
}) {
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
            value={total}
          />
          <TextField
            disabled
            fullWidth
            id="produse"
            label="Numar produse"
            placeholder="Numar produse"
            variant="standard"
            size="small"
            value={numberProd}
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                handleProductSearchOnChange(e.target.value);
              }}
            />
          </Search>
          <Box sx={{ "& > :not(style)": { m: 1 } }} padding="6px">
            <Button
              variant="contained"
              color="success"
              endIcon={<DownloadIcon />}
              onClick={handleDownloadInventory}
            >
              Descarca Inventar
            </Button>
          </Box>
          <Box sx={{ "& > :not(style)": { m: 1 } }} padding="6px">
            <Button
              variant="contained"
              color="success"
              endIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              Descarca Centralizator
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
