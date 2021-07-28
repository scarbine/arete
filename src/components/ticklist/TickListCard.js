import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Ticks.css";

export const TickListCard = ({ tick }) => {
  const { climberId } = useParams();
  const history = useHistory();

  console.log();

  const handleOnClick = () => {
    history.push(`/climbers/detail/${tick.climber.id}`);
  };

  const handleTickClick = () => {
	  history.push(`/routes/detail/${tick.route.id}`)
  }

  return (
    <>
      {climberId ? (
        <div className="tick_list_details">
		<button className="btn" onClick={handleTickClick}>
          <h4>{tick.route.routeName}</h4>
	  </button>
          <h5>{tick.dateCompleted}</h5>
        </div>
      ) : (
        <div className="tick_list_details">
          <button className="btn" onClick={handleOnClick}>
            <h4>
              {tick.climber.firstName} {tick.climber.lastName}
            </h4>
            <h5>{tick.dateCompleted}</h5>
          </button>
        </div>
      )}
    </>
  );
};
