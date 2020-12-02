import React from "react";
import Tweet from "./Tweet";
import "./TweetsList.css";
function TweetsList(props) {
  return (
    <ul>
      {props.tweets.map((tweet) => (
        <Tweet
          key={tweet.date}
          content={tweet.content}
          date={tweet.date}
          userName={tweet.userName}
        />
      ))}
    </ul>
  );
}

export default TweetsList;
