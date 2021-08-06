import React, {useEffect, useContext, useState}from 'react'
import { RoutesContext } from '../routes/RouteProvider'
import { AdminCard } from './AdminCard'
import { AdminContext } from './AdminProvider'
import "./Admin.css"


export const AdminList =()=> {

	const {adminTasks, getAdminTasks} = useContext(AdminContext)
	

	const [filteredTasks , setFilteredTasks] = useState([])
	const [approvedTasks, setApprovedTasks] = useState([])
	const [deniedTasks, setDeniedTasks] = useState([])


	useEffect(()=>{
		getAdminTasks()
		.then(console.log(adminTasks))
	},[])

	useEffect(()=>{
		const filtered = adminTasks.filter(task=> task.isApproved === false && task.isDenied === false)
		setFilteredTasks(filtered)
	},[ adminTasks])

	useEffect(()=>{
		const approvedFilter = adminTasks.filter(task => task.isApproved === true)
		setApprovedTasks(approvedFilter)
	},[adminTasks])

	useEffect(()=>{
		const approvedFilter = adminTasks.filter(task => task.isDenied === true)
		setDeniedTasks(approvedFilter)
	},[adminTasks])

	return(
		<>
		<section className="admin_header">
			<h5>Admin List</h5>
			<h5>Pending</h5>
			</section>
		<ul className="admin_list" >
		{filteredTasks.map(task => <AdminCard key={task.id} task={task} />)}
		
			<h5>Approved Requests</h5>
			{approvedTasks.map(task => <AdminCard key={task.id} task={task}/>)}
			<h5>Denied Requests</h5>
			{deniedTasks.map(task => <AdminCard key={task.id} task={task}/>)}
		</ul>
		</>
	)
}