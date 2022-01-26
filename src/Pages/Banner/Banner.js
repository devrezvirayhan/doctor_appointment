import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import bannerbg from '../../images/bg.png';
import chair from '../../images/chair.png';


const bannerBackground = {
  background: `url(${bannerbg})`,
}

const verticalCanter = {
  display: 'flex',
  height: 400,
  alignItems: 'center',
}

const Banner = () => {
  return (
    <Container style={bannerBackground} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCanter, textAlign: 'left' }} item xs={12} md={6}>
         <Box>
         <Typography variant="h4" gutterBottom component="div">
            Your New Smile <br />
            Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:4, fontSize: 14, }} gutterBottom component="div">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab deleniti incidunt vel aut, doloremque ducimus perspiciatis fuga repudiandae maiores, voluptatem iusto doloribus, quasi perferendis!
          </Typography>
          <Button variant="contained" endIcon={<SendIcon />}>
            Get Appointment
          </Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCanter}>
          <img style={{ width: '350px' }} src={chair} alt="" />
        </Grid>

      </Grid>
    </Container>
  );
};

export default Banner;