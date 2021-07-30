import React from "react";
import "./routeRating.css";

export const RouteRatingCard = ({ rating }) => {
  return (
    <>
      <div>
        {/* <h5>Route Rating</h5> */}
        <div className="route_detail">Rating: {rating.rating} of 5</div>
      </div>
    </>
  );
};
