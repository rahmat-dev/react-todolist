import React from "react";
import PropTypes from "prop-types";

const Header = ({ toggleShowTodoForm }) => {
  return (
    <section className="header">
      <button className="btn" onClick={toggleShowTodoForm}>
        Add
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  toggleShowTodoForm: PropTypes.func.isRequired
};

export default Header;
