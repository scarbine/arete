import React from 'react'


export const RouteCommentsCard = ({routeComment}) => {


	return(
		<>
		<div>I am here route Comment</div>
		<div>{routeComment.comment}</div>
		<div>{routeComment.climber.firstName} {routeComment.climber.lastName}</div>
		
		</>
	)
}