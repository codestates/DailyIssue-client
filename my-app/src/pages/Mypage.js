import axios from 'axios';
import React from "react";
import './Mypage.css';
import Modify from './Modify';

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModalOn: false,
    }
    this.handleSignUpModalOn = this.handleSignUpModalOn.bind(this);
  }
  // componentDidMount() {
  //   axios.get("http://15.165.161.223:4000/mypage",)
  //     .then(data => console.log(data));
  // }

  // headers:{
  //   Authorization:`bear ${this.state.userinfo}`,
  //   credentials:'include'
  // }


  handleSignUpModalOn = (e) => {
    this.setState({
      signUpModalOn: !this.state.signUpModalOn,
    });
    console.log('1')
  };


  render() {
    console.log(this.props)
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
                <input type="text" placeholder="userNickname" />
              </li>
              <li id="mypage-email">
                <label htmlFor="">Email</label>
              </li>
              <li id="mypage-email-input">
                <input type="text" placeholder="user@code.com" />
              </li>
              <div id="mypage-modify">
                <button id="modifybtn" onClick={this.handleSignUpModalOn}>save</button>
                <button id="changepasswordbtn">Change Password</button>
              </div>
            </ul>
            {/* <div id="mypage-bottom"> */}
            {/* <button id="changepasswordbtn">Change Password</button> */}
            {/* </div> */}
          </div>
          <Modify isOpen={this.state.signUpModalOn} handleSignUpModalOn={this.handleSignUpModalOn} />
        </div>
        {/* <div id="info-wrap"> */}
        <div id="like-wrap">
          <h1>Number of Likes</h1>
          <div>👍 123 </div>
          {/* <div id="numberoflike">123</div> */}
        </div>

        <div id="rank-wrap">
          <h1>Rank</h1>
          <div>🔺11</div>
          {/* <div id="numberoflike">123</div> */}
        </div>
        {/* </div> */}
      </>
    )
  }
}

export default Mypage