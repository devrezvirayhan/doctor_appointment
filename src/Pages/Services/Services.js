import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../images/cavity.png';
import fluroide from '../../images/fluoride.png';
import whitening from '../../images/whitening.png';
import Service from '../Service/Service';




// SERVICES FAKE DATA

const services = [
    {
        name: 'Fluroide Teratement',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque exercitationem provident minima a cum amet odit quaerat quasi, reiciendis explicabo inventore nostrum eligendi incidunt mollitia illum sed impedit rerum cupiditate?',
        img: fluroide
    },
    {
        name: 'Cavity Filling',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque exercitationem provident minima a cum amet odit quaerat quasi, reiciendis explicabo inventore nostrum eligendi incidunt mollitia illum sed impedit rerum cupiditate?',
        img: cavity
    },
    {
        name: 'Fluroide Teratement',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque exercitationem provident minima a cum amet odit quaerat quasi, reiciendis explicabo inventore nostrum eligendi incidunt mollitia illum sed impedit rerum cupiditate?',
        img: whitening
    }
]



const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                <Typography sx={{ fontWeight: 500, m: 4, color: 'success.main'}} gutterBottom variant="h5" component="div">
                        Our Services
                    </Typography>
                <Typography sx={{ fontWeight: 'bold',}} gutterBottom variant="h4" component="div">
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                            key={service.name}
                            service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};



export default Services;