import React from "react";
import "./Tweet.css";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.tweet,
      dateReadable: this.props.dateReadable,
      author: this.props.author,
    };
  }

  render() {
    return (
      <li>
        <div className="top">
          <div>{this.state.author}</div>
          <div>{this.state.dateReadable}</div>
        </div>
        <div className="bottom">{this.state.tweet}</div>
      </li>
    );
  }
}

export default Tweet;
