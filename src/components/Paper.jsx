import React from "react";
import PropTypes from "prop-types";

const Paper = ({ children }) => {
  return <div className="frame">{children}</div>;
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
