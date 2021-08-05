
import React, { useContext } from "react"
import { WallContext } from "./WallProvider"


export const WallSearch = () => {

	const {setSearchTerms} =useContext(WallContext)


	return(
		<>
		
		<input onKeyUp={(event) => setSearchTerms(event.target.value) } placeholder="Search for Walls..." className="input--wide search_bar_wall"/>
		
		</>
	)
}