import React, { useContext } from "react";
import { ToDoListContext } from "./ToDoProvider";
import "./ToDo.css";
import { useHistory } from "react-router-dom";
import { TickListContext } from "../ticklist/TickListProvider";
import { useParams } from "react-router";
import Swal from "sweetalert2";

export const ToDoCard = ({ todo }) => {
  const { deleteToDo } = useContext(ToDoListContext);
  const { addTick } = useContext(TickListContext);
  const { climberId } = useParams();
  const history = useHistory();

  const currentUser = localStorage.getItem("arete_customer")

  const removeTodo = () => {
    deleteToDo(todo.id);
  };

  const addTickOnClick = () => {

	Swal.fire({
		title: 'Are you sure?',
		text: "You want to Tick this route!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, Tick it! Tick it real good!'
	      }).then((result) => {
		if (result.isConfirmed) {
			addTick({
				climberId: todo.climberId,
				routeId: todo.routeId,
				dateCompleted: Date.now(),
			      }).then(deleteToDo(todo.id))

		  .then(Swal.fire(
		    'Added!',
		    'Your Tick has been added.',
		    'success'
		  ))
		}
	      })

//     addTick({
//       climberId: todo.climberId,
//       routeId: todo.routeId,
//       dateCompleted: Date.now(),
//     }).then(deleteToDo(todo.id));
  };

  const fullName = `${todo.climber.firstName} ${todo.climber.lastName}`

//   const handleTodoClick = () => {
//     history.push(`/routes/detail/${todo.route.id}`);
//   };

  const handleTodoClick = () => {
	history.push(`/climbers/detail/${todo.climber.id}`);
      };
  return (
    <><div className="todo_item_wrapper">{(climberId ? (
      <div className="todo_list_details">
        <button className="btn" onClick={handleTodoClick}>
          <div>{todo.route.routeName}</div>
        </button>
	</div>):(<div className="todo_list_details">
        <button className="btn" onClick={handleTodoClick}>
          <div>{fullName}</div>
        </button>
	</div>))}
        <div className="add_remove_btn">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={removeTodo}
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg todo_remove_btn"
            viewBox="0 0 16 16"
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg> */}
	{(todo.climberId === parseInt(currentUser) ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            onClick={addTickOnClick}
            height="16"
            fill="currentColor"
            className="bi bi-check-lg todo_add_tick_btn"
            viewBox="0 0 16 16"
          >
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
          </svg>):(<></>))}
        </div>
	</div>
    </>
  );
};
