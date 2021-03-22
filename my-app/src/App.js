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
  handleResponseSuccess() {
    axios
      .get("http://localhost:4000/")
    this.setState({ isLogin: true })
    this.props.history.push("/")
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
                  <Nav />
                  <div className="Components">
                    <SideNav />
                    <Contents />
                  </div>
                </div>)
            }
            else {
              return (
                <Login />
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
