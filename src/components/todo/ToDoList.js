import React, {useContext, useEffect, useState} from "react"
import { ToDoListContext } from "./ToDoProvider"
import { ToDoCard } from "./ToDoCard"
import { useParams } from "react-router"
// import "./ToDo.css"


export const ToDoList = () => {

	const {todos, getTodos} = useContext(ToDoListContext)

	const {climberId} = useParams()
	
	const filteredTodos = todos.filter(todo => todo.climberId === parseInt(climberId))
	
	console.log("filtered and cliber ID",climberId, filteredTodos)

	useEffect(() => {
		getTodos()
		.then(console.log("useEffect: todos ->", todos))
	}, [])

	return(
		<>
		<section className="todo_list">
			<h1 className="todo_list_header">Tick List</h1>
			<div>
			{filteredTodos.map((todo)=>{
				return(
					<ToDoCard key={todo.id} todo={todo} />
				)
			})}
			</div>
		</section>

		</>
	)
}