import React from "react"
import "./Contents.css"
import Main from "../pages/Main"
import Mypage from '../pages/Mypage'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Comments from './Comments'
import AddSmallIssue from './AddSmallIssue'


function contents(props) {
  return (
    <div className="Contents">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              !props.isWriting
                ? <>
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
                      <Comments 
                        comments={props.comments} 
                        handleAddComment={props.handleAddComment} 
                        handleSubmitLike={props.handleSubmitLike} 
                        postId={props.postId}/>
                      :
                      null
                    }
                </>
                : <AddSmallIssue
                  postId={props.postId}
                  userinfo={props.userinfo}
                  handleIssue={props.handleIssue}
                  toggleWriting={props.toggleWriting}
                ></AddSmallIssue>
            )
          }} />
        <Route
          exact
          path='/mypage'
          render={() => <Mypage 
                          userinfo={props.userinfo} 
                          userdata={props.userdata} 
                          likeGet={props.likeGet} 
                          likeGive={props.likeGive} 
                          handleGetUserData={props.handleGetUserData}/>}
        />
      </Switch>
    </div>
  )
}



export default withRouter(contents)

