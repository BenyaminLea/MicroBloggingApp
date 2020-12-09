import React from "react";
import AddTweetForm from "./components/AddTweetForm";
import TweetsList from "./components/TweetsList";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import User from "./components/User";
import { MyContext } from "./context";
import firebase from "./firebase";
import SignLogIn from "./components/SignLogIn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: false,
      error: "",
      userName: "",
      tweet: "",
      IsDisabled: false,
      setDisabled: (bool) => this.setState({ IsDisabled: bool }),
      handleOnTweetChange: (tweet) => this.setState({ tweet: tweet }),
      setTweet: (newTweet) => {
        newTweet.userName = firebase.auth().currentUser.uid;
        this.setState({ isLoading: true, error: "" });
        firebase.firestore().collection("tweets").add(newTweet);
      },
    };
  }

  componentDidMount() {
    this.loadTweets();
  }

  async loadTweets() {
    firebase
      .firestore()
      .collection("tweets")
      .onSnapshot((querySnapshot) => {
        var listTweets = [];
        querySnapshot.forEach((doc) => {
          listTweets.push(doc.data());
        });
        listTweets.sort((a, b) => {
          return b.date - a.date;
        });
        this.setState({ tweets: listTweets, isLoading: false });
      });
  }

  isLoggedIn() {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  onChangeUser(name) {
    var user = firebase.auth().currentUser;
    var userDocRef = firebase.firestore().collection("users").doc(user.uid);
    return firebase.firestore().runTransaction(function (transaction) {
      return transaction.get(userDocRef).then(function () {
        transaction.update(userDocRef, { username: name });
      });
    });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <Router>
          {!this.isLoggedIn() && <Redirect to="/" />}
          <Switch>
            <Route path="/tweets">
              <nav>
                <ul className="navbar">
                  <li className="navLi">
                    <Link to="/tweets">Tweets</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/user">User</Link>
                  </li>
                  <li className="navLi">
                    <Link
                      to="/"
                      onClick={() => {
                        firebase
                          .auth()
                          .signOut()
                          .then(() => console.log("out"));
                      }}
                    >
                      LogOut
                    </Link>
                  </li>
                </ul>
              </nav>
              {this.state.isLoading && <p className="loading">Loading...</p>}
              {!this.state.isLoading && (
                <div>
                  <AddTweetForm />
                  {this.state.error && <div>{this.state.error}</div>}
                  <TweetsList tweets={this.state.tweets} />
                </div>
              )}
            </Route>
            <Route path="/user">
              <nav>
                <ul className="navbar">
                  <li className="navLi">
                    <Link to="/tweets">Tweets</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/user">User</Link>
                  </li>
                  <li className="navLi">
                    <Link
                      to="/"
                      onClick={() => {
                        firebase
                          .auth()
                          .signOut()
                          .then(() => console.log("out"));
                      }}
                    >
                      LogOut
                    </Link>
                  </li>
                </ul>
              </nav>
              <User
                onChangeUser={(name) => this.onChangeUser(name)}
                username={this.state.userName}
              />
            </Route>
            <Route path="/">
              <SignLogIn />
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
