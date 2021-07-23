import React from "react"
import "./ToDo.css"


export const ToDoCard = ({todo}) => {


	console.log(todo)

	return(
		<>
		<div className="todo_list_details">
		<h4>{todo.route.routeName}</h4>
		<h4>{todo.dateCompleted}</h4>
		</div>
		</>
	)
}