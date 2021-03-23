import './Comment.css'
import React from "react"

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <li className="root-commentBox">
                <div className="root-commentPic"></div>
                <div className="root-comment">{this.props.comment}</div>
            </li>
            </>
        )
    }
}


export default Comment;