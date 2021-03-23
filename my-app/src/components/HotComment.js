import './HotComment.css'
import React from "react"
import axios from "axios";


class HotComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrCommentsRank: [{text: '불러오는 중...'}, {text: '불러오는 중...'}, {text: '불러오는 중...'}],
        }
    }
    componentDidMount() {
        const arrSort = this.props.comments.sort((a, b) => {
            if (a.like > b.like) {
                return -1;
            }
            if (a.like < b.like) {
                return 1;
            }
            return 0;
        });
        console.log(arrSort[0].text);
        this.setState({arrCommentsRank: arrSort})
    }
    render() {
        return (
            <div className="root-hotComment">
                {/* 등수마다 특수한 효과 줄 예정 */}
                {this.state.arrCommentsRank[0].agree ?
                    <div className="th-like-card">{this.state.arrCommentsRank[0].text}</div>
                    :
                    <div className="th-like-card-disagree">{this.state.arrCommentsRank[0].text}</div>
                }
                {this.state.arrCommentsRank[1].agree ?
                    <div className="nd-like-card">{this.state.arrCommentsRank[1].text}</div>
                    :
                    <div className="nd-like-card-disagree">{this.state.arrCommentsRank[1].text}</div>
                }
                {this.state.arrCommentsRank[2].agree ?
                    <div className="rd-like-card">{this.state.arrCommentsRank[2].text}</div>
                    :
                    <div className="rd-like-card-disagree">{this.state.arrCommentsRank[2].text}</div>
                }
            </div>
        )
    }
}


export default HotComment;