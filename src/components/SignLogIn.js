import React from "react";
import "./SignLogIn.css";
import firebase from "../firebase";
import { Redirect } from "react-router";

const auth = firebase.auth();

class SignLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLogIn: "",
      passwordLogIn: "",
      emailSignIn: "",
      userNameSignIn: "",
      passwordSignIn: "",
      redirect: false,
    };
  }
  emailLogInChange(event) {
    this.setState({ emailLogIn: event.target.value });
  }
  passwordLogInChange(event) {
    this.setState({ passwordLogIn: event.target.value });
  }
  emailSignInChange(event) {
    this.setState({ emailSignIn: event.target.value });
  }
  passwordSignInChange(event) {
    this.setState({ passwordSignIn: event.target.value });
  }
  userNameSignInChange(event) {
    this.setState({ userNameSignIn: event.target.value });
  }

  handleLogIn(event) {
    event.preventDefault();
    const email = this.state.emailLogIn;
    const password = this.state.passwordLogIn;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          emailLogIn: "",
          passwordLogIn: "",
          redirect: true,
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
      });
  }

  handleSignIn(event) {
    event.preventDefault();
    const email = this.state.emailSignIn;
    const password = this.state.passwordSignIn;
    const username = this.state.userNameSignIn;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const userObj = {
          email: email,
          username: username,
          photoURL: "",
          uid: user.user.uid,
        };
        firebase.firestore().collection("users").add(userObj);
        this.setState({
          emailSignIn: "",
          passwordSignIn: "",
          redirect: true,
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
      });
  }

  logInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // The firebase.User instance:
        var user = result.user;
        const userObj = {
          email: user.email,
          username: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        };
        firebase.firestore().collection("users").add(userObj);
      })
      .then(() => {
        this.setState({
          redirect: true,
        });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/tweets" />;
    }

    return (
      <div>
        <form className="LogIn" onSubmit={(event) => this.handleLogIn(event)}>
          <h1>Log In</h1>
          <input
            placeholder="Email Address"
            value={this.state.emailLogIn}
            onChange={(event) => this.emailLogInChange(event)}
          ></input>
          <input
            placeholder="PassWord"
            value={this.state.passwordLogIn}
            onChange={(event) => this.passwordLogInChange(event)}
          ></input>
          <button type="submit">Log In</button>
        </form>
        <form className="SignIn" onSubmit={(event) => this.handleSignIn(event)}>
          <h1>Doesn't have an account ? Sign up now !</h1>
          <input
            placeholder="Email Address"
            value={this.state.emailSignIn}
            onChange={(event) => this.emailSignInChange(event)}
          ></input>
          <input
            placeholder="PassWord"
            value={this.state.passwordSignIn}
            onChange={(event) => this.passwordSignInChange(event)}
          ></input>
          <input
            placeholder="UserName"
            value={this.state.userNameSignIn}
            required
            onChange={(event) => this.userNameSignInChange(event)}
          ></input>
          <button type="submit">Sign In</button>
        </form>
        <button
          onClick={() => {
            this.logInWithGoogle();
          }}
        >
          Or sign in with Google
        </button>
      </div>
    );
  }
}
export default SignLogIn;
