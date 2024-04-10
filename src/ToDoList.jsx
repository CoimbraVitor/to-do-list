import { useState } from "react";
import './index.css'

function ToDoList() {
  const [tasks, setTasks] = useState(["teste", "teste2"]);
  const [newTask, setNewTask] = useState("");

  function handleinput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((element, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks)
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        setTasks(updatedTasks)
      }
  }

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={newTask}
          onChange={handleinput}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <ol>
        {tasks.map((element, index) => (
          <li key={index}>
            <span>{element}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
            <button onClick={() => moveUp(index)}>🔼</button>
            <button onClick={() => moveDown(index)}>🔽</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
