import React, { useContext } from "react"
import { ToDoListContext } from "./ToDoProvider"
import "./ToDo.css"
import { useHistory } from "react-router-dom"
import { TickListContext } from "../ticklist/TickListProvider"


export const ToDoCard = ({todo}) => {

	const {deleteToDo} = useContext(ToDoListContext)
	const {addTick} = useContext(TickListContext)

	const history = useHistory()

	const removeTodo = () =>{
		deleteToDo(todo.id)
	}

	const addTickOnClick = () => {
		addTick({
			climberId:todo.climberId,
			routeId:todo.routeId,
			dateCompleted: Date.now()
		}).then(deleteToDo(todo.id))
	}
	
	const handleTodoClick = () => {
		history.push(`/routes/detail/${todo.route.id}`)
	}
	return(
		<>
		<div className="todo_list_details">
			<button className="btn" onClick={handleTodoClick}>
		<h5>{todo.route.routeName}</h5>
		</button>
		<div>
		<button className="todo_remove_btn" onClick={removeTodo}> Remove</button>
		<button className="todo_add_tick_btn" onClick={addTickOnClick}> Tick</button>
		</div>
		</div>
		</>
	)
}