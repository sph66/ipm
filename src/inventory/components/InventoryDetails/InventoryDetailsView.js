import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Details } from "./inventoryDetailsStyle.js";

export default function InventoryDetails() {
  return (
    <Details>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "18ch", height: "7ch" },
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
        </CardContent>
      </Card>
    </Details>
  );
}
