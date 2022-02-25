import { Box, Grid, Stack, TextField, Paper } from "@mui/material";
import { DataGrid, gridColumnsMetaSelector } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { BottomContainer } from "./productsStyle";

const formatCurrency = (params) => {
  return Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
  }).format(params.row.total);
};
const priceFormatCurrency = (params) => {
  return Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
  }).format(params.row.pret);
};

const columns = [
  { field: "produs", headerName: "Produs", width: 350 },
  { field: "data", headerName: "Cantitate", width: 130 },
  {
    valueGetter: priceFormatCurrency,
    field: "pret",
    headerName: "Pret",
    width: 150,
  },
  { valueGetter: formatCurrency, headerName: "Total", width: 180 },
];
const rows = [
  {
    id: 1,
    produs: "surub",
    data: 7,
    pret: 32,
    total: 3456345,
  },
  {
    id: 2,
    produs: "cositoare",
    data: 20,
    pret: 21,
    total: 5789234,
  },
  {
    id: 3,
    produs: "adapatoare",
    data: 7,
    pret: 4,
    total: 7345234,
  },
];

export default function ProductsView() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Card>
          <CardContent>
            <DataGrid
              autoHeight
              columns={columns}
              rows={rows}
              sx={{ border: 0 }}
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
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Cantitate"
                  variant="standard"
                  size="small"
                  sx={{
                    width: "110px",
                  }}
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
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Total"
                  variant="standard"
                  size="small"
                  sx={{
                    width: "170px",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
