import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo text={todo.title} />
      ))}
    </section>
  );
};

Todos.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    text: PropTypes.string
  })
);

export default Todos;
