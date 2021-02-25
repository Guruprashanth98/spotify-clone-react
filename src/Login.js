import React from 'react';
import './Login.css'
import {loginUrl} from './spotify'

const Login = () => {
    return ( 
        <div className = "Login-page">
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' className="logo-spotify" alt="spotify-logo.png" />
            <a href = {loginUrl} className="login-btn">LOGIN WITH SPOTIFY</a>
        </div>
     );
}
 
export default Login;