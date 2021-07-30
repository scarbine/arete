import React, {useContext, useEffect, useState} from "react"
import { AreaContext } from "./AreaProvider"
import { WallContext } from "../walls/WallProvider"
import { WallCard } from "../walls/WallCard"
import { useParams } from "react-router-dom"



export const AreaDetails = () => {

const {area, getAreaById} = useContext(AreaContext)
const {walls , getWalls} = useContext(WallContext)

const [filteredWalls, setFilteredWalls] = useState()


const {areaId} =useParams()


	useEffect(() => {
		getAreaById(parseInt(areaId))
		.then(getWalls).then(console.log(areaId))
	}, [])


	useEffect(()=>{
		const filtered = walls.filter(wall => wall.areaId === parseInt(areaId))
		setFilteredWalls(filtered)
	},[areaId ,walls])

	return (
		<> 
		<div>
			{/* {area.id} */}
		</div>
		<div> {(filteredWalls !== undefined ? (
			filteredWalls.map((wall)=>{
				return <WallCard key={walls.id} wall={wall} />
			})) : (
				<>
				<div>There are no Walls yet in this area.</div>
				</>
			))
		}
		</div>
		
		</>
	)
}