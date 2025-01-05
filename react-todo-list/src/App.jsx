import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (tasks.trim() !== "") {
      setTaskList([...taskList, tasks]);
      setTasks("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple To-Do List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        style={{ padding: "10px", marginRight: "10px", width: "200px" }}
      />
      <button onClick={addTask} style={{ padding: "10px 20px" }}>
        Add Task
      </button>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {taskList.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
