import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, setCompleteTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => (
        <Todo
          text={todo.title}
          isCompleted={todo.isCompleted}
          key={index}
          setCompleteTodo={setCompleteTodo}
          index={index}
        />
      ))}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  setCompleteTodo: PropTypes.func.isRequired
};

export default Todos;
