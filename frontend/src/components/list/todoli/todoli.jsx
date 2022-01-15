import React from "react";
import "./todolistyle.css";

const ToDoLi = (props) => {
  const className = "todoli" + (props.task.completed ? " done" : "");
  const delTask = () => {
    props.del(props.task.id);
  };
  const checkTask = () => {
    props.check(props.task.id);
  };
  return (
    <div className={className}>
      <div className="todo">{props.task.value}</div>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          checked={props.task.completed}
          onClick={checkTask}
        ></input>
        <button className="delete" onClick={delTask}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoLi;
