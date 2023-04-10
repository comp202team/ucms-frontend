import React, { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/securityslice";

const StyledContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "1rem",
});

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state: any) => state.security.isAuthenticated);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterClick = () => {
        navigate("/register", { replace: false });
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/page1", { replace: true });
        }
    });

    const handleLoginClick = () => {
        dispatch(login({username, password}))
        // if (validateCredentials(username, password)) {
        //     console.log("Giriş başarılı!");
        //     history.push("/page1");
        // } else {
        //     console.log("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        // }
    };


    return (
        <StyledContainer>
            <Typography variant="h4">Giriş Yap</Typography>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Şifre"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLoginClick}>
                Giriş Yap
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleRegisterClick}>
                Kayıt Ol
            </Button>
        </StyledContainer>
    );
};

export default LoginPage;