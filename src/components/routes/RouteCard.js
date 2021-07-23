import React, { useContext } from "react";
import { TickListContext } from "../ticklist/TickListProvider";
import { ToDoListContext } from "../todo/ToDoProvider";
// import { useHistory } from "react-router";
import "./Routes.css";

export const RouteCard = ({ route }) => {
  const { addTick } = useContext(TickListContext);
  const { addTodo } = useContext(ToDoListContext);
  // const history = useHistory()
  const currentUser = parseInt(localStorage.getItem("arete_customer"));

  const handleAddTick = () => {
    // history.push("/ticks/add")
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
  return (
    <>
      <section className="route">
        <div>
          <h2 className="route_detail">
            {route.routeName} {route.routeGrade}
          </h2>
          <div className="route_detail"> {route.area.name}</div>
        </div>
        <div className="route_detail">{route.wall.name}</div>
        <div className="route_detail">{route.crag.name}</div>
        <div className="route_buttons">
          <button onClick={handleAddTick} className="button">
            Add Tick
          </button>
          <button onClick={handleAddToDo} className="button">
            To-Do
          </button>
        </div>
      </section>
    </>
  );
};
