import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Display from "./components/Display";
import axios from "axios";
import "./styles.css";

function App() {
  const [tweets, setTweets] = useState([]);

  const getTweets = async symbols => {
    try {
      const res = await axios.get(
        `https://api.stocktwits.com/api/2/streams/symbol/${symbols}.json?limit=3`
      );
      addTweets(res.data.symbol.title, res.data.messages);
    } catch (err) {
      alert(
        `"${symbols.toUpperCase()}" not found. Please enter a valid stock symbol.`
      );
      console.log(err);
    }
  };

  const addTweets = (title, messages) => {
    const newTweets = [{ title: title, tweets: messages }, ...tweets];
    setTweets(newTweets);
  };

  const removeTweets = index => {
    const newTweets = [...tweets];
    newTweets.splice(index, 1);
    setTweets(newTweets);
  };

  return (
    <Fragment>
      <Header />
      <main className="container">
        <Form getTweets={getTweets} />
        {tweets.map((obj, index) => (
          <section key={index}>
            <h2 className="section-title">{obj.title}</h2>
            <p className="section-intro">
              {tweets.length > 0
                ? `The ${obj.tweets.length} most recent tweets`
                : "No tweets found"}
            </p>
            <input
              type="submit"
              value="REMOVE"
              className="remove-btn"
              onClick={() => removeTweets(index)}
            />
            {obj.tweets.map(tweet => (
              <Display key={tweet.id} tweet={tweet} />
            ))}
          </section>
        ))}
      </main>
    </Fragment>
  );
}

export default App;
