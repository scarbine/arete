import { Modal } from "bootstrap"
import React, {createContext, useState} from "react"

export const TickListContext = createContext()

export const TickListProvider = (props) => {

	const [ticks, setTicks] = useState([])
	const [foundTicks, setFoundTicks] = useState([]);

	const getTicks = () => {
		return fetch("http://localhost:8088/ticks?_expand=climber&_expand=route")
		.then(res => res.json())
		.then(setTicks)
		
		
	}

	const addTick = (tickObj) => {
		return fetch("http://localhost:8088/ticks",{
			method:"POST",
			headers:{
				"Content-Type": "application/json",
			},
			body: JSON.stringify(tickObj)
		}).then(getTicks).then(console.log(ticks))
		
	}

	return(
		<TickListContext.Provider value={{ ticks, getTicks, addTick,foundTicks,setFoundTicks}}>
			{props.children}
		</TickListContext.Provider>
	)
}