import React from "react"
import "./Contents.css"
import Main from "../pages/Main"
import Mypage from '../pages/Mypage'
import Comments from './Comments'

function contents(props){


  return (
    <div className="Contents">
        <Main 
          postId={props.postId}
          title={props.title}
          voted={props.voted}
          agree={props.agree}
          disagree={props.disagree}
          hotIssues={props.hotIssues}
          userinfo={props.userinfo}
          handleIssue={props.handleIssue}
          />
          {
            props.voted ? 
            <Comments comments={props.comments} handleAddComment={props.handleAddComment} handleSubmitLike={props.handleSubmitLike}/>
            :
            null
          }
    </div>
  )
}
  


export default contents

