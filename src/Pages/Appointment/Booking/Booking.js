import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({ booking,date }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4} >

                <Paper variant="outlined" square sx={{ py: 5 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Space Ababile
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" endIcon={<SendIcon />}>
                        Get Appointment
                    </Button>
                </Paper>
            </Grid>
            <BookingModal
            booking={booking}
            date={date}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>

    );
};

export default Booking;