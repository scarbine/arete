import React, { useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { TickListContext } from "./TickListProvider";
import "./Ticks.css";

export const TickListCard = ({ tick }) => {
  const { climberId } = useParams();
  const history = useHistory();

  const {deleteTick} = useContext(TickListContext)

 

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

  const handleDeleteTick = () =>{
	deleteTick(tick.id)
  }
  

  return (
    <>
      {climberId ? (
        <div className="tick_list_details">
          <button className=" btn tick" onClick={handleTickClick}>
            <h5 className="tick_detail">{tick.route.routeName}</h5>
          </button>
            <h5 className="tick_detail">{`${month}/${day}/${year}`}</h5>
	    <button className="remove_tick_btn btn" onClick={handleDeleteTick}>Remove</button>
        </div>
      ) : (
        <div className="tick_list_details">
          <div className="tick" onClick={handleOnClick}>
            <h5 className="tick_detail">
              {tick.climber.firstName} {tick.climber.lastName}
            </h5>
            <h5 className="tick_detail">{`${month}/${day}/${year}`}</h5>
	    <button className="remove_tick_btn btn" onClick={handleDeleteTick}>Remove</button>
          </div>
        </div>
      )}
    </>
  );
};
