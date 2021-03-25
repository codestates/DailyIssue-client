import React from "react";
import "./Nav.css";
import Login from "../pages/Login";
import Main from '../pages/Main';
import { withRouter } from 'react-router-dom';
import axios from "axios"
import Alert from "../pages/Alert";

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isNav: false,
      isOpen: false,
      contents: null,
    }
    this.gotoMain = this.gotoMain.bind(this);
    this.toMypage = this.toMypage.bind(this);
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
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

  handleCloseBtn() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  addIssueAnimation = () => {
    if (!this.state.isNav) {
      if (document.querySelector('.btn-addIssue')) {
        const btnAddIssue = document.querySelector('.btn-addIssue');
        if (btnAddIssue) {
          btnAddIssue.classList.replace('btn-addIssue', 'btn-addIssue-clicked');
          this.setState({ isNav: true })
        }
      }
    }
  }
  done = () => {
    if (this.state.text) {
      // text를 보내서 issue를 생성해야함
      axios.post("https://app.dailyissue.net/main/small", {
        title: this.state.text,
        postId: this.props.postId,
        credentials: "include"
      }, {
        headers: {
          authorization: `bearer ${this.props.userinfo}`
        }
      })
        .then(resp => {
          this.props.handleIssue(resp.data);
          // animation
          this.addIssueAnimationeReverse();
          this.setState({
            text: '',
            isOpen: true,
            contents: "Completion of issue creation",
          });
        })
    } else {
      this.setState({
        isOpen: true,
        contents: "Please enter a Issue",
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
        this.setState({ isNav: false })
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
            <div id="title-edit"><input id="title-edit-text" type="text" placeholder="ex) 사과는 빨갛다" onChange={(e) => { this.setState({ text: e.target.value }) }} /><button id="title-edit-done" onClick={this.done}>완료</button><button id="title-edit-cancle" onClick={this.addIssueAnimationeReverse}>취소</button></div>
          }
        </div> : null}
        {this.props.userinfo ? <div className="profile" onClick={this.toMypage}></div> : null}
        {this.props.userinfo ? <div className="like">👍{this.props.likeGet}/{this.props.likeGive}</div> : null}
        <div className="Sign_Out" onClick={this.props.handleLogout}>
          {this.props.userinfo ? 'Sign out' : 'login'}
        </div>
        <Alert isOpen={this.state.isOpen} handleCloseBtn={this.handleCloseBtn} contents={this.state.contents} />
      </div>
    )
  }
}

export default withRouter(Nav);
