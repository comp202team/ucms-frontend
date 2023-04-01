import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// @ts-ignore
import { useHistory } from "react-router-dom";

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
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterClick = () => {
        history.push("/register");
    };

    const handleLoginClick = () => {
        if (validateCredentials(username, password)) {
            console.log("Giriş başarılı!");
            history.push("/page1");
        } else {
            console.log("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        }
    };

    const validateCredentials = (username: string, password: string) => {
        // Bu örnek için basit bir kontrol sağlayın; gerçek uygulamanızda daha güvenli bir yöntem kullanın
        return username === "admin" && password === "12345";
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