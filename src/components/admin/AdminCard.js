import React, { useContext } from "react";
import { RoutesContext } from "../routes/RouteProvider";
import { AdminContext } from "./AdminProvider";
import "./Admin.css";

export const AdminCard = ({ task }) => {
  const { updateAdminTask } = useContext(AdminContext);
  const { addRoute } = useContext(RoutesContext);

  const currentUser = localStorage.getItem("arete_customer");

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
      isApproved: true,
      isDenied: false,
      approvedBy: parseInt(currentUser),
      dateApproved: Date.now(),
    };
    const id = task.id;
    addRoute(approvedObj).then(updateAdminTask(id, approvedToggle));
  };
  const handleDenyClick = () => {
    const denyToggle = {
      dateDenied: Date.now(),
      deniedBy: parseInt(currentUser),
      isDenied: true,
    };
    const id = task.id;
    updateAdminTask(id, denyToggle);
  };

  return (
    <>
      <li className="pending">
        <div>
          <div className="request_info">
            <section className="request_info_header">
              {/* <div>{task?.id}</div> */}
              <div>
                Task Approved status:
                {(task?.isApproved || task?.isDenied) ? (
                  <div>Approved</div>
                ) : (
                  <div>Not Approved</div>
                )}
              </div>
              <div>Submitted by: </div>
              <div>
                {task?.climber.firstName} {task.climber.lastName}{" "}
              </div>
              <div>Task Code: {task?.taskCode} </div>
            <section className="buttons">
              {task?.isApproved ? (
                <></>
              ) : (
                <>
                  <div className="click" onClick={handleApproveClick}>
                    <strong>Approve</strong>
                  </div>
                  <div className="click" onClick={handleDenyClick}>
                    <strong>Deny</strong>
                  </div>
                </>
              )}
            </section>
            </section>
            <section className="obj_details">
              <div>Route Name: {task?.taskObj.routeName}</div>
              <div>
                First Ascensionists : {task?.taskObj.firstAscensionists}
              </div>
              <div>Description : {task?.taskObj.description}</div>
              <div>Route Length : {task?.taskObj.length}</div>
              <div>Bolts : {task?.taskObj.drawsNeeded}</div>
              <div>Route Type : {task?.taskObj.type}</div>
              <div>Wall Grade Id :{task?.taskObj.wallGradeId} </div>
              <div>Area Id :{task?.taskObj.areaId} </div>
              <div>Crag Id :{task?.taskObj.cragId} </div>
            </section>
          </div>
        </div>
      </li>
    </>
  );
};
