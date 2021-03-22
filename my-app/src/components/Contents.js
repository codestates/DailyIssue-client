import React from "react"
import "./Contents.css"
import Main from "../pages/Main"

function contents(props){


  return (
    <div className="Contents">
        <Main 
          postId={props.postId}
          title={props.title}
          voted={props.voted}
          agree={props.agree}
          disagree={props.disagree}
          comments={props.comments}
          hotIssues={props.hotIssues}
          userinfo={props.userinfo}
          handleIssue={props.handleIssue} 
          userinfo={props.userinfo}/>
    </div>
  )
}
  


export default contents

