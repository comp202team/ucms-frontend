import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/securityslice';

const HeaderComponent = () => {

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state : any) => state.security.isAuthenticated);

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a  className="navbar-brand" style={{textAlign:'center'}}>Mustafa - Berke - Tim - Azim</a></div>
                    {isAuthenticated ?
                        <>
                            <Button variant='contained' onClick={() => dispatch(logout())}>Çıkış Yap</Button>
                        </>

                    :
                        <>
                            <a>Giriş Yap</a>
                            <a>Kayıt Ol</a>
                        </>
                    }
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;