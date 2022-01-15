import React, { useState } from "react";
import "./formstyle.css";

const Form = (props) => {
  const onClick = () => {
    props.addToDo(value);
    setInput("");
  };
  const [value, setInput] = useState("");
  const change = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="form">
      <input className="input" value={value} onChange={change}></input>
      <button className="button" onClick={onClick}>
        ADD
      </button>
    </div>
  );
};

export default Form;
