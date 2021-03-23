import React from "react"
import "./Nav.css"
import Login from "../pages/Login"
import Main from '../pages/Main';
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
  gotoMain(){
    console.log('3')
  }
  handleLogout(){
    console.log('logout')
  }
  toMypage(){
    console.log('mypage')
  }


  render(){
    return (
      <div className="nav_var">
        <div className="img"><img src="../debate.png" width="40px"height="40px"/></div>
        <div className="Daily_Issue" onClick={this.gotoMain}>Daily Issue</div>
        <div className="profile"onClick={this.props.toggleWriting}></div>
        <div className="profile"onClick={this.toMypage}></div>
        <div className="like">👍0</div>
        <div className="Sign_Out"onClick={this.handleLogout}>
          Sign out
          </div>
      </div>
    )
  }
}

export default withRouter(Nav);
