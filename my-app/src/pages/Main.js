import React from "react";
import "./Main.css";
import axios from "axios";
import Alert from './Alert';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.vote = this.vote.bind(this);
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
  }
  
  vote(vote) {
    if (this.props.userinfo) {
      axios.post("http://15.165.161.223:4000/main/vote", {
        vote: vote,
        postId: this.props.postId,
        credentials: "include"
      }, {
        headers: {
          authorization: `bear ${this.props.userinfo}`
        }
      })
        .then(resp => {
          this.props.handleIssue(resp.data);
        })
    } else {
      console.log('로그인이 필요합니다')
      this.setState({
        isOpen: true,
      });
      console.log("state 변환완료");
    }
  }

  handleCloseBtn() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const agreeBarStyle = {
      width: `${Math.round((this.props.agree / (this.props.agree + this.props.disagree)) * 100)}%`,
    }
    const disagreeBarStyle = {
      width: `${Math.round((this.props.disagree / (this.props.agree + this.props.disagree)) * 100)}%`,
    }
    console.log("Main.isLogin : ", this.state.isLogin);
    return (
      <>
        <h1 className="title">{this.props.title}</h1>
        <div className="icon">
          {!(this.props.voted || (this.props.date !== moment().format('YYYY-MM-DD')))
            || this.props.agree === 0 && this.props.disagree === 0  // voted가 0일 때 나옴...
            ? (<>
              <div className="yes" onClick={() => this.vote(1)}>
                <img src="../check-mark.png" width="200px" height="200px" />
              </div>
              <div className="empty"></div>
              <div className="no" onClick={() => this.vote(0)}>
                <img src="../negative.png" width="200px" height="200px" />
              </div>
              <Alert isOpen={this.state.isOpen} handleCloseBtn={this.handleCloseBtn} />
            </>)
            :
            <>
              <div className="yes-no">
                <div className="yes" style={agreeBarStyle}>{`${Math.round((this.props.agree / (this.props.agree + this.props.disagree)) * 100)}%`}</div>
                <div className="no" style={disagreeBarStyle}>{`${Math.round((this.props.disagree / (this.props.agree + this.props.disagree)) * 100)}%`}</div>
              </div>
            </>
          }
        </div>


      </>
    );
  }
}


export default Main