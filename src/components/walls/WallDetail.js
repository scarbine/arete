import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { RouteCard } from "../routes/RouteCard"
import { RoutesContext } from "../routes/RouteProvider"
import { WallContext } from "./WallProvider"
import "./Walls.css"


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
		<h1 className="wall_detail_header">{wall.name}</h1>
		<div className="wall_routes_list">
			<h3 className="wall_routes_list_header">Routes</h3>
		{filteredRoutes.map(route => {
			return <RouteCard key={route.id} route={route} />
		})}
		</div>

		</>
	)
}