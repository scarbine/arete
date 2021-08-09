import React, {createContext, useState} from 'react'

export const MainFeedContext = createContext()

export const MainFeedProvider = (props) => {

	const [mainFeed, setMainFeed] = useState([])


	const getMainFeed = () => {
		return fetch("http://localhost:8088/mainFeed?_expand=climber")
		.then(res => res.json())
		.then(setMainFeed)
	}

	return(
		<MainFeedContext.Provider value={{mainFeed , getMainFeed}}>
			{props.children}
			</MainFeedContext.Provider>
	)
}