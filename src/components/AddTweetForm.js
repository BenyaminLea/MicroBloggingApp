import React from "react";
import "./AddTweetForm.css";
import { MyContext } from "../context";

const AddTweetForm = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <form
            className="formTweet"
            onSubmit={(event) => {
              event.preventDefault();
              let dateR = new Date().toISOString();
              const newTweet = {
                content: context.tweet,
                date: dateR,
              };
              context.setTweet(newTweet);
              context.handleOnTweetChange("");
            }}
          >
            <div>
              <textarea
                type="text"
                name="tweet"
                id="tweet"
                className="textareaTweet"
                required
                placeholder="What you have in mind..."
                value={context.tweet}
                onChange={(event) => {
                  context.handleOnTweetChange(event.target.value);
                  if (event.target.value.length > 140) {
                    context.setDisabled(true);
                  } else {
                    context.setDisabled(false);
                  }
                }}
              />
            </div>
            <div className="SubmitPart">
              {context.IsDisabled && (
                <div className="MessageError">
                  The tweet can't contain more than 140 chars.
                </div>
              )}
              <button
                className="buttonTweet"
                type="submit"
                disabled={context.IsDisabled}
              >
                Tweet
              </button>
            </div>
          </form>
        );
      }}
    </MyContext.Consumer>
  );
};

export default AddTweetForm;
