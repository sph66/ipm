import { Avatar, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo.png";
import mama from "@/assets/images/mama1.jpg";

import { Container, Mower } from "./headerStyle.js";

export default function HeaderView({ handleOnClickInventory }) {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Mower>
            <img src={logo} />
          </Mower>
        </Grid>
        <Grid item xs={3}>
          <Avatar alt="Mama" src={mama} sx={{ width: 190, height: 170 }} />
        </Grid>
        <Grid item xs={6} sx={{ position: "relative" }}>
          <Stack direction="row" spacing={4} padding={5}>
            <Button
              size="large"
              onClick={handleOnClickInventory}
              variant="contained"
              color="success"
            >
              Adauga Inventar
            </Button>
            <Button variant="contained" color="success" size="large">
              <Link to="/debt" text="Caiet datorii">
                Adauga datorie
              </Link>
            </Button>
            <Button variant="contained" color="success" size="large">
              <Link to="/products" text="Produse">
                Produse
              </Link>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
