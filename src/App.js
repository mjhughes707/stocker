import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Display from "./components/Display";
import axios from "axios";
import "./styles.css";

function App() {
  const [tweets, setTweets] = useState([]);
  const [title, setTitle] = useState("");

  const getTweets = async symbols => {
    try {
      const res = await axios.get(
        `https://api.stocktwits.com/api/2/streams/symbol/${symbols}.json?limit=3`
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

  return (
    <div>
      <Header />
      <main className="container">
        <Form getTweets={getTweets} />
        <section>
          <h2 className="section-title">{title}</h2>
          <p className="section-intro">
            {tweets.length > 0
              ? `The ${tweets.length} most recent tweets`
              : "No tweets found"}
          </p>
        </section>
        {tweets.map(tweet => (
          <Display key={tweet.id} tweet={tweet} />
        ))}
      </main>
    </div>
  );
}

export default App;
