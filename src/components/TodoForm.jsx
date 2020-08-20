import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    alert(value);
  };

  return (
    <section className="form-add-todo">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
