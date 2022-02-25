import { Avatar, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo-mower2.png";
import mama from "@/assets/images/mama1.jpg";

import { Button, Container, Mower } from "./headerStyle.js";

export default function HeaderView() {
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
          <Button>
            <Link to="/inventory" text="Adauga invantar">
              Adauga inventar
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
