import './Comment.css'
import React from "react"
import defaultProfile from '../img/default-profile.png';

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            {
                this.props.isAgree ?
                <li className="root-commentBox">
                    <div className="root-commentPic">
                        <img className="profileImg" src={defaultProfile}></img>
                    </div>
                    <div className="root-comment">{this.props.comment}</div>
                    <button className="btn-like" onClick={this.props.handleSubmitLike}><img className="btn-up-img" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"/></button>
                </li>
            :
                <li className="root-commentBox-disagree">
                    <button className="btn-like" onClick={this.props.handleSubmitLike}><img className="btn-up-img" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"/></button>
                    <div className="root-comment-disagree">{this.props.comment}</div>
                    <div className="root-commentPic">
                        <img className="profileImg" src={defaultProfile}></img>
                    </div>
                </li>
            }
            </>
        )
    }
}


export default Comment;