import React, { Component } from 'react';
import Modal from 'react-modal';
// import './Modal.css';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            password: "",
            email: "",
            nickname: "",
            errorMessage: "",
        }

    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleSignUp = () => {
        const { userid, password, email, nickname } = this.state;
        const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        this.setState({
            errorMessage: "",
        })

        if (!userid || !password) {
            this.setState({
                errorMessage: "Invalid User ID or PassWord"
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
    };

    render() {
        return (
            <Modal className="MyModal" isOpen={this.props.isOpen} ariaHideApp={false}>
                <div className="content">
                    <button id="closeBtn" onClick={this.props.handleSignUpModalOn}>Close</button>
                    <h1>Will YOU JOIN US?</h1>
                    <input type="text" placeholder="✉️ UserID" onChange={this.handleInputValue("userid")} />
                    <input type="password" placeholder="🔑 Password" onChange={this.handleInputValue("password")} />
                    <input type="email" placeholder="＠ Email" onChange={this.handleInputValue("email")} />
                    <input type="text" placeholder="🅽 Nick Name" onChange={this.handleInputValue("nickname")} />
                    {this.state.errorMessage ?
                        <div id="invalid-ment">
                            {this.state.errorMessage}
                        </div> : ''}
                    <button id="signupBtn" onClick={this.handleSignUp}>SignUp</button>
                </div>
            </Modal>

        );
    }
}

export default SignUp;