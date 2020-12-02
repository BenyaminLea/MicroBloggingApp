import React from "react";
import "./Tweet.css";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      date: this.props.date,
      userName: this.props.userName,
    };
  }

  render() {
    return (
      <li className="tweet">
        <div className="top">
          <div>{this.state.userName}</div>
          <div>{this.state.date}</div>
        </div>
        <div className="bottom">{this.state.content}</div>
      </li>
    );
  }
}

export default Tweet;
