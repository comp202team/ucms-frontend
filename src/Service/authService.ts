export const login = (username: string, password: string) => {
    // Kullanıcının kimlik bilgilerini kontrol et
    if (username === 'kullaniciadi' && password === 'sifre123') {
        return {
            success: true,
            username: username,
            password: password,
        };
    } else {
        return {
            success: false,
            message: 'Hatalı kullanıcı adı veya şifre!',
        };
    }
};