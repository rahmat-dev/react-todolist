import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ toggleShowTodoForm, showTodoForm, clearTodo }) => {
  return (
    <section className="header">
      <Button
        text={showTodoForm ? "Done" : "Add"}
        onClick={toggleShowTodoForm}
      />
      {/* <h1 className="header-title">Todo Lists</h1> */}
      {!showTodoForm && (
        <Button text="Clear" onClick={clearTodo} color="main-red-color" />
      )}
    </section>
  );
};

Header.propTypes = {
  toggleShowTodoForm: PropTypes.func.isRequired,
  showTodoForm: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired
};

export default Header;
