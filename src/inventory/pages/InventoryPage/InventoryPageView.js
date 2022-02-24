import { Grid } from "@mui/material";

import { Products } from "@/inventory/components";
import { InventoryDetails } from "@/inventory/components";
import { ToolBox } from "@/inventory/components";

import { FullWidthGrid, PageGrid } from "./inventoryPageStyle";

export default function InventoryPage() {
  return (
    <PageGrid container spacing={2}>
      <Grid item xs={9.5}>
        <Products />
      </Grid>
      <Grid item xs={2.5}>
        <Grid container spacing={2}>
          <Grid item>
            <InventoryDetails />
          </Grid>
          <FullWidthGrid item>
            <ToolBox />
          </FullWidthGrid>
        </Grid>
      </Grid>
    </PageGrid>
  );
}
