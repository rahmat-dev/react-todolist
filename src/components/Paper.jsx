import React from "react";
import PropTypes from "prop-types";

const Paper = ({ children }) => {
  return <div className="frame">{children}</div>;
};

Paper.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
