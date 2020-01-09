import React from "react";
import PropTypes from "prop-types";

const Display = ({ tweet }) => {
  return (
    <div key={tweet.id} className="tweet-container">
      <h4 className="tweet-name">{tweet.user.name}</h4>
      <h5 className="tweet-username">@{tweet.user.username}</h5>
      <p className="tweet-body">{tweet.body}</p>
    </div>
  );
};

Display.propTypes = {
  tweet: PropTypes.object.isRequired,
};

export default Display;
