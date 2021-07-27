import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { RouteCard } from "../routes/RouteCard"
import { RoutesContext } from "../routes/RouteProvider"
import { WallContext } from "./WallProvider"


export const WallDetail =() => {
	
	const {wallId} = useParams()
	console.log(wallId)
	const {routes , getRoutes} = useContext(RoutesContext)
	const {wall, getWallById , setWall} = useContext(WallContext)
	
	useEffect(() => {
		getWallById(wallId).then(getRoutes).then(console.log(wall,routes))
	}, [])
	
	
	
	const filteredRoutes = routes.filter(route=> route.wallId === wall.id)
	console.log("filteredRoutes",filteredRoutes , wall)

	return(
		<>
		<h1>Wall Details</h1>
		{filteredRoutes.map(route => {
			return <RouteCard key={route.id} route={route} />
		})}

		</>
	)
}