import React, { createContext, useState } from "react";

export const ToDoListContext = createContext();

export const ToDoListProvider = (props) => {
  const [todos, setTodo] = useState([]);

  const getTodos = () => {
    return fetch("http://localhost:8088/toDoList?_expand=climber&_expand=route")
      .then((res) => res.json())
      .then(setTodo)
      // .then(console.log(todos));
  };

  const addTodo = (todoObj) => {
    return fetch("http://localhost:8088/toDoList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoObj),
    }).then(getTodos).then(console.log(todos));
  };

  const deleteToDo = (id) => {
	  return fetch(`http://localhost:8088/toDoList/${id}`,{
		  method:"DELETE"})
		  .then(getTodos)
	 
  }

  return (
    <ToDoListContext.Provider value={{ todos, getTodos, addTodo, deleteToDo }}>
      {props.children}
    </ToDoListContext.Provider>
  );
};
