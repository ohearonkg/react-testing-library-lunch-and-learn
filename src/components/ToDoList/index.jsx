import React from "react";
import { connect } from "react-redux";

const ToDoList = ({ toDos }) => (
  <div>
    <ul>
      {toDos.map(({ id, text, completed }) => (
        <li
          key={id}
          style={{ textDecoration: completed ? "line-through" : null }}
        >
          {text}
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ toDos }) => ({ toDos });

export default connect(mapStateToProps)(ToDoList);
