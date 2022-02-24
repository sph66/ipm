import { styled, alpha } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const PageGrid = styled(Grid)(() => ({
  padding: "20px",
  backgroundColor: "pink",
  height: "100%",
}));

export const FullWidthGrid = styled(Grid)(() => ({
  width: "100%",
}));
