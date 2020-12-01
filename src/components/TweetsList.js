import React from "react";
import Tweet from "./Tweet";
import "./TweetsList.css";
function TweetsList(props) {
  return (
    <ul>
      {props.tweets.map((tweet) => (
        <Tweet
          key={tweet.dateCreated}
          tweet={tweet.tweet}
          dateCreated={tweet.dateCreated}
          dateReadable={tweet.dateReadable}
          author={tweet.author}
        />
      ))}
    </ul>
  );
}

export default TweetsList;
