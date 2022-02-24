import { Grid } from "@mui/material";

import { Products } from "@/inventory/components";
import { InventoryDetails } from "@/inventory/components";
import { ToolBox } from "@/inventory/components";

export default function InventoryPage() {
  return (
    <Grid container>
      <Grid item xs={9.5}>
        <Products />
      </Grid>
      <Grid item xs={2.5}>
        <InventoryDetails />
        <ToolBox />
      </Grid>
    </Grid>
  );
}
