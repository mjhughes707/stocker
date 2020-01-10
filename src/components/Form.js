import React, { Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";

const Form = ({ getTweets }) => {
  const [symbols, setSymbols] = useState("");
  const [numTweets, setNumTweets] = useState("");
  const textBoxRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    getTweets(symbols, numTweets);
    setSymbols("");
    setNumTweets("");
    textBoxRef.current.focus();
  };

  return (
    <Fragment>
      <form className="form-form" onSubmit={e => handleSubmit(e)}>
        <div>
          <h4 className="form-header">Please enter the desired stock symbol</h4>
          <input
            ref={textBoxRef}
            className="text-form-field"
            type="text"
            name="symbols"
            value={symbols}
            onChange={e => setSymbols(e.target.value)}
            required
          />
          <small>e.g. AAPL, GOOG, MSFT, TSLA</small>
        </div>
        <div>
          <h4 className="form-header">Please enter # of tweets to display</h4>
          <input
            className="num-form-field"
            type="text"
            name="numTweets"
            value={numTweets}
            onChange={e => setNumTweets(e.target.value)}
            required
          />
          <small>The maximum per request is 30 tweets</small>
        </div>
        <input type="submit" className="btn" />
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  getTweets: PropTypes.func.isRequired,
};

export default Form;
