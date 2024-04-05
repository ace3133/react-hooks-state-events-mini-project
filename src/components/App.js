import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory)}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

