import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export default function ProductsDetailsView({
  handleChangeDetails,
  handleChangePrice,
  handleChangeProduct,
  handleSaveProduct,
  product,
  details,
  price,
}) {
  return (
    <Card>
      <CardContent>
        <Box
          autoComplete="off"
          sx={{
            "& > :not(style)": { margin: "10px 0", padding: "10px 0" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Denumire produs"
              variant="standard"
              value={product}
              onChange={(e) => handleChangeProduct(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Pret"
              value={price}
              variant="standard"
              onChange={(e) => handleChangePrice(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Detalii"
              value={details}
              variant="standard"
              onChange={(e) => handleChangeDetails(e.target.value)}
            />
          </Box>

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
            <LoadingButton
              color="secondary"
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={(e) => handleSaveProduct()}
            >
              Salveaza
            </LoadingButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
