import React from "react"
import "./Contents.css"
import Main from "../pages/Main"
import Mypage from '../pages/Mypage'
import Comments from './Comments'
import AddSmallIssue from './AddSmallIssue'

function contents(props){


  return (
    <div className="Contents">
      {!props.isWriting
      ?<>
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
        </>
      :<AddSmallIssue
        postId={props.postId}
        userinfo={props.userinfo}
        handleIssue={props.handleIssue} 
        toggleWriting={props.toggleWriting} 
        ></AddSmallIssue>
      }
    </div>
  )
}
  


export default contents

