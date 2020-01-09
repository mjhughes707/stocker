import React, { Fragment, useState } from "react";

const Form = ({ getTweets }) => {
  const [symbols, setSymbols] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    getTweets(symbols);
  };

  return (
    <Fragment>
      <h4 className="form-header">
        Please enter the stock symbol(s) for the tweets you wish to display.
      </h4>
      <form className="form-form" onSubmit={e => handleSubmit(e)}>
        <input
          className="form-field"
          type="text"
          name="symbols"
          value={symbols}
          onChange={e => setSymbols(e.target.value)}
          required
        />
        <small>If multiple, please separate by a comma (e.g. A, B, C, D)</small>
        <input type="submit" className="btn" />
      </form>
    </Fragment>
  );
};

export default Form;
