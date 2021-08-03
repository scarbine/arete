import React, {useContext, useEffect, useState} from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import { RouteRatingsContext } from './RouteRatingsProvider'




export const RouteRatingAverage = ({routeId}) => {

	const {routeRatings, getRouteRatings} =useContext(RouteRatingsContext)

	const [filteredRatings, setFilteredRatings] = useState([])

	const [ratingAvg, setRatingAvg] = useState([])

	console.log("routeID", routeId)

	useEffect(() => {
		getRouteRatings()
		
	}, [])



	useEffect(()=>{
		const filtered = routeRatings.filter(rating => rating.routeId === routeId)
		setFilteredRatings(filtered)
			
	},[routeId, routeRatings])

	useEffect(()=>{
		console.log(filteredRatings)
		// let total = 0
		// for(let i = 0; i<filteredRatings.rating.length ; i++){
		// 	total += filteredRatings.rating[i]
		// }
		// const RatingAvg = total / filteredRatings.length
		// console.log(RatingAvg)
		// setRatingAvg(RatingAvg)
	},[filteredRatings])


	return(
		<>
		<div>{ratingAvg}</div>
		</>
	)
}