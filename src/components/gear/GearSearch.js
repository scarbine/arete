import React, { useContext } from "react"
import { GearContext } from "./GearProvider"


export const GearSearch = () => {

	const { setSearchTerms} = useContext(GearContext)
	

	return(
		<>
		<input placeholder="Search for Gear" type='text' className="input --wide" onKeyUp={(event) => setSearchTerms(event.target.value)} />
		</>
	)
}