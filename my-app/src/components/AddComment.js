import './AddComment.css'
import React from "react"

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    render() {
        return (
            <div className="root-addComment">
                <textarea className="body-text" placeholder="자유롭게 토론하세요" onChange={(e) => this.setState({text: e.target.value})}/>
                <div className="btns">
                    <button className="btn-textDone" onClick={() => {this.props.handleAddComment(1, this.state.text); this.props.isBtnFalse()}}>완료</button>
                    <button className="btn-textQuit" onClick={this.props.isBtnFalse}>취소</button>
                </div>
            </div>
        )
    }
}


export default AddComment;