import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PointOfSaleTwoToneIcon from "@mui/icons-material/PointOfSaleTwoTone";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import moment from "moment";

export default function DebtDetailsView({
  handleChangeName,
  handleChangePayment,
  handleChangeDate,
  handleSave,
  client,
  payment,
  date,
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
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="standard-basic"
              fullWidth
              label="Nume"
              variant="standard"
              value={client}
              onChange={(e) => handleChangeName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PointOfSaleTwoToneIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="standard-basic"
              fullWidth
              label="Suma"
              value={payment}
              variant="standard"
              onChange={(e) => handleChangePayment(e.target.value)}
            />
          </Box>
          <TextField
            id="date"
            label="Data"
            type="date"
            value={date}
            defaultValue={moment().format("YYYY-MM-DD")}
            sx={{ width: "100%" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              handleChangeDate(e.target.value);
            }}
          />

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
              color="primary"
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={(e) => handleSave()}
            >
              Salveaza
            </LoadingButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
