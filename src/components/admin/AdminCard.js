import React, { useContext } from "react";
import { RoutesContext } from "../routes/RouteProvider";
import { AdminContext } from "./AdminProvider";
import "./Admin.css"

export const AdminCard = ({ task }) => {

	const {updateAdminTask} = useContext(AdminContext)
	const {addRoute} = useContext(RoutesContext)

	const currentUser = localStorage.getItem("arete_customer")

  const handleApproveClick = () => {
    const approvedObj = {
      routeName: task.taskObj.routeName,
      firstAscensionists: task.taskObj.firstAscensionists,
      description: task.taskObj.description,
      length: parseInt(task.taskObj.length),
      type: task.taskObj.type,
      wallGradeId: task.taskObj.wallGradeId,
      cragId: task.taskObj.cragId,
      areaId: task.taskObj.areaId,
      wallId: task.taskObj.wallId,
      drawsNeeded: task.taskObj.drawsNeeded,
    };

    const approvedToggle = {
	    isApproved : true,
	    approvedBy : parseInt(currentUser),
	    dateApproved : Date.now()
    }
    const id = task.id
    addRoute(approvedObj).then(updateAdminTask(id, approvedToggle))
    
    
  };
  const handleDenyClick = () => {
	  const denyToggle = {
		  dateDenied : Date.now(),
		  deniedBy : parseInt(currentUser)
	  }
	  const id = task.id
	  updateAdminTask(id, denyToggle)
  };

  return (
    <>
    <section className="pending">
      <div>{task?.id}</div>
      <div>
        Task Approved status:
        {task?.isApproved ? <div>Approved</div> : <div>Not Approved</div>}
      </div>
      <div>
        Submitted by: {task?.climber.firstName} {task.climber.lastName}{" "}
      </div>
      <div>Task Code: {task?.taskCode} </div>
      <div>Task Changes: </div>
      <div>Route Name: {task?.taskObj.routeName}</div>
      <div>First Ascensionists : {task?.taskObj.firstAscensionists}</div>
      <div>Description : {task?.taskObj.description}</div>
      <div>Route Length : {task?.taskObj.length}</div>
      <div>Bolts : {task?.taskObj.drawsNeeded}</div>
      <div>Route Type : {task?.taskObj.type}</div>
      <div>Wall Grade Id :{task?.taskObj.wallGradeId} </div>
      <div>Area Id :{task?.taskObj.areaId} </div>
      <div>Crag Id :{task?.taskObj.cragId} </div>
	{ task?.isApproved ? <></> :<>
      <div className="btn" onClick={handleApproveClick}>
        Approve
      </div>
      <div className="btn" onClick={handleDenyClick}>
        Deny
      </div>
      </>
}
      </section>
  
    </>
  );
};
