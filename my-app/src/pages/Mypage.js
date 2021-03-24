import axios from 'axios';
import React from "react";
import './Mypage.css';
import Modify from './Modify';

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      signUpModalOn: false,
      errorMessage: "",
    }
    this.handleSignUpModalOn = this.handleSignUpModalOn.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  componentDidMount() {
    this.props.handleGetUserData();
  }

  handleInputValue = (e) => {
    console.log(e.target.value);
    this.setState({ nickname: e.target.value });
  };

  handleSave() {
    axios.post("http://15.165.161.223:4000/mypage/changeNickname", {
      nicknameFix: this.state.nickname,
    },
      {
        headers: {
          Authorization: `Bearer ${this.props.userinfo}`,
          credentials: 'include'
        }
      })
      .then(data => {
        console.log("save data : ", data);
        //모달로 메세지 띄우기..?
      })
      .catch(err => {
        console.log(err);
      })
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
                <input type="text" onChange={this.handleInputValue} placeholder={(this.props.userdata) ? this.props.userdata.nickname : "loading"} />
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
                <button id="modifybtn" onClick={this.handleSave} >save</button>
                <button id="changepasswordbtn" onClick={this.handleSignUpModalOn}>Change Password</button>
              </div>
            </ul>
          </div>
          <Modify isOpen={this.state.signUpModalOn} handleSignUpModalOn={this.handleSignUpModalOn} userinfo={this.props.userinfo} handleLogout={this.props.handleLogout} />
        </div>
        <div id="like-wrap">
          <h1>Number of Likes</h1>
          <div>👍 {this.props.likeGet} / {this.props.likeGive} </div>
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