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
    }

    render() {
        return (this.props.nickname || this.props.nickname === "" ?
            <Modal className="MyModal" isOpen={this.props.isOpen} ariaHideApp={false}>
                <div className="content">
                    <button id="closeBtn" onClick={() => this.props.handleCloseBtn()}>Close</button>
                    {this.props.nickname ? <div id="alert-comment">Your nickname has been changed <br></br>🅽{this.props.nickname}</div>
                        : <div id="alert-comment">Please enter a nickname to change</div>}

                </div>
            </Modal> :
            <Modal className="MyModal" isOpen={this.props.isOpen} ariaHideApp={false}>
                <div className="content">
                    <button id="closeBtn" onClick={() => this.props.handleCloseBtn()}>Close</button>
                    <div id="alert-comment">Login is required</div>
                </div>
            </Modal>

        );
    }
}

export default Alert;
