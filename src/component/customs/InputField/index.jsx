import React, { useState } from "react";

import "./input-fild.style.scss";

const InputFild = ({ sendDataToParent, inputValue, todos, updateTodo , onChange , currentValue}) => {
  return (
    <div className="input-fild d-flex align-items-center justify-content-between w-100">
      <input
        type="text"
        id="input"
        className="px-3 col h-100"
        placeholder="Add a todo"
        onChange={(e)=>{onChange(e.target.value)}}
        value={currentValue}
      />
      <button
        id="btn"
        className={`text-white h-100 border-0 ${inputValue? 'd-none' : 'd-block'}`}
        onClick={()=>{sendDataToParent(currentValue)}}
      >
        Add
      </button>
      <button
        id="update-btn"
        className={`text-white h-100 border-0 ${inputValue ? 'd-block' : 'd-none'}`}
        onClick={() => {
          updateTodo(currentValue)
        }}
      >
        Update
      </button>
    </div>
  );
};

export default InputFild;
