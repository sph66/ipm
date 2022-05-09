import { Card, CardContent, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductsListView({ products, handleDeleteProduct }) {
  const priceFormatCurrency = (params) => {
    return Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
    }).format(parseFloat(params.row.price));
  };

  const formatIconDelete = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="18px">
        <IconButton aria-label="delete" color="secondary">
          <DeleteIcon
            fontSize="medium"
            onClick={(e) => handleDeleteProduct(params.id)}
          />
        </IconButton>
      </Box>
    );
  };

  const columns = [
    { field: "product", headerName: "Produs", width: 220, editable: true },
    {
      valueGetter: priceFormatCurrency,
      field: "price",
      headerName: "Pret",
      width: 150,
      editable: true,
    },
    {
      field: "details",
      headerName: "Detalii Produs",
      width: 220,
      editable: true,
    },
    {
      field: "id",
      renderCell: formatIconDelete,
      headerName: "Sterge produs",
      width: 120,
    },
  ];

  return (
    <Card>
      <CardContent>
        <DataGrid
          autoHeight
          columns={columns}
          rows={products}
          sx={{ border: 0, padding: "0 10px", backgroundColor: "white" }}
        />
      </CardContent>
    </Card>
  );
}
