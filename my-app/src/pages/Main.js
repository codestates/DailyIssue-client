import React from "react";
import "./Main.css";
import axios from "axios";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.vote=this.vote.bind(this);
  }
  vote(vote){
    axios.post("http://15.165.161.223:4000/main/vote",{
      vote:vote,
      postId:this.props.postId,
      credentials:"include"
    },{      
      headers:{
        authorization:`bear ${this.props.userinfo}`
      }
    })
    .then(resp=>{
      this.props.handleIssue(resp.data);
    })
  }
  render(){
    return (
      <div>
        <h1 className="Today_Issue">Today Issue</h1>
        <h3 className="title">{this.props.title}</h3>
        <div className="icon">
        {!this.props.voted
        ?(<>
          <div className="yes" onClick={()=>this.vote(1)}>
            <img src="../check-mark.png"width="200px" height="200px"/>
          </div>
          <div className="empty"></div>
          <div className="no" onClick={()=>this.vote(0)}>
            <img src="../negative.png"width="200px" height="200px"/>
          </div>          
        </>)
        :(<>
          <div className="yes">{this.props.agree}</div>
          <div className="empty"></div>
          <div className="no">{this.props.disagree}</div>
          {this.props.comments.map((comment,i)=><div key={i}>{comment.content}</div>)}
        </>)}
        </div>
      </div>
    );
  }
}


export default Main