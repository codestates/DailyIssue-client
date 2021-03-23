import React from "react"
import "./Contents.css"
import Main from "../pages/Main"
import Mypage from '../pages/Mypage'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";



function contents(props){

  return (
    <div className="Contents">
      <Switch>
        <Route 
        exact
        path="/"
          render={()=> {
         return ( 
         <Main userinfo={props.userinfo}/>)
        }}/>
        <Route
            exact
            path='/mypage'
            render={() => <Mypage userinfo={props.userinfo}/>}
          />
      </Switch>
    </div>
  )
}
  


export default withRouter(contents)

