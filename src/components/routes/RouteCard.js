import React, { useContext } from "react";
import { RoutesContext } from "./RouteProvider";
import { TickListContext } from "../ticklist/TickListProvider";
import { ToDoListContext } from "../todo/ToDoProvider";
import { useHistory } from "react-router";
import "./Routes.css";

export const RouteCard = ({ route }) => {
  const { addTick } = useContext(TickListContext);
  const { addTodo } = useContext(ToDoListContext);
  const {getRouteById} = useContext(RoutesContext)
  const history = useHistory()
  const currentUser = parseInt(localStorage.getItem("arete_customer"));

  const handleAddTick = () => {
   
    const newTick = {
      climberId: currentUser,
      routeId: route.id,
      dateCompleted: Date.now(),
    };
    addTick(newTick).then(window.alert("Your Tick has been added"));
  };
  const handleAddToDo = () => {
    const newToDo = {
      climberId: currentUser,
      routeId: route.id,
    };
    addTodo(newToDo).then(window.alert("Your ToDo has been added"));
  };

const handleOnClick = () => {
  console.log("onClick route id",route.id)
  getRouteById(route.id)
  .then(history.push(`/routes/detail/${route.id}`))
}

  return (
    <>
          <div className="route">
        <button className="btn" onClick={handleOnClick}>
          <h2 className="route_detail">
            {route.routeName} {route.wallGrade.grade}
          </h2>
          <div className="route_detail"> {route.area.name}</div>
        </button>
        <div className="route_detail">{route.wall.name}</div>
        <div className="route_detail">{route.crag.name}</div>
        <div className="route_detail">{route.length} ft</div>
        <div className="route_buttons">
          <button onClick={handleAddTick} className="button">
            Add Tick
          </button>
          <button onClick={handleAddToDo} className="button">
            To-Do
          </button>
          </div>
        </div>
    </>
  );
};
