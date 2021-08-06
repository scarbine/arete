import React, {useEffect, useContext, useState}from 'react'
import { RoutesContext } from '../routes/RouteProvider'
import { AdminCard } from './AdminCard'
import { AdminContext } from './AdminProvider'
import "./Admin.css"


export const AdminList =()=> {

	const {adminTasks, getAdminTasks, setAdminTasks} = useContext(AdminContext)
	const {routes} =useContext(RoutesContext)

	const [filteredTasks , setFilteredTasks] = useState([])


	useEffect(()=>{
		getAdminTasks()
		.then(console.log(adminTasks))
	},[])

	useEffect(()=>{
		const filtered = adminTasks.filter(task=> task.isApproved === false)
		setFilteredTasks(filtered)
	},[ adminTasks])

	return(
		<>
		<section className="admin_list" >
			<h5>Admin List</h5>
		{filteredTasks.map(task => <AdminCard key={task.id} task={task} />)}
		</section>
		</>
	)
}