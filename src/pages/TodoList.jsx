import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { title: "Belajar HTML" },
    { title: "Belajar CSS" },
    { title: "Belajar JS" },
    { title: "Belajar React" },
    { title: "Belajar Vue" }
  ]);

  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
