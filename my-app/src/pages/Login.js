import React from 'react';
import googleImg from '../img/Google_icon.png';
import githubImg from '../img/github.png';
import './Login.css'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            hashedpw: ""
        }
        this.handleInputValue = this.handleInputValue.bind(this)
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };
    handleLogin = () => {
    }
      render(){
        return (
            <div id="login-wrap">
                <div id="right-side">
                    <div id="login-form">
                        <div id="title-bar">
                            <div id="title">TODAY ISSUE</div>
                            <div id="today-title">Show your opinion</div>
                        </div>
                        <div id="input-box">
                            <input type="text" placeholder="✉️ UserID" onChange={this.handleInputValue("username")}/>
                            <input id="input-password" type="password" placeholder="🔑 Password" />
                            <button id="login-btn"onClick={this.handleLogin}>Login</button>
                        </div>
                        <div>
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
}

export default Login;