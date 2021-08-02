import { createContext } from 'jest-runtime'
import React from 'react'


export const RoutePicsContext = createContext()

export const RoutePicsProvider = (props) => {

	const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/ddaeunjfu/image/upload'
	const cloudinaryUploadPreset = "arete-app"

	const addPic = () => {
		return fetch(`${cloudinaryAPI}`,{
		method: "POST",
		headers: {
			"Content-Type" : "application/x-www-form-urlencoded"
		}})
	
	}

	return (
		<>
		<RoutePicsContext.Provider value={{addPic}}>
			{props.children}
		</RoutePicsContext.Provider>
		</>
	)
}