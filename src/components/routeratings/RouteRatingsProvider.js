
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

	return(
		<>
		<RouteRatingsContext.Provider value={{routeRatings, getRouteRatings, deleteRouteRating}}>
			{props.children}
		</RouteRatingsContext.Provider>

		</>
	)
}