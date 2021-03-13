import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function Todo(props) {
  const { content } = props;
  const [isDone, setIsDone] = useState(false);
  const styles = {textDecoration: isDone ? "line-through" : "none"};
  const toggleIsDone = () => setIsDone(!isDone);
  return (
        <div style={styles} onClick={toggleIsDone}>
          {content}
        </div>)
}

export default Todo;
