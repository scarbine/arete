
import React, { useState,createContext } from 'react'

export const RouteCommentsContext = createContext()

export const RouteCommentProvider = (props) => {

	const [routeComments, setRouteComments] = useState([])

	const getRouteComments = () => {
		return fetch('http://localhost:8088/routeComments?_expand=climber')
		.then(res => res.json())
		.then(setRouteComments)
	}

	const addRouteComment = (RouteCommentObj) => {
		return fetch('http://localhost:8088/routeComments',{
			method:"POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(RouteCommentObj),
		
		}).then(getRouteComments)
	}


	return(
		<>
		<RouteCommentsContext.Provider value={{routeComments, getRouteComments, addRouteComment}}>
			{props.children}
		</RouteCommentsContext.Provider>
		</>
	)

}