import React, { useState, createContext } from "react";

export const RoutesContext = createContext();

export const RouteProvider = (props) => {
  const [routes, setRoutes] = useState([]);

  const getRoutes = () => {
    return fetch(
      "http://localhost:8088/routes?_expand=crag&_expand=area&_expand=wall"
    )
      .then((res) => res.json())
      .then(setRoutes);
  };

  return (
    <RoutesContext.Provider value={{ routes, getRoutes }}>
      {props.children}
    </RoutesContext.Provider>
  );
};
