
import React, { useState, createContext } from 'react'

export const RouteRatingsContext = createContext()

export const RouteRatingsProvider = (props) => {

	const [routeRatings, setRouteRatings] = useState([])


	const getRouteRatings = () => {
		return fetch("http://localhost:8088/routeRating")
		.then((res)=>res.json())
		.then(setRouteRatings)
	}

	const deleteRouteRating = (id) =>{
		return fetch((`http://localhost:8088/routeRating/${id}`),{
			method:"DELETE"
		}).then(getRouteRatings)
	}
	const addRouteRating = (ratingObj) => {
		return fetch("http://localhost:8088/routeRating",{
		method:"POST",
		headers:{
			"Content-Type": "application/json",
		},
		body: JSON.stringify(ratingObj)})
		.then(getRouteRatings)
	}
	return(
		<>
		<RouteRatingsContext.Provider value={{routeRatings, getRouteRatings, deleteRouteRating, addRouteRating}}>
			{props.children}
		</RouteRatingsContext.Provider>

		</>
	)
}