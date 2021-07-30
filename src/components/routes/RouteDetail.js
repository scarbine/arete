import React, { useState, useContext, useEffect } from "react";
import "./Routes.css";
import { useParams } from "react-router";
import { RoutesContext } from "./RouteProvider";
import { TickListContext } from "../ticklist/TickListProvider";
import { ToDoListContext, ToDoListProvider } from "../todo/ToDoProvider";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";
import { RouteRatingList } from "../routeratings/RouteRatingList";
import Swal from "sweetalert2/dist/sweetalert2.all";

export const RouteDetail = () => {
  const { route, getRouteById } = useContext(RoutesContext);
  const { addTick } = useContext(TickListContext);
  const { addTodo } = useContext(ToDoListContext);

  const currentUser = parseInt(localStorage.getItem("arete_customer"));

  // const [route, setRoute] = useState()

  const routeIdAsString = useParams();
  const routeId = parseInt(routeIdAsString.routeId);

  useEffect(() => {
    getRouteById(routeId);
  }, []);

  const handleAddTick = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to tick this route!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Tick it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const newTick = {
          climberId: currentUser,
          routeId: route.id,
          dateCompleted: Date.now(),
        };
        addTick(newTick).then(
        Swal.fire(
          'Ticked!',
          'Your Tick has been Added.',
          'success'
        ))
      }
    })

    // const newTick = {
    //   climberId: currentUser,
    //   routeId: route.id,
    //   dateCompleted: Date.now(),
    // };
    // addTick(newTick);
  };
  const handleAddToDo = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to add this route!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add Todo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const newToDo = {
          climberId: currentUser,
          routeId: route.id,
        };
        addTodo(newToDo)
      .then(
        Swal.fire(
          'Ticked!',
          'Your Todo has been Added.',
          'success'
        ))
      }
    }) 

    // const newToDo = {
    //   climberId: currentUser,
    //   routeId: route.id,
    // };
    // addTodo(newToDo);
    // .then(window.alert("Your ToDo has been added"));
  };

  return (
    <>
      <section className="route_info">
        <h3 className="route_header">
          {route.routeName} {route.routeGrade}
          <button className="btn" onClick={handleAddTick}>
            Tick
          </button>
          <button className="btn" onClick={handleAddToDo}>
            To-Do
          </button>
        </h3>
        <div className="route_detail_body">
          <div className="ticks_todos_container">
            <section className="routes routes_tick_list_container">
              <TickList />
            </section>
            <section className="routes routes_tick_list_container">
              <ToDoList />
            </section>
          </div>
          <section className="route_details">
            <div className="route_detail">{route.description}</div>
            <div className="route_detail">FA: {route.firstAscensionists}</div>
            <div className="route_detail">{route?.wall.name}</div>
            <div className="route_detail"> {route?.area.name}</div>
            <div className="route_detail">{route?.crag.name}</div>
            <RouteRatingList />
          </section>
        </div>
      </section>
    </>
  );
};
