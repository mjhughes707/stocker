import React, { Fragment, useState, useRef } from "react";
import PropTypes from "prop-types";

const Form = ({ getTweets }) => {
  const [symbols, setSymbols] = useState("");
  const textBoxRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    getTweets(symbols);
    setSymbols("");
    textBoxRef.current.focus();
  };

  return (
    <Fragment>
      <h4 className="form-header">
        Please enter the stock symbol(s) for the tweets you wish to display.
      </h4>
      <form className="form-form" onSubmit={e => handleSubmit(e)}>
        <input
          ref={textBoxRef}
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

Form.propTypes = {
  getTweets: PropTypes.func.isRequired,
};

export default Form;
