import React from "react"
import { useParams } from "react-router-dom"
import "./Ticks.css"


export const TickListCard = ({tick}) => {

	const{climberId} = useParams()

	console.log()

	return( 


		<>
		{climberId ? (
		<div className="tick_list_details">
		<h4>{tick.route.routeName}</h4>
		<h4>{tick.dateCompleted}</h4>
		</div> ) : (
		<div className="tick_list_details">
		<h4>{tick.climber.firstName} {tick.climber.lastName}</h4>
		<h4>{tick.dateCompleted}</h4>
		</div>	
		)}
		</>
	)
}