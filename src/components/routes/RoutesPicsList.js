import React, { useContext, useEffect, useState } from 'react'
import { RoutesContext } from './RouteProvider'
import { useParams } from 'react-router'
import { RoutesPicsCard } from './RoutesPicsCard'
// import ImageGallery from 'react-image-gallery'
import "./Routes.css"


export const RoutePicsList = () => {

	const {routePics, getRoutePics} = useContext(RoutesContext)

	const [filteredPics, setFilteredPics] =useState([])

	const {routeId} = useParams()

	// const images = []


	useEffect(()=>{
		getRoutePics()
	},[])

	useEffect(()=>{
		const filtered = routePics.filter(rp => rp.routeId === parseInt(routeId))
		console.log(filtered)
		setFilteredPics(filtered)
		// filtered.map(pic => {
		// 	const item = {
		// 		original: pic.URL,
    		// 		thumbnail: 'https://picsum.photos/id/1018/250/150/',
		// 	}
		// 	return images.push(item)})
			
	},[routePics, routeId])

	


	return(
		<>

		{/* <ImageGallery items={images} /> */}
		{filteredPics.map(routePic => {
			
			return <RoutesPicsCard key={routePic.id} routePic={routePic} />
		})}
		
		</>
	)
}