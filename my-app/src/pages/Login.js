import React from 'react';
import { } from 'react-redux';
import googleImg from '../img/Google_icon.png';
import githubImg from '../img/github.png';
import '../Login.css'

function LoginPage() {
    return (
        <div id="login-wrap">
            <div id="right-side">
                <div id="login-form">
                    <div id="title-bar">
                        <div id="title">TODAY ISSUE</div>
                        <div id="today-title">Show your opinion</div>
                    </div>
                    <div id="input-box">
                        <input type="text" placeholder="✉️ UserID" />
                        <input id="input-password" type="password" placeholder="🔑 Password" />
                        <button id="login-btn">Login</button>
                    </div>
                    <div id="invalid-ment">Invalid ID</div>
                    <button id="guest-btn">Start as a Guest<br />(view only)</button>
                    <button id="signup-btn">SignUp</button>
                    <div id="login-with">
                        <button id="github-login"><img src={githubImg} alt="github-login-icon" id="github-login-icon" /></button>
                        <button id="google-login"><img src={googleImg} alt="google-login-icon" id="google-login-icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;