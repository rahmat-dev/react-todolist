import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, isCompleted, setCompleteTodo, index }) => {
  const handleSetCompleteTodo = () => {
    setCompleteTodo(index);
  };

  return (
    <div
      className="todo"
      onClick={handleSetCompleteTodo}
      style={{ textDecoration: isCompleted ? "line-through" : "none" }}
    >
      <span className="todo-text">{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  setCompleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Todo;
