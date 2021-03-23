import React from "react"
import "./Nav.css"
import Login from "../pages/Login"
import Main from '../pages/Main';
import { withRouter } from 'react-router-dom';
import axios from "axios"

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.gotoMain = this.gotoMain.bind(this); 
    this.toMypage = this.toMypage.bind(this);
  }
  gotoMain(){
    return this.props.history.push('/');
  }
  toMypage(){
    return this.props.history.push('/mypage')
  }


  render(){
    return (
      <div className="nav_var">
        <div className="img"><img src="../debate.png" width="40px"height="40px"/></div>
        <div className="Daily_Issue" onClick={this.gotoMain}>Daily Issue</div>
        <div className="profile"onClick={this.toMypage}></div>
        <div className="like">👍0</div>
        <div className="Sign_Out"onClick={this.props.handleLogout}>
          Sign out
          </div>
      </div>
    )
  }
}

export default withRouter(Nav);
