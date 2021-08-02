import React from 'react'
import "./Routes.css"


export const RoutesPicsCard = ({routePic}) => {


	return(
		<>
		<img className="route_image card" src={routePic.picURL} alt="route_pic"/>
		</>
	)
}