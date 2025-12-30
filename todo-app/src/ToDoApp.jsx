import React, { useState, useEffect } from "react";
import "./styles/Todo.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("saved tasks", JSON.parse(localStorage.getItem("tasks")));
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks;
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); // It clear the input field after adding a task.
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // This update the tasks state after deleting a task.
  };
  const enterButton = (e) => {
    if (e.key === "Enter") {
      addTask();
    } //If "Enter" key is pressed it will add the task.
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={enterButton}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
