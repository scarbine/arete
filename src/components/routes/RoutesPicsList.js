// import React, { useContext, useEffect, useState } from 'react'
// import { RoutesContext } from './RouteProvider'
// import { useParams } from 'react-router'
// import { RoutesPicsCard } from './RoutesPicsCard'
// import ImageGallery from 'react-image-gallery'
// import "./Routes.css"


// export const RoutePicsList = () => {

// 	const {routePics, getRoutePics,filteredPics, setFilteredPics} = useContext(RoutesContext)

// 	// const [filteredPics, setFilteredPics] =useState([])

// 	const {routeId} = useParams()

// 	const thumbWidth ="250"
// 	// const thumbHeight = "150"

// 	const fullWidth = "1000"
	
	
	
// 	useEffect(()=>{
// 		getRoutePics()
// 	},[])
	
// 	useEffect(()=>{
// 		const filtered = routePics.filter(rp => rp.routeId === parseInt(routeId))
// 		console.log(filtered)
// 		setFilteredPics(filtered)
		
		
// 	},[routePics, routeId])
	
// 	const images =[]
// 	useEffect(()=>{
// 		filteredPics.map(routePic => {
// 			const [frontURL, endURL] =routePic.picURL.split('upload/')
// 			const picObj = {
// 				original:`${frontURL}upload/c_scale,w_${fullWidth}/${endURL}`,
// 				thumbnail:`${frontURL}upload/c_scale,w_${thumbWidth}/${endURL}`
// 			}
// 			images.push(picObj)
// 			console.log(frontURL, endURL, picObj)
// 			return images
// 		})
// 		console.log("images", images)
// 	},[filteredPics])

	


// 	return(
// 		<>

// 		<ImageGallery items={images} />
// 		{/* {filteredPics.map(routePic => {
			
// 			return <RoutesPicsCard key={routePic.id} routePic={routePic} />
// 		})} */}
		
// 		</>
// 	)
// }