import React from "react";
import "./AddTweetForm.css";

class AddTweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: "",
      IsDisabled: false,
    };
  }

  handleTweetChange(event) {
    this.setState({ tweet: event.target.value });
    if (event.target.value.length > 140) {
      this.setState({ IsDisabled: true });
    } else {
      this.setState({ IsDisabled: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let date = new Date().toISOString();
    const newTweet = {
      tweet: this.state.tweet,
      dateCreated: Date.now(),
      dateReadable: date,
      author: "yonathan",
    };
    this.props.onAddTweet(newTweet);
    this.setState({ tweet: "" });
  }

  render() {
    return (
      <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <textarea
            type="text"
            name="tweet"
            id="tweet"
            required
            placeholder="What you have in mind..."
            value={this.state.tweet}
            onChange={(event) => this.handleTweetChange(event)}
          />
        </div>
        <div className="SubmitPart">
          {this.state.IsDisabled && (
            <div className="MessageError">
              The tweet can't contain more than 140 chars.
            </div>
          )}
          <button type="submit" disabled={this.state.IsDisabled}>
            Tweet
          </button>
        </div>
      </form>
    );
  }
}
export default AddTweetForm;
