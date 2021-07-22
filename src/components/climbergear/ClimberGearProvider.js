import React, {useState, createContext } from "react";

export const ClimberGearContext = createContext()

export const ClimberGearProvider = (props) => {

	const [climberGear, setClimberGear]= useState([])

	const getClimberGear = ()=>{
		return fetch("http://localhost:8088/climberGear?_expand=gear")
		.then(res=>res.json())
		.then(setClimberGear)
	}


	return(

		<ClimberGearContext.Provider value={{climberGear , getClimberGear}}>
			{props.children}
		</ClimberGearContext.Provider>

	)
}