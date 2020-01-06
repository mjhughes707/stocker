import React, { Fragment } from "react";

const Request = () => {
  return (
    <Fragment>
      <h4 className="request-header">
        Please enter the stock symbol(s) for the tweets you wish to display.
      </h4>
      <form className="request-form" action="">
        <input className="request-field" type="text" />
        <small>
          If multiple, please separate by a comma (e.g. AAPL, MSFT, TSLA)
        </small>
      </form>
    </Fragment>
  );
};

export default Request;
