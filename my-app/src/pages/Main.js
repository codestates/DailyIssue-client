import React from "react";
import "./Main.css";
import axios from "axios";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      postId:0,
      issue:null,
      voted:false,
      agree:0,
      disagree:0,
      comments:[]
    };
    this.vote=this.vote.bind(this);
  }
  componentDidMount(){
    axios.get("http://15.165.161.223:4000/main")
    .then(data=>{
      console.log(data.data);
      this.setState({
        isLoaded:true,
        postId:data.data.postId,
        issue:data.data.title,
        voted:data.data.voted,
        agree:(data.data.voted)?data.data.agree:0,
        disagree:(data.data.voted)?data.data.disagree:0,
        comments:(data.data.voted)?data.data.comments:[]
      })
    })
    .catch(e=>console.log(e));
  }

  vote(vote){
    axios.post("http://15.165.161.223:4000/main/vote",{
      vote:vote,
      postId:this.state.postId,
      credentials:"include"
    },{      
      headers:{
        authorization:`bear ${this.props.userinfo}`
      }
    })
    .then(resp=>{
      this.setState({
        voted:resp.data.voted,
        agree:resp.data.agree,
        disagree:resp.data.disgaree,
        comments:resp.data.comments
      })
    })
  }
  render(){
    return this.state.isLoaded?
    (
      <div>
        <h1 className="Today_Issue">Today Issue</h1>
        <h3 className="title">{this.state.issue}</h3>
        <div className="icon">
        {this.state.voted===0
        ?(<>
          <div className="yes" onClick={this.vote(1)}>
            <img src="../check-mark.png"width="200px" height="200px"/>
          </div>
          <div className="empty"></div>
          <div className="no" onClick={this.vote(0)}>
            <img src="../negative.png"width="200px" height="200px"/>
          </div>          
        </>)
        :(<>
          <div className="yes">{this.state.agree}</div>
          <div className="empty"></div>
          <div className="no">{this.state.disagree}</div>
          {this.state.comments.map((comment,i)=><div key={i}>{comment.comtent}</div>)}
        </>)}
        </div>
      </div>
    )
    :<div>Loading</div>
  }
}


export default Main