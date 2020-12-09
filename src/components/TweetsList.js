import React from "react";
import Tweet from "./Tweet";
import "./TweetsList.css";
import InfiniteScroll from "react-infinite-scroll-component";

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
      items: this.props.tweets.slice(0, 10),
      hasMore: true,
      index: 10,
    };
  }

  fetchMoreData = () => {
    if (this.state.items.length >= this.state.tweets.length) {
      this.setState({ hasMore: false });
      return;
    }
    setTimeout(() => {
      if (this.state.index + 10 > this.state.tweets.length) {
        this.setState(() => ({
          items: this.state.items.concat(
            this.state.tweets.slice(this.state.index, this.state.tweets.length)
          ),
          index: this.state.index + 10,
        }));
      } else {
        this.setState(() => ({
          items: this.state.items.concat(
            this.state.tweets.slice(this.state.index, this.state.index + 10)
          ),
          index: this.state.index + 10,
        }));
      }
    }, 1000);
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.fetchMoreData}
        hasMore={this.state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ul className="tweets">
          {this.state.items.map((tweet) => (
            <Tweet
              key={tweet.date}
              content={tweet.content}
              date={tweet.dateR}
              userName={tweet.userName}
            />
          ))}
        </ul>
      </InfiniteScroll>
    );
  }
}

export default TweetsList;
