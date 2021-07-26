import React, {useState, useContext, useEffect} from "react";
import "./Routes.css";
import { useParams } from "react-router";
import { RoutesContext } from "./RouteProvider";
import { TickListContext } from "../ticklist/TickListProvider";
import { ToDoListContext, ToDoListProvider } from "../todo/ToDoProvider";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";

export const RouteDetail= () => {

const {route, getRouteById} = useContext(RoutesContext)
const {addTick} = useContext(TickListContext)
const {addTodo} = useContext(ToDoListContext)

const currentUser = parseInt(localStorage.getItem("arete_customer"))

// const [route, setRoute] = useState()

const routeIdAsString = useParams()
const routeId = parseInt(routeIdAsString.routeId)



useEffect(() => {
  getRouteById(routeId)
  // DONT TAKE OUT THIS CONSOLE LOG - IT IS SLOWING DOWN THE RENDER SO NESTED OBJ IN ROUTE CAN POPULATE
  .then(console.log(route, "routeId", routeId))
}, [])

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


  return (
    <>
      <section className="route">
        <h3 className="route_detail">
          {route.routeName} {route.routeGrade}
        </h3>
        <div className="route_detail">{route.description}</div>
        <div className="route_detail">FA: {route.firstAscensionists}</div>
        <div className="route_detail">{route?.wall.name}</div>
        <div className="route_detail"> {route?.area.name}</div>
        <div className="route_detail">{route?.crag.name}</div>
       
        <button onClick={handleAddTick}>Tick</button>
        <button onClick={handleAddToDo}>To-Do</button>
      </section>

      {/* <TickList />
      <ToDoList /> */}
    </>
  );
};
