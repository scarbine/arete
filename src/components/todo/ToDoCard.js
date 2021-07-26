import React, { useContext } from "react"
import { ToDoListContext } from "./ToDoProvider"
import "./ToDo.css"


export const ToDoCard = ({todo}) => {

	const {deleteToDo} = useContext(ToDoListContext)

	const removeTodo = () =>{
		deleteToDo(todo.id)
	}
	

	return(
		<>
		<div className="todo_list_details">
		<h4>{todo.route.routeName}</h4>
		<h4>{todo.dateCompleted}</h4>
		<button onClick={removeTodo}> Remove</button>
		</div>
		</>
	)
}