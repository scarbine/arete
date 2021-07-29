import React, { useState, createContext } from "react";

export const RoutesContext = createContext();

export const RouteProvider = (props) => {
  const [routes, setRoutes] = useState([]);
  const [route, setRoute] = useState({
    wall:{},
    area:{},
    crag:{},
    wallGrade:{}
  })

  const [ searchTerms, setSearchTerms] = useState("")

  const getRoutes = () => {
    return fetch(
      "http://localhost:8088/routes?_expand=crag&_expand=area&_expand=wall&_expand=wallGrade"
    )
      .then((res) => res.json())
      .then(setRoutes);
  };

  const updateRoute = (route) => {
    return fetch("http://localhost:8088/routes",
     {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(route),
    }).then(getRoutes);
  }

  const addRoute = (routeObj) => {
    return fetch("http://localhost:8088/routes",{
			method: "POST",
			headers: {
			    "Content-Type": "application/json"
			},
			body: JSON.stringify(routeObj)
		    })
		    .then(getRoutes)
  }

  const getRouteById = (id) => {
    return fetch (`http://localhost:8088/routes/${id}?_expand=crag&_expand=area&_expand=wall`)
    .then((res)=>res.json())
    .then(setRoute)
    .then(console.log("RoutesProvider: route:", route))
  }

  return (
    <RoutesContext.Provider value={{ route, routes, addRoute, getRoutes, updateRoute, getRouteById, searchTerms, setSearchTerms }}>
      {props.children}
    </RoutesContext.Provider>
  );
};
