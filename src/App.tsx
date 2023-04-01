import React, {useState} from 'react';
import LoginPage from "./Components/LoginPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import RegisterPage from "./Components/RegisterPage";
import TrueCheck from "./Components/TrueCheck";
function App() {
    return (

        <div>
            <Router>
                <HeaderComponent/>
                <div className="container" style={{
                    margin: "auto",
                    display : 'flex',
                    padding: "15px",
                    maxWidth: "1500px",
                    alignContent: "center",
                }}>
                    <Switch>
                        <Route path="/" exact component={LoginPage}></Route>
                        <Route path="/register" exact component={RegisterPage}></Route>
                        <Route path="/page1" exact component={TrueCheck}></Route>
                    </Switch>
                </div>
                {<FooterComponent/>}
            </Router>
        </div>
    )
}

export default App;