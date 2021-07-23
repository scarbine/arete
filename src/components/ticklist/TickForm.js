import React from 'react'


export const TickForm = ({route}) => {
	const currentUser = parseInt(localStorage.getItem("arete_customer"))
	
	console.log("TickForm: Route - ",route, "Current User", currentUser)

	return(
		<>
		<h1>New Tick Form is rendering</h1>
		<form>

		</form>
		</>
	)
}