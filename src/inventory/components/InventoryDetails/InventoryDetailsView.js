import { Box, TextField } from "@mui/material";

import { Details } from "./inventoryDetailsStyle.js";

export default function InventoryDetails() {
  return (
    <Details>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "19ch", height: "6ch" },
        }}
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-basic"
            label="TITLU"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="AN"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="OBSERVATII"
            variant="outlined"
            size="small"
            multiline
            rows={3}
          />
        </div>
      </Box>
    </Details>
  );
}
