import React, { useContext } from "react"
import { ClimberContext } from "./ClimberProvider"


export const ClimberSearch = () => {

	const {setSearchTerms} =useContext(ClimberContext)
	return(
		<>
		<input type="text" placeholder="Search for Climber..." className="input--wide" onKeyUp={(event)=> setSearchTerms(event.target.value)} />

		</>
	)
}