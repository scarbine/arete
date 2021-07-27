import React, { useContext, useEffect } from "react"
import { AreaContext } from "./AreaProvider"
import { AreaCard } from "./AreaCard"
import { useHistory } from "react-router-dom"


export const AreaList = () => {

	const {areas, getAreas} = useContext(AreaContext)
	const history = useHistory()

	useEffect(() => {
		getAreas()
		.then(console.log(areas))
	}, [])

	const handleOnClick = ()=>{
		history.push("areas/create")
	}

	return(
		<>
		<button onClick={handleOnClick}>Add New Area</button>
		{areas.map(area => {
			return(
			<AreaCard key={area.id} area={area}>
				{area.name}
			</AreaCard>
		)})}
		</>
	)
}