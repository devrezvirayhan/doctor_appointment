import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import bg from '../../images/appointment-bg.png';
import doctor from '../../images/doctor.png';

const appointmentBG = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(196, 196, 196)',
    backgroundBlendMode: 'darken, luminosity',

    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBG} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "400px", marginTop: "-110px" }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                 sx={{ display: 'flex', justifyContent: 'flex-start',textAlign:'left',alignItems: 'center' }}>
                   <Box>
                   <Typography variant="h5" gutterBottom component="div">
                        Appointment
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        Make an Appointment Today
                    </Typography>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore quibusdam consequatur officia, at possimus vel error iste cupiditate voluptates!</p>
                    <Button variant="contained" color="success">
                        <b><i>Learn More</i></b>
                    </Button>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;