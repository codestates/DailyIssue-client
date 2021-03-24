import axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-modal';
import './Alert.css';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            password: "",
            newpassword: "",
            confirmpassword: "",
            email: "",
            nickname: "",
            errorMessage: "",
            changePwCheck: false,
            clickMoPassword: false,
        }
        this.handleModify = this.handleModify.bind(this);
    }



    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleModify = () => {
        const { password, newpassword, confirmpassword } = this.state;
        const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        this.setState({
            errorMessage: "",
        })

        if (newpassword !== confirmpassword) {
            this.setState({
                errorMessage: "Passwords don't match"
            });
            return;
        } else {
            this.setState({
                errorMessage: ""
            });
        }
        console.log("userinfo : ", this.props.userinfo);
        axios
            .post("http://15.165.161.223:4000/mypage/changePwRequest",
                {
                    "password": password,
                    "fixPassword": newpassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.props.userinfo}`,
                        credentials: 'include'
                    }
                })
            .then(data => {
                console.log(data)
                if (data.data.err) {
                    this.setState({
                        errorMessage: "Your recent password is incorrect",
                    })
                } else {
                    this.setState({
                        changePwCheck: !this.state.changePwCheck,
                    })
                    // this.props.handleLogout();
                }
            })
            .catch(err => {
                this.setState({
                    errorMessage: "Your recent password is incorrect",
                })
            })
    };

    errorMessageReset = () => {
        this.setState({
            errorMessage: "",
        })
    }

    render() {
        return (
            <Modal className="MyModal" isOpen={this.props.isOpen} ariaHideApp={false}>
                <div className="content">
                    <button id="closeBtn" onClick={() => this.props.handleCloseBtn()}>Close</button>
                    <div>Login is required</div>
                </div>
            </Modal>

        );
    }
}

export default Alert;
