import React from "react";
import PropTypes from "prop-types";

const Header = ({ toggleShowTodoForm, showTodoForm, clearTodo }) => {
  return (
    <section className="header">
      <button className="btn" onClick={toggleShowTodoForm}>
        {showTodoForm ? "Done" : "Add"}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="btn main-red-color" onClick={clearTodo}>
        Clear
      </button>
    </section>
  );
};

Header.propTypes = {
  toggleShowTodoForm: PropTypes.func.isRequired,
  showTodoForm: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired
};

export default Header;
