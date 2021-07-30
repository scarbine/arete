import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { RouteRatingCard } from './RouteRatingCard'
import { RouteRatingsContext } from './RouteRatingsProvider'




export const RouteRatingList = () => {

	const {routeRatings, getRouteRatings} = useContext(RouteRatingsContext)



	let noRatings = false

	
	useEffect(() => {
		getRouteRatings()
	}, [])
	



	return(

		<>
		{routeRatings.map(rating => {
			return (
				<RouteRatingCard key={rating.i} rating={rating} />
			)
		})}
		</>
	)
}