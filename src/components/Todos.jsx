import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, setCompleteTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <Todo
            text={todo.title}
            isCompleted={todo.isCompleted}
            key={index}
            setCompleteTodo={setCompleteTodo}
            index={index}
          />
        ))}

      {todos.length === 0 && (
        <div className="nothing-todo-placeholder">
          <p>
            Add todo by clicking <b>Add</b> button on the top left corner
          </p>
        </div>
      )}
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
