import React from "react";
import "./User.css";
import firebase from "../firebase";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    var docRef = firebase.firestore().collection("users").doc(user.uid);
    docRef.get().then((doc) => {
      this.setState({ userName: doc.data().username });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.state.userName;
    this.props.onChangeUser(name);
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
  }

  uploadImage(event) {
    var user = firebase.auth().currentUser;
    let storageRef = firebase.storage().ref(`photos/${user.uid}`);
    let firstFile = event.target.files[0];
    storageRef.put(firstFile);
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>User Name</p>
        <form
          className="formUser"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div>
            <textarea
              className="textareaUser"
              type="text"
              name="userName"
              id="userName"
              required
              value={this.state.userName}
              onChange={(event) => this.handleUserNameChange(event)}
            />
          </div>
          <button className="buttonUser" type="submit">
            Save
          </button>
        </form>
        <div>
          <p>Upload Profile Picture</p>
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            id="cameraInput"
            onChange={(event) => {
              this.uploadImage(event);
            }}
          />
        </div>
      </div>
    );
  }
}

export default User;
