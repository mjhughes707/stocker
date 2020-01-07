import React, { Fragment, useState } from "react";

const Request = () => {
  const [stockData, setStockData] = useState({
    symbols: [],
  });

  const { symbols } = stockData;

  const handleChange = e =>
    setStockData({
      [e.target.name]: e.target.value,
    });

  return (
    <Fragment>
      <h4 className="request-header">
        Please enter the stock symbol(s) for the tweets you wish to display.
      </h4>
      <form className="request-form">
        <input
          className="request-field"
          type="text"
          name="symbols"
          value={symbols}
          onChange={e => handleChange(e)}
          required
        />
        <small>
          If multiple, please separate by a comma (e.g. AAPL, MSFT, TSLA)
        </small>
      </form>
    </Fragment>
  );
};

export default Request;
