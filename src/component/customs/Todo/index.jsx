import React from "react";
import { Icon } from "@iconify/react";

import "./todo.style.scss";

const Todo = ({ todoName, bg, deleteTodoHandle, editTodoHandle }) => {
  return (
    <div
      className="todo d-flex px-2 justify-content-between align-items-center w-100 px-3 py-2 rounded-3 my-3"
      style={{ backgroundColor: `${bg}` }}
    >
      <span className="text-white fs-5">{todoName}</span>
      <div className="d-flex gap-1">
        <Icon
          icon="clarity:remove-line"
          color="white"
          width="23"
          height="23"
          onClick={() => deleteTodoHandle(todoName)}
        />
        <Icon
          icon="clarity:note-edit-line"
          color="white"
          width="23"
          height="23"
          onClick={() => {
            editTodoHandle(todoName);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
