import React from "react";
import AddTweetForm from "./components/AddTweetForm";
import TweetsList from "./components/TweetsList";
import localforage from "localforage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    let list = [];
    let revList = [];
    localforage
      .iterate(function (value, key, iterationNumber) {
        list.push(value);
      })
      .then(() => {
        for (var i = list.length - 1; i > -1; i--) {
          revList.push(list[i]);
        }
        this.setState({ tweets: revList });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleOnAddTweet(newTweet) {
    localforage
      .setItem(`${newTweet.dateCreated}`, newTweet)
      .then(console.log(" tweet saved"));
    this.setState((state) => {
      return { tweets: [newTweet, ...state.tweets] };
    });
  }

  render() {
    return (
      <div className="main">
        <AddTweetForm
          onAddTweet={(newTweet) => this.handleOnAddTweet(newTweet)}
        />
        <TweetsList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
