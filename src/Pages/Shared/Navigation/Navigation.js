import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

import './Navigation.css'
const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ bgcolor: 'text.secondary' }}>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <img width="80px" src="https://i.ibb.co/d2Hk8Rr/logo1.png" alt="" />

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dassland
                        </Typography>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/appointment"><Button color="inherit">Appoinment</Button></Link>


                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/allproducts"><Button color="inherit">All Products</Button></Link>


                        {
                            user?.email ?
                                <Box>


                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>

                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>


                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }


                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
};

export default Navigation;