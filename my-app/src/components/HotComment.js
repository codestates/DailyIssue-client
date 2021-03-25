import './HotComment.css'
import React from "react"
import axios from "axios";


class HotComment extends React.Component {
    constructor(props) {
        super(props);
    }

    sortComment(rank) {
        return this.props.comments.sort((a, b) => {
            if (a.like > b.like) {
                return -1;
            }
            if (a.like < b.like) {
                return 1;
            }
            return 0;
        })[rank - 1] || {agree: true, text: `${rank}위 의견이 없습니다.`}
    }

    render() {
        return (
            <div className="root-hotComment">
                {/* 등수마다 특수한 효과 줄 예정 */}
                {this.sortComment(1).agree ?
                    <div className="th-like-card">{this.sortComment(1).text}</div>
                    :
                    <div className="th-like-card-disagree">{this.sortComment(1).text}</div>
                }
                {this.sortComment(2).agree ?
                    <div className="nd-like-card">{this.sortComment(2).text}</div>
                    :
                    <div className="nd-like-card-disagree">{this.sortComment(2).text}</div>
                }
                {this.sortComment(3).agree ?
                    <div className="rd-like-card">{this.sortComment(3).text}</div>
                    :
                    <div className="rd-like-card-disagree">{this.sortComment(3).text}</div>
                }
            </div>
        )
    }
}


export default HotComment;