import React from "react"
import "./Contents.css"
import Main from "../pages/Main"
import Mypage from '../pages/Mypage'

function contents(props){


  return (
    <div className="Contents">
        <Main userinfo={props.userinfo}/>
    </div>
  )
}
  


export default contents

