import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings =[
    {
        id:1,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:2,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:3,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:4,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:5,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:6,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:7,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:8,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
    {
        id:9,
        name: 'TeethDonics',
        time: '08.00 AM - 10.00 AM',
        space:'10'
    },
] 




const AbailableAppointment = ({ date }) => {
    return (
        <Container>
            <h1>This Is Abailable Appointments {date.toDateString()}</h1>
          <Grid container spacing={2}>
          {
               bookings.map(booking =><Booking
               key={booking.id}
               booking={booking}
               date={date}
               ></Booking>)
           }
          </Grid>
        </Container>
    );
};

export default AbailableAppointment;