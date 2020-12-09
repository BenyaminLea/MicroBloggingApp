import React from "react";
import "./Tweet.css";
import firebase from "../firebase";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      date: this.props.date,
      userName: this.props.userName,
    };
  }
  componentDidMount() {
    var docRef = firebase
      .firestore()
      .collection("users")
      .doc(this.props.userName);
    docRef.get().then((doc) => {
      this.setState({ userName: doc.data().username });
    });
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
