import React from "react";
import AddTweetForm from "./components/AddTweetForm";
import TweetsList from "./components/TweetsList";
import { createTweet, getTweets } from "./lib/api";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.loadTweets();
  }

  async loadTweets() {
    const response = await getTweets();
    this.setState({
      tweets: response.data.tweets,
      isLoading: false,
    });
  }

  handleOnAddTweet(newTweet) {
    this.setState({ isLoading: true, error: "" });
    createTweet(newTweet)
      .then(() => this.loadTweets())
      .catch((err) => this.setState({ isLoading: false, error: err }));
  }

  render() {
    return (
      <div className="main">
        {this.state.isLoading && <p className="loading">Loading...</p>}
        {!this.state.isLoading && (
          <div>
            <AddTweetForm
              onAddTweet={(newTweet) => this.handleOnAddTweet(newTweet)}
            />
            {this.state.error && <div>{this.state.error}</div>}
            <TweetsList tweets={this.state.tweets} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
