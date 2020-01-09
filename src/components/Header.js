import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faCommentsDollar} /> stocker
      </h1>
    </header>
  );
};

export default Header;
