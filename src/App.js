import React from "react";
import "./styles.css";
import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="btn">Add</button>
        <h1 className="header-title">Todo Lists</h1>
        <button className="btn main-red-color">Clear</button>
      </section>

      <section className="form-add-todo">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="btn">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
      </section>
    </Paper>
  );
}
