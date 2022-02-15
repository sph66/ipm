import { Avatar, Grid } from '@mui/material';

import logo from '@/assets/images/logo-mower2.png';
import mama from '@/assets/images/mama1.jpg';

import './headerStyle.css';

export default function HeaderView() {
    return (
        <Grid container spacing={3} className="container-style">
            <Grid item xs={3.5}>
                <img src={logo} className="mower-logo" />
            </Grid>
            <Grid item xs={4.5}>
                <Avatar alt="Mama" src={mama} sx={{ width: 200, height: 180 }} />
            </Grid>
            <Grid item xs={4} sx={{ position: 'relative' }}>
                <button type="submit" text="Adauga invantar" className="button-style">Adauga inventar</button>
            </Grid>
        </Grid>
    );
}