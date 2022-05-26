import React, { useState } from "react";
import InputFild from "../component/customs/InputField";
import Todo from "../component/customs/Todo";

import "./input-container.style.scss";

const InputContainer = () => {
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState([]);
  const [editName, setEditName] = useState('');
  const [currentValue , setCurrentValue] = useState('')

  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  const sendDataToParent = (value) => {
    setTodos((todos) => [...todos, value]);
    setColor((color) => [...color, randColor()]);
    setEditName()
    setCurrentValue('')
  };

  const deleteTodoHandle = (name) => {
    let index = todos.indexOf(name);
    if (index !== -1) {
      todos.splice(index, 1);
      color.splice(index, 1);
    }
    setTodos((todos)=>[...todos])
    setTodos((color)=>[...color])
  };

  const editTodoHandle = (name) => {
    setEditName(name)
    setCurrentValue(name)
  };


  


  const updateTodo = (value) =>{
    let index = todos.indexOf(editName)
    todos[index] = value
    setTodos([...todos])
    setEditName('')
    setCurrentValue('')
  }


  const onChange = (value) => {
    console.log(value);
    setCurrentValue(value)
  }



  return (
    <div className="input-container py-4 d-flex flex-column align-items-center gap-3">
      <h4 className="text-white">Feeling productive today?</h4>
      <InputFild sendDataToParent={sendDataToParent} inputValue={editName ? editName : ''} todos={todos} updateTodo={updateTodo} onChange={onChange} currentValue={currentValue}/>
      <div className="todo-container w-100">
        {todos.map((todo, index) => (
          <Todo
            key={color[index]}
            todoName={todo}
            bg={color[index]}
            deleteTodoHandle={deleteTodoHandle}
            editTodoHandle={editTodoHandle}
          />
        ))}
      </div>
    </div>
  );
};

export default InputContainer;
