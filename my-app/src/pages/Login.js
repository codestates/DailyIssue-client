import React, { useState } from 'react';
import axios from 'axios';
// import Modal from 'react-modal';
import SignUp from './SignUp';
import googleImg from '../img/Google_icon.png';
import githubImg from '../img/github.png';
// import './Modal.css';
import './Login.css';

axios.defaults.withCredentials = true;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            password: "",
            errorMessage: "",
            signUpModalOn: false,
        };
        // const [showModal, setShowModal] = useState(false);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleSignUpModalOn = this.handleSignUpModalOn.bind(this);
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleSignUpModalOn = (e) => {
        this.setState({
            signUpModalOn: !this.state.signUpModalOn,
        });
        console.log('1')
    };

    handleLogin = () => {
        const { handleResponseSuccess } = this.props;
        const { userId, password } = this.state;

        if (!userId || !password) {
            this.setState({
                errorMessage: "Invalid ID or PassWord"
            });
            return;
        }
        else {
            this.setState({
                errorMessage: ""
            });
        }
        // 15.165.161.223
        // axios.get(“http://15.165.161.223:4000/main/like”);
        return axios
            .post("http://15.165.161.223:4000/login", {
                username: userId,
                password: password,
                credentials: 'include',
            })
            .then(data => {
                console.log(data);



            })
            .catch((err) => {
                //modal로 구현(alert 사용x)
                alert("Login failed");
                console.log(err);
            });
    };


    render() {
        return (
            <div id="login-wrap">
                <div id="right-side">
                    <div id="login-form">
                        <div id="title-bar">
                            <div id="title">TODAY ISSUE</div>
                            <div id="today-title">Show your opinion</div>
                        </div>
                        <div id="input-box">
                            <input type="text" placeholder="✉️ UserID" onChange={this.handleInputValue("userId")} />
                            <input id="input-password" type="password" placeholder="🔑 Password" onChange={this.handleInputValue("password")} />
                            <button id="login-btn" onClick={this.handleLogin}>Login</button>
                        </div>
                        {this.state.errorMessage ?
                            <div id="invalid-ment">
                                {this.state.errorMessage}
                            </div> : ''}
                        {/* <div id="invalid-ment">Invalid ID</div> */}
                        <button id="guest-btn">Start as a Guest<br />(view only)</button>
                        <button id="signup-btn" onClick={this.handleSignUpModalOn}>SignUp</button>
                        <div id="login-with">
                            <button id="github-login"><img src={githubImg} alt="github-login-icon" id="github-login-icon" /></button>
                            <button id="google-login"><img src={googleImg} alt="google-login-icon" id="google-login-icon" /></button>
                        </div>
                    </div>
                </div>
                {/* <SingUp isOpen={this.state.signUpModalOn} /> */}
                <SignUp isOpen={this.state.signUpModalOn} handleSignUpModalOn={this.handleSignUpModalOn} />
            </div >

        )

    }
}

export default LoginPage;


// function LoginPage() {
//     const [showModal, setShowModal] = useState(false);

//     const openModal = () => {
//         setShowModal(prev => !prev);
//     };

//     const handleInputValue = (key) => (e) => {
//         this.setState({ [key]: e.target.value });
//     };

//     const handleSignUpModalOn = (e) => {
//         this.setState({
//             signUpModalOn: true,
//         });
//     };

//     const handleLogin = () => {
//         const { handleResponseSuccess } = this.props;
//         const { userId, password } = this.state;

//         if (!userId || !password) {
//             this.setState({
//                 errorMessage: "Invalid ID or PassWord"
//             });
//             return;
//         }
//         else {
//             this.setState({
//                 errorMessage: ""
//             });
//         }
//         // 15.165.161.223
//         // axios.get(“http://15.165.161.223:4000/main/like”);
//         return axios
//             .post("https://localhost:4000/signin", {
//                 userId: userId,
//                 password: password,
//             })
//             .then(handleResponseSuccess)
//             .catch((err) => {
//                 alert("Login failed");
//                 console.log(err);
//             });
//     };

//     return (
//         <div id="login-wrap">
//             <div id="right-side">
//                 <div id="login-form">
//                     <div id="title-bar">
//                         <div id="title">TODAY ISSUE</div>
//                         <div id="today-title">Show your opinion</div>
//                     </div>
//                     <div id="input-box">
//                         <input type="text" placeholder="✉️ UserID" onChange={this.handleInputValue("userId")} />
//                         <input id="input-password" type="password" placeholder="🔑 Password" onChange={this.handleInputValue("password")} />
//                         <button id="login-btn" onClick={this.handleLogin}>Login</button>
//                     </div>
//                     {this.state.errorMessage ?
//                         <div id="invalid-ment">
//                             {this.state.errorMessage}
//                         </div> : ''}
//                     {/* <div id="invalid-ment">Invalid ID</div> */}
//                     <button id="guest-btn">Start as a Guest<br />(view only)</button>
//                     <button id="signup-btn" onClick={this.handleSignUpModalOn}>SignUp</button>
//                     <div id="login-with">
//                         <button id="github-login"><img src={githubImg} alt="github-login-icon" id="github-login-icon" /></button>
//                         <button id="google-login"><img src={googleImg} alt="google-login-icon" id="google-login-icon" /></button>
//                     </div>
//                 </div>
//             </div>
//             {/* <SingUp isOpen={this.state.signUpModalOn} /> */}
//             <Modal showModal={showModal} setShowModal={setShowModal} />
//         </div >

//     );
// }

// export default LoginPage;
