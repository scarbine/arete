import React, { useContext } from "react";
import { RoutesContext } from "./RouteProvider";
import { TickListContext } from "../ticklist/TickListProvider";
import { ToDoListContext } from "../todo/ToDoProvider";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import "./Routes.css";

export const RouteCard = ({ route }) => {
  const { addTick } = useContext(TickListContext);
  const { addTodo } = useContext(ToDoListContext);
  const {getRouteById} = useContext(RoutesContext)
  const history = useHistory()
  const currentUser = parseInt(localStorage.getItem("arete_customer"));

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
    // addTick(newTick).then(window.alert("Your Tick has been added"));
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
    // addTodo(newToDo).then(window.alert("Your ToDo has been added"));
  };

const handleOnClick = () => {
  console.log("onClick route id",route.id)
  getRouteById(route.id)
  .then(history.push(`/routes/detail/${route.id}`))
}

const handleEditRoute = () => {
  history.push("/routes/create")
}

  return (
    <>
          <div className="route">
        <button className="btn route_btn" onClick={handleOnClick}>
          <h2 className="route_detail">
            {route.routeName} {route.wallGrade.grade}
          </h2>
          <div className="route_detail"> {route.area.name}</div>
        </button>
        <div className="route_detail">{route.wall.name}</div>
        <div className="route_detail">{route.crag.name}</div>
        <div className="route_detail">{route.length} ft</div>
        <div className="route_buttons">
          <button onClick={handleAddTick} className=" btn button">
            Add Tick
          </button>
          <button onClick={handleAddToDo} className=" btn button">
            To-Do
          </button>
          {/* <button onClick={handleEditRoute} className=" btn button">
            Edit
          </button> */}
          </div>
        </div>
    </>
  );
};
