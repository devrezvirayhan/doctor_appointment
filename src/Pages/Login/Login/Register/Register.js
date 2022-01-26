import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import register from '../../../../images/login.png';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const hanldeOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleloginSubmit = e => {
       if(loginData.password ==! loginData.password2){
           alert("Password Did Not Mach")
           return
       }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 9 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div">
                        Register
                    </Typography>
                    <form onSubmit={handleloginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="filled-basic"
                            label="Your Name"
                            name="name"
                            onChange={hanldeOnChange}
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="filled-basic"
                            type="email"
                            label="Your Email"
                            name="email"
                            onChange={hanldeOnChange}
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="filled-basic"
                            type="password"
                            label="Your Password"
                            name="password"
                            onChange={hanldeOnChange}
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="filled-basic"
                            type="password"
                            label="Confirm Password"
                            name="password2"
                            onChange={hanldeOnChange}
                            variant="filled" />
                        <Button type="submit" sx={{ width: '75%', m: 2 }} variant="contained" color="success">Sign-Up</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;