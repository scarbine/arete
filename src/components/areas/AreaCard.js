import React from "react" 


export const AreaCard = ({area}) => {
	console.log(area)
	return(
		<>
		<section className="card area">
			<h3>{area.name}</h3>
			<h5>{area.crag.name}</h5>
		</section>

		</>
	)
}