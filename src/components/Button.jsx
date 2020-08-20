import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color }) => {
  const className = ["btn", color ? color : ""].join(" ");

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string
};

export default Button;
