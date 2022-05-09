import { Card, CardContent, Grid, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";

export default function DebtListView({
  clients = [],
  handleClickCheckbox,
  handleClickIcon,
  handleDeleteDebt,
}) {
  const priceFormatCurrency = (params) => {
    return Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
    }).format(parseFloat(params.row.payment));
  };

  const formatCheckbox = (params) => {
    return (
      <Checkbox
        sx={{
          color: blue[600],
          "&.Mui-checked": {
            color: blue[400],
          },
          padding: "15px",
        }}
        checked={params.row.paid}
        disabled={params.row.paid}
        onClick={() => {
          handleClickCheckbox(params.row.id);
        }}
      />
    );
  };

  const formatButton = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="15px">
        <Fab
          color="primary"
          aria-label="edit"
          size="small"
          onClick={() => handleClickIcon(params.row.id)}
        >
          <EditIcon />
        </Fab>
      </Box>
    );
  };

  const formatIcon = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="18px">
        <IconButton aria-label="delete" color="primary">
          <DeleteIcon
            fontSize="medium"
            onClick={(e) => handleDeleteDebt(params.id)}
          />
        </IconButton>
      </Box>
    );
  };

  const columns = [
    { field: "client", headerName: "Client", width: 220, editable: true },
    {
      valueGetter: priceFormatCurrency,
      field: "payment",
      headerName: "Suma",
      width: 150,
      editable: true,
    },
    { field: "date", headerName: "Data", width: 150, editable: true },
    {
      field: "paid",
      renderCell: formatCheckbox,
      headerName: "Achitat",
      width: 80,
    },
    {
      field: "partialPayment",
      renderCell: formatButton,
      headerName: "Plata partiala",
      width: 120,
    },
    {
      field: "id",
      renderCell: formatIcon,
      headerName: "Sterge datorie",
      width: 120,
    },
  ];

  return (
    <Card>
      <CardContent>
        <DataGrid
          autoHeight
          columns={columns}
          rows={clients}
          sx={{ border: 0, padding: "0 10px", backgroundColor: "white" }}
        />
      </CardContent>
    </Card>
  );
}
