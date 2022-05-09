import { Grid } from "@mui/material";
import {
  ProductsEdit,
  ProductsDetails,
  ProductsList,
} from "@/products/components";
import { ProductsPageGrid } from "./productsPageStyle";

export default function ProductsPage() {
  return (
    <ProductsPageGrid container spacing={2}>
      <Grid item xs={9}>
        <ProductsList />
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProductsDetails />
          </Grid>
          <Grid item xs={12}>
            <ProductsEdit />
          </Grid>
        </Grid>
      </Grid>
    </ProductsPageGrid>
  );
}
