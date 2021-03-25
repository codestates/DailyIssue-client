import React from "react"
import "./Nav.css"
import Login from "../pages/Login"
import Main from '../pages/Main';
import { withRouter } from 'react-router-dom';
import axios from "axios"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.gotoMain = this.gotoMain.bind(this);
    this.toMypage = this.toMypage.bind(this);
  }
  gotoMain() {
    return this.props.history.push('/');
  }
  toMypage() {
    if (this.props.userinfo) {
      return this.props.history.push('/mypage')
    } else {
      console.log("로그인이 필요합니다")
    }

  }


  render() {
    return (
      <div className="nav_var">
        <div className="img"><img src="../debate.png" width="40px" height="40px" /></div>
        <div className="Daily_Issue" onClick={this.gotoMain}>Daily Issue</div>
        {this.props.userinfo ? <div className="profile" onClick={this.props.toggleWriting}></div> : null}
        {this.props.userinfo ? <div className="profile" onClick={this.toMypage}></div> : null}
        {this.props.userinfo ? <div className="like">👍{this.props.likeGet}/{this.props.likeGive}</div> : null}
        <div className="Sign_Out" onClick={this.props.handleLogout}>
          {this.props.userinfo ? 'Sign out' : 'login'}
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);
