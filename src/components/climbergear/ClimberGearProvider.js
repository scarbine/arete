import React, {useState, createContext } from "react";

export const ClimberGearContext = createContext()

export const ClimberGearProvider = (props) => {

	const [climberGear, setClimberGear]= useState([])

	const getClimberGear = ()=>{
		return fetch("http://localhost:8088/climberGear?_expand=gear")
		.then(res=>res.json())
		.then(setClimberGear)
	}

	const addClimberGear = (climberGearObj) => {
		return fetch("http://localhost:8088/climberGear",{
		method: "POST",
		headers:{
			"Content-Type": "application/json"
		},
		body:JSON.stringify(climberGearObj)
	
	}).then(getClimberGear)
	}


	return(

		<ClimberGearContext.Provider value={{climberGear , getClimberGear, addClimberGear}}>
			{props.children}
		</ClimberGearContext.Provider>

	)
}