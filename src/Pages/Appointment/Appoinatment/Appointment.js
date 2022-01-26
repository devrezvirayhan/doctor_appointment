import React from 'react';
import Navagation from '../../Navagation/Navagation';
import AbailableAppointment from '../AbailableAppointment/AbailableAppointment';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navagation></Navagation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AbailableAppointment date={date}></AbailableAppointment>

        </div>
    );
};

export default Appointment;