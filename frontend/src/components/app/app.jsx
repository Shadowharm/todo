import React, { useEffect, useState } from "react";
import "./appstyle.css";
import Form from "../form/form.jsx";
import List from "../list/list.jsx";
import {
  getTodos,
  addTodo,
  deleteTodo,
  changeCompleted,
} from "../../api/index.js";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setTasks(res.toDoList));
  }, []);

  const saveToDo = (task) => {
    if(!task) return;
    let newItem = { id: Date.now(), value: task, completed: false };
    console.log(newItem)
    addTodo(newItem).then(() => {
      setTasks((prev) => {
        return [...prev, newItem];
      });
    });
  };
  
  const delToDo = (id) => {
    deleteTodo(id).then(() => {
      setTasks(tasks.filter((item) => item.id !== id));
    })
  };

  const checkTask = (id) => {
    changeCompleted(id).then(() => {
      let check = tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      

      setTasks(check);
    })
  };
  return (
    <div className="app">
      <Form addToDo={saveToDo} />
      <List tasks={tasks} del={delToDo} check={checkTask} />
    </div>
  );
};

export default App;
