import React from "react"
import "./Nav.css"
import Login from "../pages/Login"
import Main from '../pages/Main';
import { withRouter } from 'react-router-dom';
import axios from "axios"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isNav: false,
    }
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
  
  addIssueAnimation = () => {
    if (!this.state.isNav) {
      if (document.querySelector('.btn-addIssue')) {
        const btnAddIssue = document.querySelector('.btn-addIssue');
        if (btnAddIssue) {
          btnAddIssue.classList.replace('btn-addIssue','btn-addIssue-clicked');
          this.setState({isNav: true})
        } 
      }
    } 
  }
  done = () => {
    if (this.state.text) {
      // text를 보내서 issue를 생성해야함
      axios.post("http://15.165.161.223:4000/main/small",{
        title:this.state.text,
        postId:this.props.postId,
        credentials:"include"
      },{      
        headers:{
          authorization:`bearer ${this.props.userinfo}`
        }
      })
      .then(resp=>{
        this.props.handleIssue(resp.data);
        // animation
        this.addIssueAnimationeReverse();
        this.setState({text: ''});
      })
    }
  }
  addIssueAnimationeReverse = () => {
    if (document.querySelector('.btn-addIssue-clicked')) {
      console.log(1);
      const btnAddIssueClick = document.querySelector('.btn-addIssue-clicked');
      if (btnAddIssueClick) {
        console.log(2);
        btnAddIssueClick.classList.replace('btn-addIssue-clicked', 'btn-addIssue');
        this.setState({isNav: false})
      } 
    }
  }

  render() {
    return (
      <div className="nav_var">
        <div className="img"><img src="../debate.png" width="40px" height="40px" /></div>
        <div className="Daily_Issue" onClick={this.gotoMain}>Daily Issue</div>
        {this.props.userinfo ? <div className="btn-addIssue" onClick={this.addIssueAnimation}>
          {!this.state.isNav ?
            <div>새 이슈 작성</div>
            :
            <div id="title-edit"><input id="title-edit-text" type="text" placeholder="ex) 사과는 빨갛다" onChange={(e) => {this.setState({text: e.target.value})}}/><button id="title-edit-done" onClick={this.done}>완료</button><button id="title-edit-cancle" onClick={this.addIssueAnimationeReverse}>취소</button></div>
          }
        </div> : null}
        <div className="profile" onClick={this.toMypage}></div>
        <div className="like">👍{this.props.likeGet}/{this.props.likeGive}</div>
        <div className="Sign_Out" onClick={this.props.handleLogout}>
          {this.props.userinfo ? 'Sign out' : 'login'}
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);
