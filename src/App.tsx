import React, { useState } from 'react';
import LoginPage from "./Components/LoginPage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (username: string, password: string) => {
        // Kullanıcının kimlik bilgilerini kontrol et
        if (username === 'kullaniciadi' && password === 'sifre123') {
            setIsLoggedIn(true);
            setUsername(username);
            setPassword(password);
        } else {
            alert('Hatalı kullanıcı adı veya şifre!');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    if (isLoggedIn) {
        return (
            <div>
                <h2>Hoş geldiniz, {username}!</h2>
                <button onClick={handleLogout}>Çıkış yap</button>
            </div>
        );
    } else {
        return (
            <div>
                <LoginPage onLogin={handleLogin} />
            </div>
        );
    }
}

export default App;