import React from "react";
import "./liststyle.css";
import ToDoLi from "./todoli/todoli";

const List = (props) => {
  let NC = props.tasks.filter((task) => task.completed === false).length;
  

  return (
    <div className="list">
      <div className="NC">Not Completed: {NC}</div>
      <ul className="sp">
        {props.tasks.map((task) => (
          <ToDoLi task={task} del={props.del} check={props.check} />
        ))}
      </ul>
    </div>
  );
};

export default List;
