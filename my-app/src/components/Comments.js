import React from "react";
import "./Comments.css";
import Comment from './Comment';
import AddComment from './AddComment';
import HotComment from './HotComment';
import moment from 'moment';

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
        <HotComment comments={this.props.comments}/>
            {
                !this.state.isBtn 
                ?
                <>
                <ul className="root-comments">
                    {this.props.comments.map((comment,i)=>{
                        return <Comment key={i} comment={comment.text} isAgree={comment.agree} handleSubmitLike={this.props.handleSubmitLike.bind(null, comment.commentId)}/>

                    })}
                </ul>
                {(this.props.date===moment().format('YYYY-MM-DD'))
                ?<button id="btn-addComment" onClick={() => {this.setState({isBtn: !this.state.isBtn})}}>새 덧글 생성하기</button>
                :null
                }
                </>
                :
                <>
                <ul className="root-comments">
                    {this.props.comments.map((comment,i)=>{
                        console.log(comment.commentId);
                        return <Comment key={i} comment={comment.text} isAgree={comment.agree} handleSubmitLike={this.props.handleSubmitLike.bind(null, comment.commentId)}/>
                    })}
                </ul>
                <AddComment handleAddComment={this.props.handleAddComment} isBtnFalse={() => {this.setState({isBtn: false})}} postId={this.props.postId}/>
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