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

const RegisterPage: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nationalNumber, setNationalNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleRegisterClick = () => {
        // Kayıt işlemi gerçekleştirin, işlem tamamlandığında yönlendirme yapın
    };

    const handleBackToLogin = () => {
        history.push("/");
    };

    return (
        <Container className={classes.container}>
            <Typography variant="h4">Kayıt Ol</Typography>
            <TextField
                label="İsim"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                label="Soyad"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                label="Ulusal Numara"
                variant="outlined"
                value={nationalNumber}
                onChange={(e) => setNationalNumber(e.target.value)}
            />
            <TextField
                label="E-posta"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Telefon Numarası"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleRegisterClick}>
                Kaydol
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleBackToLogin}>
                Giriş Sayfasına Dön
            </Button>
        </Container>
    );
};

export default RegisterPage;