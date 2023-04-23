import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/securityslice';
import { Link, NavLink } from 'react-router-dom';



const HeaderComponent = () => {

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state : any) => state.security.isAuthenticated);


    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <header>
            <div >
                <AppBar position="static" >
                    <Toolbar>
                    <Typography variant="h6" >
                        <Link to={"/"} style={{
                            textDecoration:"none",
                            color:"inherit"
                        }}>
                            UMS
                        </Link>
                    </Typography>
                    {
                    isAuthenticated ? <>
                        <Button color="inherit" onClick={() => onLogout()} sx={{
                            marginLeft:"auto",
                        }}>
                                Logout
                        </Button>
                    </>
                    :
                    <Box sx={{marginLeft:"auto"}}>
                        <Button component={Link} to="/" color="inherit" >
                            Login
                        </Button>
                        <Button component={Link} to="/register" color="inherit">
                            Register
                        </Button>
                    </Box>     
                    }
                    </Toolbar>
                </AppBar>
            </div>
            </header>
        </div>
    );
};

export default HeaderComponent;