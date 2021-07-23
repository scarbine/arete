import React from "react"
import "./Ticks.css"


export const TickListCard = ({tick}) => {

	console.log()

	return(
		<>
		<div className="tick_list_details">
		<h4>{tick.route.routeName}</h4>
		<h4>{tick.dateCompleted}</h4>
		</div>
		</>
	)
}