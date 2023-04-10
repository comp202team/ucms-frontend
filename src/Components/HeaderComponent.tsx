import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/securityslice';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


const useStyles : any = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#333',
    },
    title: {
      flexGrow: 1,
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      margin: '0 10px',
      '&.active': {
        fontWeight: 'bold',
        borderBottom: '2px solid #fff',
      },
    },
  }));


const HeaderComponent = () => {

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state : any) => state.security.isAuthenticated);

    const classes = useStyles();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <header>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        UMS
                    </Typography>
                    {
                    isAuthenticated ? <>
                        <Button color="inherit" onClick={() => onLogout()}>
                                Logout
                        </Button>
                    </>
                    :
                    <>
                        <Button component={Link} to="/" color="inherit">
                            Login
                        </Button>
                        <Button component={Link} to="/register" color="inherit">
                            Register
                        </Button>
                    </>     
                    }
                    </Toolbar>
                </AppBar>
            </div>
            </header>
        </div>
    );
};

export default HeaderComponent;