import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function InventoryDetailsView({
  handleChangeTitle,
  handleChangeObs,
  handleChangeYear,
  title,
  year,
  obs,
}) {
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
            value={title}
            onChange={(e) => handleChangeTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="An"
            variant="standard"
            size="small"
            fullWidth
            value={year}
            onChange={(e) => handleChangeYear(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Observatii"
            variant="standard"
            size="small"
            multiline
            fullWidth
            value={obs}
            onChange={(e) => handleChangeObs(e.target.value)}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
