import React, { useContext } from "react"
import { ToDoListContext } from "./ToDoProvider"
import "./ToDo.css"
import { useHistory } from "react-router-dom"


export const ToDoCard = ({todo}) => {

	const {deleteToDo} = useContext(ToDoListContext)

	const history = useHistory()

	const removeTodo = () =>{
		deleteToDo(todo.id)
	}
	
	const handleTodoClick = () => {
		history.push(`/routes/detail/${todo.route.id}`)
	}
	return(
		<>
		<div className="todo_list_details">
			<button className="btn" onClick={handleTodoClick}>
		<h4>{todo.route.routeName}</h4>
		</button>
		<div>
		<button className="todo_remove_btn" onClick={removeTodo}> Remove</button>
		</div>
		</div>
		</>
	)
}