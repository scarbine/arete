import React, {useContext, useEffect, useState} from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import { RouteRatingsContext } from './RouteRatingsProvider'
import "../routes/Routes.css"




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
		let total = 0
		for(let i = 0; i<filteredRatings.length ; i++){
			total += filteredRatings[i].rating
		}
		const RatingAvg = total / filteredRatings.length
		console.log(RatingAvg)
		setRatingAvg(RatingAvg.toFixed(1))
	},[filteredRatings])


	return(
		<>
		<div className="route_detail">
			Climber Rating: {ratingAvg} of 5
			</div>
		</>
	)
}