import React, {createContext, useState} from 'react'
import {WeatherAPI} from "./WeatherAPI"

export const WeatherContext = createContext()

export const WeatherProvider = (props) =>{

	const [weather, setWeather] = useState({
		weather:[]
	})

	const getWeather = (Zip) =>{
		return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${Zip}&units=imperial&appid=${WeatherAPI}`)
		.then(res => res.json())
		.then(setWeather)

	}

	return <>

	<WeatherContext.Provider value={{weather, getWeather}}>
		{props.children}
	</WeatherContext.Provider>


	</>
}