import React, { useState, useEffect } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// @ts-ignore
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/securityslice";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
    },
});

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();


    const isAuthenticated = useSelector((state:any) => state.security.isAuthenticated);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterClick = () => {
        history.push("/register");
    };

    useEffect(() => {
        if(isAuthenticated){
            history.replace("/page1");
        }
    })

    const handleLoginClick = () => {
        dispatch(login({username, password}))
        // if (validateCredentials(username, password)) {
        //     console.log("Giriş başarılı!");
        //     history.push("/page1");
        // } else {
        //     console.log("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        // }
    };

    const validateCredentials = (username: string, password: string) => {
        return true;
        // Bu örnek için basit bir kontrol sağlayın; gerçek uygulamanızda daha güvenli bir yöntem kullanın
        //return username === "admin" && password === "12345";
    };

    return (
        <Container className={classes.container}>
            <Typography variant="h4">Giriş Yap</Typography>
            <TextField
                label="Kullanıcı Adı"
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
        </Container>
    );
};

export default LoginPage;