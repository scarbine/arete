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
	const [viewToggle, setViewToggle] = useState(1)


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

	const handlePendingView = () => {
		setViewToggle(1)
		
	}
	const handleApprovedView = () => {
		setViewToggle(2)
	}
	const handleDeniedView = () => {
		setViewToggle(3)
	}

	const adminView = () =>{ if (viewToggle === 1){
		return(<>
			{filteredTasks.length === 0 ? <><div>There are no Pending Tasks</div></> : filteredTasks.map(task => <AdminCard key={task.id} task={task} />)}
			</>)

	} else if (viewToggle === 2){
		return(
			<>
			{approvedTasks.length === 0 ? <><div>There are no Approved Tasks</div></> : approvedTasks.map(task => <AdminCard key={task.id} task={task}/>)}
			</>
		)

	} else {
		return(
			<>
			{deniedTasks.length === 0 ? <><div>There are no Denied Tasks</div></> :deniedTasks.map(task => <AdminCard key={task.id} task={task}/>)}
			</>
		)

	}}

	return(
		<>
		<section className="admin_header">
			<h3>Admin List</h3>
			<div className="btn" onClick={handlePendingView}>Pending</div>
			<div className="btn" onClick={handleApprovedView}>Approved </div>
			<div className="btn" onClick={handleDeniedView}>Denied </div>
			</section>
		<ul className="admin_list" >
			{adminView()}
		</ul>
		</>
	)
}