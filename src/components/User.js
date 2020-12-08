import React from "react";
import "./User.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  componentDidMount() {
    this.setState({ userName: this.props.username });
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.state.userName;
    this.props.onChangeUser(name);
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
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
      </div>
    );
  }
}

export default User;
