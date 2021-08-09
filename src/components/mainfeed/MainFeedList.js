import React, {useContext, useState, useEffect} from "react"
import { MainFeedCard } from "./MainFeedCard"
import { MainFeedContext } from "./MainFeedProvider"



export const MainFeedList = () => {
	
	const {mainFeed, getMainFeed} = useContext(MainFeedContext)

	

	useEffect(() => {
		getMainFeed()
		
	}, [])

	useEffect(() => {
		console.log(mainFeed)
	}, [mainFeed])

	return(
		<>
		<section className="main_feed_wrapper">
		{ mainFeed.map(feedEvent => <MainFeedCard key={feedEvent.id} feedEvent={feedEvent} />)}
		</section>
		</>
	)
}