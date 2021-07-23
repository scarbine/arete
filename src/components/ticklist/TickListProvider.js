import { Modal } from "bootstrap"
import React, {createContext, useState} from "react"

export const TickListContext = createContext()

export const TickListProvider = (props) => {

	const [ticks, setTicks] = useState([])

	const getTicks = () => {
		return fetch("http://localhost:8088/ticks?_expand=climber&_expand=route")
		.then(res => res.json())
		.then(setTicks)
		.then(console.log(ticks))
		
	}

	const addTick = (tickObj) => {
		return fetch("http://localhost:8088/ticks",{
			method:"POST",
			headers:{
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tickObj)
		}).then(getTicks)
		
	}

	return(
		<TickListContext.Provider value={{ ticks, getTicks, addTick}}>
			{props.children}
		</TickListContext.Provider>
	)
}