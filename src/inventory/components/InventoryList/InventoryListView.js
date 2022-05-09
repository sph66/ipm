import { Link } from "react-router-dom";
import { Divider, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

import { Container } from "./inventoryListStyle.js";

export default function InventoryListView({
  inventories,
  handleDeleteInventory,
  handleDownloadInventory,
  handleDownload,
}) {
  const formatCurrency = (params) => {
    return Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
    }).format(params.row.total);
  };
  const formatButton = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="15px">
        <Link to={`/inventory/${params.row.id}`}>
          <Fab color="success" aria-label="edit" size="small">
            <EditIcon />
          </Fab>
        </Link>
      </Box>
    );
  };

  const formatIcon = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="55px">
        <IconButton aria-label="delete" color="success">
          <DeleteIcon
            fontSize="medium"
            onClick={(e) => handleDeleteInventory(params.id)}
          />
        </IconButton>
      </Box>
    );
  };

  const formatDownloadInventoryIcon = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="60px">
        <IconButton aria-label="download" color="success">
          <DownloadIcon
            fontSize="medium"
            onClick={() => handleDownloadInventory(params.row.id)}
          />
        </IconButton>
      </Box>
    );
  };

  const formatDownloadIcon = (params) => {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }} padding="80px">
        <IconButton aria-label="download" color="success">
          <DownloadIcon
            fontSize="medium"
            onClick={() => handleDownload(params.row.id)}
          />
        </IconButton>
      </Box>
    );
  };

  const columns = [
    { field: "title", headerName: "TITLU INVENTAR", width: 220 },
    { field: "year", headerName: "AN", width: 120 },
    { valueGetter: formatCurrency, headerName: "TOTAL", width: 160 },
    {
      field: "partialPayment",
      renderCell: formatButton,
      headerName: "",
      width: 120,
    },
    {
      field: "id",
      renderCell: formatIcon,
      headerName: "STERGE INVENTAR",
      width: 180,
    },
    {
      field: "downloadInventory",
      renderCell: formatDownloadInventoryIcon,
      headerName: "DESCARCA INVENTAR",
      width: 200,
    },
    {
      field: "download",
      renderCell: formatDownloadIcon,
      headerName: "DESCARCA CENTRALIZATOR",
      width: 220,
    },
  ];

  return (
    <Container>
      <DataGrid autoHeight columns={columns} rows={inventories} sx={{ m: 2 }} />
    </Container>
  );
}
