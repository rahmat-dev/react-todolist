import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    { title: "Belajar HTML" },
    { title: "Belajar CSS" },
    { title: "Belajar JS" },
    { title: "Belajar React" },
    { title: "Belajar Vue" }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo text={todo.title} />
      ))}
    </section>
  );
};

export default Todos;
