import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { RouteCommentsCard } from './RouteCommentCard'
import { RouteCommentsContext } from './RouteCommentsProvider'


export const RouteCommentsList = () => {

	const {routeComments, getRouteComments} = useContext(RouteCommentsContext)
	const [filteredRouteComments, setFilteredRouteComments] = useState([])

	const {routeId} = useParams()

	useEffect(()=>{
		getRouteComments()
	},[])

	useEffect(()=>{
		const filtered = routeComments.filter(rc => rc.routeId === parseInt(routeId))
		setFilteredRouteComments(filtered)
		console.log(routeComments, parseInt(routeId))

	},[routeId])

	return (
		<>
		{filteredRouteComments.map((routeComment) => {
			return <RouteCommentsCard key={routeComment.id} routeComment={routeComment} />})}
		</>
	)
}