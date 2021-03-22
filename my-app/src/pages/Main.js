import React from "react";
import "./Main.css";
import axios from "axios";
let Issue = '게임 중독은 질병이다.';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded:false
    };
  }
  componentDidMount(){
  }

  yesClick(){
    console.log('1')
  }
  noClick(){
    console.log('2')
  }
  render(){
    return this.state.isLoaded?
    (
      <div>
        <h1 className="Today_Issue">Today Issue</h1>
        <h3 className="title">{Issue}</h3>
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
    :<div>Loading</div>
  }
}


export default Main