import { Box, Grid, Stack, TextField, Paper } from "@mui/material";
import { DataGrid, gridColumnsMetaSelector } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";

import { parsePrice } from "./parsers";

const formatCurrency = (params) => {
  return Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
  }).format(parsePrice(params.row.pret) * parseFloat(params.row.cantitate));
};

const priceFormatCurrency = (params) => {
  return Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
  }).format(parsePrice(params.row.pret));
};

export default function ProductsView({
  handleChangeAmount,
  handleChangeProduct,
  handleChangePrice,
  handleEnter,
  handleDeleteProduct,
  updateProduct,
  products,
  total,
  amount,
  price,
  product,
}) {
  const handleKeyUp = (e) => {
    if (e.which == 13) {
      handleEnter();
    }
  };

  const formatIcon = (params) => {
    console.log(params);
    return (
      <IconButton aria-label="delete">
        <DeleteIcon
          fontSize="small"
          onClick={(e) => handleDeleteProduct(params.id)}
        />
      </IconButton>
    );
  };

  const columns = [
    { field: "produs", headerName: "Produs", width: 350, editable: true },
    { field: "cantitate", headerName: "Cantitate", width: 130, editable: true },
    {
      valueGetter: priceFormatCurrency,
      field: "pret",
      headerName: "Pret",
      width: 150,
      editable: true,
    },
    { valueGetter: formatCurrency, headerName: "Total", width: 180 },
    { field: "id", renderCell: formatIcon, headerName: "", width: 55 },
  ];

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Card>
          <CardContent>
            <DataGrid
              autoHeight
              columns={columns}
              rows={products}
              sx={{ border: 0 }}
              onCellEditCommit={updateProduct}
            />

            <Grid
              container
              spacing={2}
              sx={{
                padding: "0 10px",
              }}
            >
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Produs"
                  variant="standard"
                  size="small"
                  sx={{
                    width: "340px",
                  }}
                  value={product}
                  onKeyUp={handleKeyUp}
                  onChange={(e) => handleChangeProduct(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Cantitate"
                  variant="standard"
                  size="small"
                  type="number"
                  sx={{
                    width: "110px",
                  }}
                  value={amount}
                  onKeyUp={handleKeyUp}
                  onChange={(e) => handleChangeAmount(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Pret"
                  variant="standard"
                  size="small"
                  sx={{
                    width: "130px",
                  }}
                  type="number"
                  value={price}
                  onKeyUp={handleKeyUp}
                  onChange={(e) => handleChangePrice(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Total"
                  variant="standard"
                  size="small"
                  sx={{
                    width: "170px",
                  }}
                  value={total}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
