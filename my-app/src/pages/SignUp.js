import axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-modal';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            password: "",
            confirmPassword: "",
            email: "",
            nickname: "",
            errorMessage: "",
            signUpCheck: false,
        }

    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleSignUp = () => {
        const { userid, password, confirmPassword, email, nickname } = this.state;
        const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        this.setState({
            errorMessage: "",
            // signUpCheck: false,
        })

        if (!userid) {
            this.setState({
                errorMessage: "Invalid User ID"
            });
            return;
        } else if (password !== confirmPassword) {
            this.setState({
                errorMessage: "Passwords don't match"
            });
            return;
        } else if (!regex.test(email)) {
            this.setState({
                errorMessage: "Invalid Email format"
            });
            return;
        } else if (!nickname) {
            this.setState({
                errorMessage: "Invalid Nick Name"
            });
            return;
        } else {
            this.setState({
                errorMessage: ""
            });
        }



        axios
            .post("http://15.165.161.223:4000/signup", {
                "username": userid,
                "nickname": nickname,
                "password": password,
                "email": email,
            })
            .then(data => {
                console.log(data)
                if (data.data.err) {
                    this.setState({
                        errorMessage: data.data.err,
                    })
                } else {
                    this.setState({
                        signUpCheck: !this.state.signUpCheck,
                    })
                }
            })
    };

    errorMessageReset = () => {
        this.setState({
            errorMessage: "",
        })
    }

    checkSignUp = () => {

    }

    render() {
        return (
            <Modal className="MyModal" isOpen={this.props.isOpen} ariaHideApp={false}>
                <div className="content">
                    <button id="closeBtn" onClick={() => { this.props.handleSignUpModalOn(); this.errorMessageReset(); this.setState({ signUpCheck: false, }) }}>Close</button>
                    {!this.state.signUpCheck ?
                        <>
                            <h1>Will YOU JOIN US?</h1>
                            <input type="text" tabIndex="1" placeholder="✉️ UserID" onChange={this.handleInputValue("userid")} />
                            <input type="password" tabIndex="2" placeholder="🔑 Password" onChange={this.handleInputValue("password")} />
                            <input type="password" tabIndex="3" placeholder="Confirm Password" onChange={this.handleInputValue("confirmPassword")} />
                            <input type="email" tabIndex="4" placeholder="＠ Email" onChange={this.handleInputValue("email")} />
                            <input type="text" tabIndex="5" placeholder="🅽 Nick Name" onChange={this.handleInputValue("nickname")} />
                            {this.state.errorMessage ?
                                <div id="invalid-ment">
                                    {this.state.errorMessage}
                                </div> : ''}
                            <button id="signupBtn" onClick={this.handleSignUp}>SignUp</button>
                        </>
                        : <h1 id="complete">COMPLETE</h1>}
                </div>
            </Modal>

        );
    }
}

export default SignUp;
