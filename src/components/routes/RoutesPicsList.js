import React, { useContext, useEffect, useState } from 'react'
import { RoutesContext } from './RouteProvider'
import { useParams } from 'react-router'
import { RoutesPicsCard } from './RoutesPicsCard'
import "./Routes.css"


export const RoutePicsList = () => {

	const {routePics, getRoutePics} = useContext(RoutesContext)

	const [filteredPics, setFilteredPics] =useState([])

	const {routeId} = useParams()

	useEffect(()=>{
		getRoutePics()
	},[])

	useEffect(()=>{
		const filtered = routePics.filter(rp => rp.routeId === parseInt(routeId))
		console.log(filtered)
		setFilteredPics(filtered)
	},[routePics, routeId])


	return(
		<>
		{filteredPics.map(routePic => {
			return <RoutesPicsCard key={routePic.id} routePic={routePic} />
		})}
		</>
	)
}