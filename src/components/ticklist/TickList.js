import React, {useContext, useEffect, useState} from "react"
import { TickListContext } from "./TickListProvider"
import { TickListCard } from "./TickListCard"
import { useParams } from "react-router"
import "./Ticks.css"


export const TickList = () => {

	const {ticks, getTicks} = useContext(TickListContext)

	const {climberId} = useParams()
	
	const filteredTicks = ticks.filter(tick => tick.climberId === parseInt(climberId))
	
	console.log(climberId, filteredTicks)

	useEffect(() => {
		getTicks()
		.then(console.log("useEffect: ticks ->", ticks))
	}, [])

	return(
		<>
		<section className="tick_list">
			<h1 className="tick_list_header">Tick List</h1>
			<div>
			{filteredTicks.map((tick)=>{
				return(
					<TickListCard key={tick.id} tick={tick} />
				)
			})}
			</div>
		</section>

		</>
	)
}