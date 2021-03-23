import React from "react";
import "./Comments.css";
import Comment from './Comment';
import AddComment from './AddComment';
import HotComment from './HotComment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBtn: false
        }
    }
    render(){
    return (
        <>
        {/* <HotComment/> */}
            {
                !this.state.isBtn 
                ?
                <>
                <ul className="root-comments">
                    {this.props.comments.map((comment,i)=>{
                        console.log(comment);
                        return <Comment key={i} comment={comment.text}/>
                    })}
                </ul>
                <button id="btn-addComment" onClick={() => {this.setState({isBtn: !this.state.isBtn})}}>새 덧글 생성하기</button>
                </>
                :
                <>
                <ul className="root-comments">
                    {this.props.comments.map((comment,i)=>{
                        console.log(comment);
                        return <Comment key={i} comment={comment.text}/>
                    })}
                </ul>
                <AddComment handleAddComment={this.props.handleAddComment} isBtnFalse={() => {this.setState({isBtn: false})}}/>
                </>
            }
            {/* <AddComment/> */}
        </>
    )
    }
    // comment null bug
    // add status agree/disagree in comment
}

export default Comments;