import React, {createContext, useState} from 'react'
import {WeatherAPI} from "./WeatherAPI"

export const WeatherContext = createContext()

export const WeatherProvider = (props) =>{

	const [weather, setWeather] = useState({
		list:[]
	})

	const getWeather = (Zip) =>{
		return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${Zip}&units=imperial&appid=${WeatherAPI}`)
		.then(res => res.json())
		.then(setWeather).then(console.log("getWeather:" ,weather))

	}

	return <>

	<WeatherContext.Provider value={{weather, getWeather}}>
		{props.children}
	</WeatherContext.Provider>


	</>
}