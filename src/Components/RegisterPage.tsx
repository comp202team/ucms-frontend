import React, { useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../Store/securityslice";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "1rem",
});

const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const isAuthenticated = useSelector((state: any) => state.security.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/page1", { replace: true });
        }
    });

    const handleRegisterClick = () => {
        dispatch(register({
            username: username,
            password: password,
            email : email,
            firstName : firstName,
            lastName : lastName
        }));
        navigate("/");
    };

    const handleBackToLogin = () => {
        navigate("/");
    };

    return (
        <StyledContainer>
            <Typography variant="h4">Kayıt Ol</Typography>
            <TextField
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleRegisterClick}>
                Register
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleBackToLogin}>
                Go to login
            </Button>
        </StyledContainer>
    );
};

export default RegisterPage;