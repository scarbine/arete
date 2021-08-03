import React, { useContext, useState } from 'react'
import axios from 'axios'
import { RoutesContext } from './RouteProvider'
import { useHistory } from 'react-router-dom'



export const UploadRoutePics = () => {

	const {routeId, addRoutePic} = useContext(RoutesContext)
	console.log("routeID State",routeId)

	const history = useHistory()

	const [imageSelected, setImageSelected] = useState('')

	const currentUser = localStorage.getItem("arete_customer")

	const handleAddFile = () =>{
		console.log("im here", imageSelected)
		const formData = new FormData()
		formData.append("file", imageSelected)
		formData.append("upload_preset", "arete-app")
		axios.post("https://api.cloudinary.com/v1_1/ddaeunjfu/image/upload", formData)
		.then((res)=> {
		const routePicObj = {
			picURL :res.data.secure_url,
			climberId : parseInt(currentUser),
			routeId : routeId,
			dateAdded : Date.now()
		}
		console.log(routePicObj)
		addRoutePic(routePicObj)
		
	}).then(history.push(`/routes/detail/${routeId}`))
}
	// const reader = new FileReader()

	return(
		<>
		<form className="form submit_pic">
			<h5>Choose Your Image to Upload</h5>
			<input type="file" onChange={(event) => {
				setImageSelected(event.target.files[0])	
			}}></input>
			{/* <img src={reader.readAsDataURL(imageSelected)} alt="preview" /> */}
			
			<div className="btn"onClick={handleAddFile}>Upload Image</div>
		</form>
		</>
	)
}