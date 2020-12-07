import React from "react";
import AddTweetForm from "./components/AddTweetForm";
import TweetsList from "./components/TweetsList";
import { createTweet, getTweets } from "./lib/api";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./components/User";
import localforage from "localforage";
import { MyContext } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
      error: "",
      userName: "yonathan",
      tweet: "",
      IsDisabled: false,
      setDisabled: (bool) => this.setState({ IsDisabled: bool }),
      handleOnTweetChange: (tweet) => this.setState({ tweet: tweet }),
      setTweet: (newTweet) => {
        newTweet.userName = this.state.userName;
        this.setState({ isLoading: true, error: "" });
        createTweet(newTweet)
          .then(() => this.loadTweets())
          .catch((err) => this.setState({ isLoading: false, error: err }));
      },
    };
  }

  componentDidMount() {
    this.loadTweets1();
    localforage.getItem("name").then((value) => {
      if (value) {
        this.setState({ userName: value });
      }
    });
    setInterval(() => {
      this.loadTweets();
    }, 5000);
  }

  async loadTweets1() {
    const response = await getTweets();
    this.setState({
      tweets: response.data.tweets,
      isLoading: false,
    });
  }

  async loadTweets() {
    const response = await getTweets();
    let index = 0;
    for (var i = 0; i < response.data.tweets.length; i++) {
      if (response.data.tweets[i].id === this.state.tweets[0].id) {
        index = i;
        break;
      }
    }
    const newTweets = response.data.tweets.slice(0, index);
    this.setState((prevState) => ({
      tweets: [...newTweets, ...prevState.tweets],
      isLoading: false,
    }));
  }

  handleOnUserChange(newUser) {
    localforage.setItem("name", newUser);
    this.setState({ userName: newUser });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
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
                  {this.state.isLoading && (
                    <p className="loading">Loading...</p>
                  )}
                  {!this.state.isLoading && (
                    <div>
                      <AddTweetForm />
                      {this.state.error && <div>{this.state.error}</div>}
                      <TweetsList />
                    </div>
                  )}
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
