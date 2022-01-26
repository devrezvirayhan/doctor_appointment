import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Navagation from '../Navagation/Navagation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navagation></Navagation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;