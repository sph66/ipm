import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function InventoryDetails() {
  return (
    <Card>
      <CardContent>
        <Box
          autoComplete="off"
          sx={{
            "& > :not(style)": { margin: "10px 0" },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Titlu"
            variant="standard"
            size="small"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="An"
            variant="standard"
            size="small"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Observatii"
            variant="standard"
            size="small"
            multiline
            fullWidth
          />
        </Box>
      </CardContent>
    </Card>
  );
}
