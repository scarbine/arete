import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./Ticks.css";

export const TickListCard = ({ tick }) => {
  const { climberId } = useParams();
  const history = useHistory();

  console.log();

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
  console.log(year, month, day);

  return (
    <>
      {climberId ? (
        <div className="tick_list_details">
          <button className=" btn tick" onClick={handleTickClick}>
            <h4 className="tick_detail">{tick.route.routeName}</h4>
          </button>
            <h5 className="tick_detail">{`${month}/${day}/${year}`}</h5>
        </div>
      ) : (
        <div className="tick_list_details">
          <div className="tick" onClick={handleOnClick}>
            <h4 className="tick_detail">
              {tick.climber.firstName} {tick.climber.lastName}
            </h4>
            <h5 className="tick_detail">{`${month}/${day}/${year}`}</h5>
          </div>
        </div>
      )}
    </>
  );
};
