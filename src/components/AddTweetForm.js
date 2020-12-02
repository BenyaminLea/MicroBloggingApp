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
    let dateR = new Date().toISOString();
    const newTweet = {
      content: this.state.tweet,
      date: dateR,
    };
    this.props.onAddTweet(newTweet);
    this.setState({ tweet: "" });
  }

  render() {
    return (
      <form
        className="formTweet"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div>
          <textarea
            type="text"
            name="tweet"
            id="tweet"
            className="textareaTweet"
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
          <button
            className="buttonTweet"
            type="submit"
            disabled={this.state.IsDisabled}
          >
            Tweet
          </button>
        </div>
      </form>
    );
  }
}
export default AddTweetForm;
