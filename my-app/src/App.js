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
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userinfo: null,
      title: null,
      hotissue: [],
    }

    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
  }

  // 로그인이 성공될 때
  async handleResponseSuccess(token) {
  }

  render(){
    const { isLogin, userinfo } = this.state;

    return (
      <>
        <div id="test">
        <Switch>

        <Route path="/main" render={() => {            
            return (
              <div>
                <Nav />
                  <div className="Components">
                  <SideNav hotissue={this.state.hotissue}/>
                  <Contents title={this.state.title}/>
                  </div>
              </div>
            ) 
          }
        }
        />
          <Route path="/login" render={() => {
            if (!isLogin) {
              return <Login handleResponseSuccess={this.handleResponseSuccess}/>
            }
            else {
              // 잘못된 요청이라는 것을 알려줘야 함...
            }
          }}/>
        

        </Switch>
        </div>
      </>
    );
  }
}


export default withRouter(App);
