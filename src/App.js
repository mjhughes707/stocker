import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Display from "./components/Display";
import axios from "axios";
import "./styles.css";

function App() {
  const [tweets, setTweets] = useState([]);

  const getTweets = async (symbols, numTweets) => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.stocktwits.com/api/2/streams/symbol/${symbols}.json?limit=${numTweets}`
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

  // @todo - attempting to set up an automatic refresh

  // useEffect((symbols, numTweets) => {
  //   const interval = setInterval(tweets => {
  //     if (tweets === undefined) {
  //       console.log("Stopped");
  //       console.log(tweets);
  //       return;
  //     }
  //     getTweets(symbols, numTweets);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });

  return (
    <Fragment>
      <Header />
      <main className="container">
        <Form getTweets={getTweets} />
        {tweets.map((obj, index) => (
          <section key={index}>
            <h2 className="section-title">{obj.title}</h2>
            <p className="section-intro">
              {`Displaying the ${obj.tweets.length} most recent tweets`}
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
