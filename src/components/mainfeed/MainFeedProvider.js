import React, {createContext, useState} from 'react'

export const MainFeedContext = createContext()

export const MainFeedProvider = (props) => {

	const [mainFeed, setMainFeed] = useState([
	])


	const getMainFeed = () => {
		return fetch("http://localhost:8088/mainFeed?_expand=climber")
		.then(res => res.json())
		.then(setMainFeed)
	}

	const addMainFeed = (mainFeedObj) => {
		return fetch("http://localhost:8088/mainFeed",{
			method: "POST",
			headers: {
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(mainFeedObj)
		    })
		    .then(getMainFeed)	
		
	}

	return(
		<MainFeedContext.Provider value={{mainFeed , getMainFeed, addMainFeed}}>
			{props.children}
			</MainFeedContext.Provider>
	)
}