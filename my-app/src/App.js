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
  render(){
    return (
      <div>
      <Switch>
      <Route>
        <Nav />
        <div className="Components">
        <SideNav />
        <Contents />
        </div>
      </Route>
      </Switch>
      </div>
    );
  }
}


export default withRouter(App);
