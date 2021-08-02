
import React, { useState,createContext } from 'react'

export const RouteCommentsContext = createContext()

export const RouteCommentProvider = (props) => {

	const [routeComments, setRouteComments] = useState([])

	const getRouteComments = () => {
		return fetch('http://localhost:8088/routeComments?_expand=climber')
		.then(res => res.json())
		.then(setRouteComments)
	}


	return(
		<>
		<RouteCommentsContext.Provider value={{routeComments, getRouteComments}}>
			{props.children}
		</RouteCommentsContext.Provider>
		</>
	)

}