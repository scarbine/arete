import React, { useState, createContext } from "react";

export const AdminContext = createContext();

export const AdminProvider = (props) => {

  const [adminTasks, setAdminTasks] = useState([]);

  const getAdminTasks = () => {
    return fetch("http://localhost:8088/adminTasks?_expand=climber")
      .then((res) => res.json())
      .then(setAdminTasks);
  };

  const updateAdminTask = (id,task) => {
	return fetch(`http://localhost:8088/adminTasks/${id}`,
	 {
	  method: "PATCH",
	  headers: {
	    "Content-Type": "application/json",
	  },
	  body: JSON.stringify(task),
	}).then(getAdminTasks);
      }

      const addAdminTask = (task) => {
	return fetch("http://localhost:8088/adminTasks",{
			    method: "POST",
			    headers: {
				"Content-Type": "application/json"
			    },
			    body: JSON.stringify(task)
			})
			.then(getAdminTasks)
      }


  return (
    <>
      <AdminContext.Provider
        value={{ adminTasks, setAdminTasks, getAdminTasks, updateAdminTask, addAdminTask }}
      >
        {props.children}
      </AdminContext.Provider>
    </>
  );
};
