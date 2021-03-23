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
        <h1 className="title">{this.props.title}</h1>
        <div className="icon">
        {!this.props.voted // voted가 0일 때 나옴...
        ?(<>
          <div className="yes" onClick={()=>this.vote(1)}>
            <img src="../check-mark.png"width="200px" height="200px"/>
          </div>
          <div className="empty"></div>
          <div className="no" onClick={()=>this.vote(0)}>
            <img src="../negative.png"width="200px" height="200px"/>
          </div>          
        </>)
        : 
        <>
          <div className="yes-no">
            <div className="yes">{this.props.agree}</div>
            <div className="no">{this.props.disagree}</div>
          </div>
        </>
        }
        </div>
      </div>
    );
  }
}


export default Main