import React from "react"
import "./Main.css"
let Issue = '게임 중독은 질병이다.';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  yesClick(){
    console.log('1')
  }
  noClick(){
    console.log('2')
  }
  render(){
    return (
      <div>
        <h1 className="Today_Issue">Today Issue</h1>
        <h3 className="title">{this.props.title}</h3>
        <div className="icon">
        <div className="yes" onClick={this.yesClick}>
          <img src="../check-mark.png"width="200px" height="200px"/>
          </div>
          <div className="empty"></div>
        <div className="no" onClick={this.noClick}>
          <img src="../negative.png"width="200px" height="200px"/>
        </div>
        </div>
      </div>
    )
  }
}


export default Main