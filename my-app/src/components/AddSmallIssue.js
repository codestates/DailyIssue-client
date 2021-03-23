import './AddComment.css'
import React from "react"
import axios from 'axios'

class AddSmallIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  render() {
    return (
      <div className="root-addComment">
        <textarea className="body-text" placeholder="새로운 주제" 
          onChange={(e) => this.setState({text: e.target.value})}/>
        <div className="btns">
          <button className="btn-textDone" onClick={() => {
            axios.post("http://15.165.161.223:4000/main/small",{
              title:this.state.text,
              postId:this.props.postId,
              credentials:"include"
            },{      
              headers:{
                authorization:`bear ${this.props.userinfo}`
              }
            })
            .then(resp=>{
              this.props.handleIssue(resp.data);
              this.props.toggleWriting();
            })
          }}>완료</button>
          <button className="btn-textQuit" onClick={
            this.props.toggleWriting
          }>취소</button>
        </div>
      </div>
    )
  }
}


export default AddSmallIssue;