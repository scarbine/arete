
import React, {createContext, useState} from 'react'

export const CragContext = createContext()

export const CragProvider = (props) => {

	const [crags , setCrags] = useState([])

	const getCrags = () => {
		return fetch("http://localhost:8088/crags")
		.then((res) => res.json())
		.then(setCrags)
		.then(console.log("Crag Provider", crags))
	}

	return(

		<CragContext.Provider value={{crags, getCrags}}>
			{props.children}
		</CragContext.Provider>
	)
}