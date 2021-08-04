import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { RouteRatingCard } from './RouteRatingCard'
import { RouteRatingsContext } from './RouteRatingsProvider'




export const RouteRatingList = () => {

	const {routeRatings, getRouteRatings} = useContext(RouteRatingsContext)



	

	
	useEffect(() => {
		getRouteRatings()
	}, [])
	



	return(

		<>
		{routeRatings.map(rating => {
			return (
				<RouteRatingCard key={rating.id} rating={rating} />
			)
		})}
		<div>{routeRatings.length} { routeRatings.length === 1 ? <>climber</> : <>climbers</>} have rated this route.</div>
		</>
	)
}