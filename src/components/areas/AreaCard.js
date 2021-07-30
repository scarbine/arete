import React from "react" 
import { useHistory } from "react-router-dom"


export const AreaCard = ({area}) => {
	// console.log(area)


	const history = useHistory()

	const handleGoToDetails = () => {
		history.push(`areas/detail/${area.id}`)
	      }
	return(
		<>
		<section className="card area" onClick={handleGoToDetails}>
			<h3>{area.name}</h3>
			<h5>{area.crag.name}</h5>
		</section>

		</>
	)
}