import React, { useContext, useEffect, useState } from "react";
import { ToDoListContext } from "./ToDoProvider";
import { ToDoCard } from "./ToDoCard";
import { useParams } from "react-router";
// import "./ToDo.css"

export const ToDoList = ({climber}) => {
  const { todos, getTodos } = useContext(ToDoListContext);
  const [foundToDos, setFoundToDos] =useState()
  const { climberId } = useParams();
  const { routeId } = useParams()
  // const filteredTodos = todos.filter(
  //   (todo) => todo.climberId === parseInt(climberId)
  // );

  // const sortedToDos = filteredTodos.sort((a,b)=> b.id - a.id)

  useEffect(() => {
    getTodos()
   
  }, []);

  useEffect(() => {
    if (climber) {
	
      const filteredByClimberIdToDos = todos.filter(
        (todo) => todo.climberId === parseInt(climberId)
      );
      const sorted = filteredByClimberIdToDos.sort((a, b) => b.id - a.id);
      setFoundToDos(sorted);
      console.log("climber:todo", sorted);
    } else {
      const filteredByRouteToDos = todos.filter(
        (todo) => todo.routeId === parseInt(routeId)
      );
      const sorted = filteredByRouteToDos.sort((a, b) => b.id - a.id);
      setFoundToDos(sorted);
      console.log("route:todo",sorted)
    }
    climber = false
    return climber
  }, [climberId, todos]);

  

  return (
    <>
      <section className="todo_list">
        <h4 className="todo_list_header">Todo List</h4>
        <div>
          {foundToDos?.map((todo) => {
            return <ToDoCard key={todo.id} todo={todo} />;
          })}
        </div>
      </section>
    </>
  );
};
