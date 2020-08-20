import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [showTodoForm, setShowTodoForm] = useState(false);

  const addTodo = (value) => {
    setTodos([...todos, { title: value, isCompleted: false }]);
  };

  const setCompleteTodo = (index) => {
    const tempTodos = [...todos];
    tempTodos[index].isCompleted = !tempTodos[index].isCompleted;

    setTodos(tempTodos);
  };

  const toggleShowTodoForm = () => {
    setShowTodoForm(!showTodoForm);
  };

  const clearTodo = () => {
    setTodos([]);
  };

  return (
    <Paper>
      <Header
        toggleShowTodoForm={toggleShowTodoForm}
        showTodoForm={showTodoForm}
        clearTodo={clearTodo}
      />
      <TodoForm addTodo={addTodo} showTodoForm={showTodoForm} />
      <Todos todos={todos} setCompleteTodo={setCompleteTodo} />
    </Paper>
  );
};

export default TodoList;
