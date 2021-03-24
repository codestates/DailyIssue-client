import axios from 'axios';
import React from "react";
import './Mypage.css';
import Modify from './Modify';

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModalOn: false,
      errorMessage: "",
    }
    this.handleSignUpModalOn = this.handleSignUpModalOn.bind(this);
  }
  // headers:{
  //   Authorization:`bear ${this.state.userinfo}`,
  //   credentials:'include'
  // }

  componentDidMount() {
    this.props.handleGetUserData();
  }


  handleSignUpModalOn = (e) => {
    this.setState({
      signUpModalOn: !this.state.signUpModalOn,
    });

  };


  render() {
    return (
      <>
        <div id="mypage-wrap">
          <h1>My page</h1>
          <div id="mypage-left-side">
            <ul>
              <li id="mypage-nickname">
                <label htmlFor="">Nickname</label>
              </li>
              <li id="mypage-nickname-input">
                <input type="text" placeholder={(this.props.userdata) ? this.props.userdata.nickname : "loading"} />
                {/* {this.props.userdata.nickname} */}
              </li>
              <li id="mypage-email">
                <label htmlFor="">Email</label>
              </li>
              <li id="mypage-email-input">
                <input type="text" value={(this.props.userdata) ? this.props.userdata.email : 'loading'} readOnly />
                {/* {this.props.userdata.email} */}
              </li>
              {this.state.errorMessage ?
                <div id="invalid-ment">
                  {this.state.errorMessage}
                </div> : ''}
              <div id="mypage-modify">
                <button id="modifybtn" >save</button>
                <button id="changepasswordbtn" onClick={this.handleSignUpModalOn}>Change Password</button>
              </div>
            </ul>
          </div>
          <Modify isOpen={this.state.signUpModalOn} handleSignUpModalOn={this.handleSignUpModalOn} userinfo={this.props.userinfo} handleLogout={this.props.handleLogout} />
        </div>
        <div id="like-wrap">
          <h1>Number of Likes</h1>
          <div>👍 {this.props.likeGet}/{this.props.likeGive} </div>
        </div>
        <div id="rank-wrap">
          <h1>Rank</h1>
          <div>🔺11</div>
        </div>

      </>
    )
  }
}

export default Mypage