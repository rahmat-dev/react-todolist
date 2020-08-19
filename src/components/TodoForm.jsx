import React from "react";

const TodoForm = () => {
  return (
    <section className="form-add-todo">
      <form className="add-form">
        <input type="text" className="add-input" />
        <button className="btn">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
