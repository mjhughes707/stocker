import React, { Fragment, useState } from "react";
import axios from "axios";

const Request = () => {
  const [symbols, setSymbols] = useState("");
  const [title, setTitle] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleChange = e => setSymbols(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    getTweets();
  };

  const getTweets = async e => {
    try {
      const res = await axios.get(
        `https://api.stocktwits.com/api/2/streams/symbol/${symbols}.json?limit=10`
      );
      setTitle(res.data.symbol.title);
      setTweets(res.data.messages);
    } catch (err) {
      alert(
        `"${symbols.toUpperCase()}" not found. Please enter a valid stock symbol.`
      );
      console.log(err);
    }
  };

  const tweetsList = tweets.map(tweet => {
    return (
      <div key={tweet.id} className="tweet-container">
        <h4 className="tweet-name">{tweet.user.name}</h4>
        <h5 className="tweet-username">@{tweet.user.username}</h5>
        <p className="tweet-body">{tweet.body}</p>
      </div>
    );
  });

  return (
    <Fragment>
      <h4 className="request-header">
        Please enter the stock symbol(s) for the tweets you wish to display.
      </h4>
      <form className="request-form" onSubmit={e => handleSubmit(e)}>
        <input
          className="request-field"
          type="text"
          name="symbols"
          value={symbols}
          onChange={e => handleChange(e)}
          required
        />
        <small>If multiple, please separate by a comma (e.g. A, B, C, D)</small>
        <input type="submit" className="btn" />
      </form>
      <section>
        <h2 className="section-title">{title}</h2>
        <p className="section-intro">
          {tweets.length > 0
            ? `The ${tweets.length} most recent tweets`
            : "No tweets found"}
        </p>
        {tweetsList}
      </section>
    </Fragment>
  );
};

export default Request;
