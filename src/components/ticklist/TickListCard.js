import React, { useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { TickListContext } from "./TickListProvider";
import "./Ticks.css";

export const TickListCard = ({ tick }) => {
  const { climberId } = useParams();
  const history = useHistory();

  const { deleteTick } = useContext(TickListContext);

  const handleOnClick = () => {
    history.push(`/climbers/detail/${tick.climber.id}`);
  };

  const handleTickClick = () => {
    history.push(`/routes/detail/${tick.route.id}`);
  };

  const date = new Date(tick.dateCompleted);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // console.log(year, month, day);

  const handleDeleteTick = () => {
    deleteTick(tick.id);
  };

  return (
    <>
      {climberId ? (
        <div className="tick_list_details">
          <button className=" btn tick" onClick={handleTickClick}>
            <div className="tick_detail">{tick.route.routeName}</div>
          </button>
          {/* <div className="tick_detail">{`${month}/${day}/${year}`}</div> */}
          {/* <button className="remove_tick_btn btn" onClick={handleDeleteTick}>
            Remove
          </button> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg todo_remove_btn"
            viewBox="0 0 16 16"
            onClick={handleDeleteTick}
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg> */}
        </div>
      ) : (
        <div className="tick_list_details">
          <div className="tick btn" onClick={handleOnClick}>
            <div className="tick_detail">
              {tick.climber.firstName} {tick.climber.lastName}
            </div>
            {/* <div className="tick_detail">{`${month}/${day}/${year}`}</div> */}
          </div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg todo_remove_btn"
            viewBox="0 0 16 16"
            onClick={handleDeleteTick}
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg> */}
     

        </div>
      )}
    </>
  );
};
