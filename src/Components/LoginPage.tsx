import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '5px',
    },
    input: {
        margin: '20px',
    },
    button: {
        margin: '10px',
    },
});

interface ILoginProps {
    onLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<ILoginProps> = ({ onLogin }) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = () => {
        onLogin(username, password);
    };

    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <h2>Login</h2>
                <TextField
                    className={classes.input}
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <TextField
                    className={classes.input}
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button className={classes.button} variant="contained" color="primary" onClick={handleLoginClick}>
                    Login
                </Button>
                <Button className={classes.button} variant="contained" color="secondary">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;