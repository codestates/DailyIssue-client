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


class App extends React.Component {
  state = {
    isLogin: true,
    userinfo: null,
  }
  handleResponseSuccess(token) {
    this.setState({ isLogin: false, userinfo:token })
    this.props.history.push("/")
    console.log("asdf");
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
                    <SideNav userinfo={this.state.userinfo}/>
                    <Contents userinfo={this.state.userinfo}/>
                  </div>
                </div>)
            }
            else {
              return (
                <Login handleResponseSuccess={this.handleResponseSuccess.bind(this)}/>
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
