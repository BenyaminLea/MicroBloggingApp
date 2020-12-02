import React from "react";
import AddTweetForm from "./components/AddTweetForm";
import TweetsList from "./components/TweetsList";
import { createTweet, getTweets } from "./lib/api";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./components/User";
import localforage from "localforage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
      error: "",
      userName: "yonathan",
    };
  }

  componentDidMount() {
    this.loadTweets();
    localforage.getItem("name").then((value) => {
      if (value) {
        this.setState({ userName: value });
      }
    });
  }

  async loadTweets() {
    const response = await getTweets();
    this.setState({
      tweets: response.data.tweets,
      isLoading: false,
    });
  }

  handleOnAddTweet(newTweet) {
    console.log(newTweet);
    newTweet.userName = this.state.userName;
    console.log(newTweet);
    this.setState({ isLoading: true, error: "" });
    createTweet(newTweet)
      .then(() => this.loadTweets())
      .catch((err) => this.setState({ isLoading: false, error: err }));
  }

  handleOnUserChange(newUser) {
    localforage.setItem("name", newUser);
    this.setState({ userName: newUser });
  }

  render() {
    return (
      <Router>
        <div className="main">
          <nav>
            <ul className="navbar">
              <li className="navLi">
                <Link to="/">Home</Link>
              </li>
              <li className="navLi">
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route path="/user">
                <User
                  onChangeUser={(newUser) => this.handleOnUserChange(newUser)}
                />
              </Route>
              <Route path="/">
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
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
