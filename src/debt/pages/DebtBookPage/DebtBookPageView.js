import { Grid } from "@mui/material";

import { DebtList, DebtDetails, DebtEdit } from "@/debt/components";
import { DebtPageGrid } from "./debtBookPageStyle";

export default function DebtBookPage() {
  return (
    <DebtPageGrid container spacing={2}>
      <Grid item xs={9}>
        <DebtList />
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DebtDetails />
          </Grid>
          <Grid item xs={12}>
            <DebtEdit />
          </Grid>
        </Grid>
      </Grid>
    </DebtPageGrid>
  );
}
