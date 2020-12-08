import React from "react";
import Tweet from "./Tweet";
import "./TweetsList.css";
import { MyContext } from "../context";

const TweetsList = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <ul className="tweets">
            {context.tweets.map((tweet) => (
              <Tweet
                key={tweet.date}
                content={tweet.content}
                date={tweet.dateR}
                userName={tweet.userName}
              />
            ))}
          </ul>
        );
      }}
    </MyContext.Consumer>
  );
};

export default TweetsList;
