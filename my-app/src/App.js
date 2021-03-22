import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Ssissue from "./pages/Ssissue";
import axios from "axios";
import Nav from "./components/Nav"
import './App.css';
import SideNav from './components/SideNav';
import Contents from './components/Contents';
const today=function(){
  let tmp=new Date(), day=tmp.getDate().toString(), month=(tmp.getMonth()+1).toString();
  if(day.length===1) day=`0${day}`;
  if(month.length===1) month=`0${month}`;
  return `${tmp.getFullYear()}-${month}-${day}`;
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: true,
      userinfo: null,
      date:today(),
      postId:0,
      title:null,
      voted:false,
      agree:0,
      disagree:0,
      comments:[],
      hotIssues:[],
    }
    this.handleIssue=this.handleIssue.bind(this);
    this.handleHotIssue=this.handleHotIssue.bind(this);
    this.handleDate=this.handleDate.bind(this);
    this.handleResponseSuccess=this.handleResponseSuccess.bind(this);
  }

  handleDate(date){
    this.setState({date});
  }
  
  handleIssue(data){
    const newState={
      voted:data.voted,
      agree:(data.voted)?data.agree:0,
      disagree:(data.voted)?data.disagree:0,
      comments:(data.voted)?data.comments:[]
    };
    if(data.postId){
      newState.postId=data.postId;
      newState.title=data.title;
    }
    this.setState(newState);
  }

  handleHotIssue(hotIssues){
    this.setState({
      hotIssues
    })
  }

  handleResponseSuccess(token) {
    this.setState({ isLogin: false, userinfo:token })
    axios.get("http://15.165.161.223:4000/main")
    .then(data=>{
      this.handleIssue(data.data);
      this.props.history.push("/")
    })
    .catch(e=>console.log(e));
  }
  render() {
    const { isLogin, userinfo } = this.state;

    return (
      <div>
        <Switch>
          <Route render={() => {
            if (!isLogin) {
              return (
                <div>
                  <Nav userinfo={this.state.userinfo}/>
                  <div className="Components">
                    <SideNav hotIssues={this.state.hotIssues} 
                      date={this.state.date}
                      handleDate={this.handleDate}
                      handleHotIssue={this.handleHotIssue} 
                      handleIssue={this.handleIssue} 
                      userinfo={this.state.userinfo}/>
                    <Contents handleIssue={this.handleIssue} 
                      postId={this.state.postId}
                      title={this.state.title}
                      voted={this.state.voted}
                      agree={this.state.agree}
                      disagree={this.state.disagree}
                      comments={this.state.comments}
                      hotIssues={this.state.hotIssues}
                      userinfo={this.state.userinfo}/>
                  </div>
                </div>)
            }
            else {
              return (
                <Login handleResponseSuccess={this.handleResponseSuccess}/>
              )
            }
          }
          }
          />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
