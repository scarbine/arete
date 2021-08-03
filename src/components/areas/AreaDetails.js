import React, {useContext, useEffect, useState} from "react"
import { AreaContext } from "./AreaProvider"
import { WallContext } from "../walls/WallProvider"
import { WallCard } from "../walls/WallCard"
import { useParams } from "react-router-dom"
import { WeatherContext } from "../weather/WeatherProvider"



export const AreaDetails = () => {

const {area, getAreaById} = useContext(AreaContext)
const {walls , getWalls} = useContext(WallContext)
const {weather,  getWeather} = useContext(WeatherContext)

const [filteredWalls, setFilteredWalls] = useState([])



const {areaId} =useParams()


	useEffect(() => {
		getAreaById(parseInt(areaId))
		.then(getWalls).then(console.log(areaId))
	}, [])


	useEffect(()=>{
		const filtered = walls.filter(wall => wall.areaId === parseInt(areaId))
		setFilteredWalls(filtered)
	},[areaId ,walls])

	useEffect(()=>{
		console.log(area)
		const zip = area.crag.zipCode
		console.log(zip)
		getWeather(zip)
		.then(console.log(weather))
	},[areaId])

	return (
		<> 
		<div>
			<h3 className="area_header">{area.name}</h3>
			
		</div>
		<div> {(filteredWalls !== undefined ? (
			filteredWalls.map((wall)=>{
				return <WallCard key={wall.id} wall={wall} />
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