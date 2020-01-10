import React, { useState } from "react";
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

  return (
    <div>
      <Header />
      <main className="container">
        <Form getTweets={getTweets} />
        <section>
          {tweets.map((obj, index) => (
            <div key={index}>
              <h2 className="section-title">{obj.title}</h2>
              <p className="section-intro">
                {tweets.length > 0
                  ? `The ${obj.tweets.length} most recent tweets`
                  : "No tweets found"}
              </p>
              {obj.tweets.map(tweet => (
                <Display key={tweet.id} tweet={tweet} />
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
