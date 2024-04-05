
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories.length > 0 ? categories[0] : "");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (taskText.trim() !== "") {
      onTaskFormSubmit({ text: taskText, category: taskCategory });
      setTaskText("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required 
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" disabled={taskText.trim() === ""} />
      {/* Disable submit button if task text is empty */}
    </form>
  );
}

export default NewTaskForm;
