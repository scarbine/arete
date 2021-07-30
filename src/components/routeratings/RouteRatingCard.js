import React from "react";
import "./routeRating.css";

export const RouteRatingCard = ({ rating }) => {
  return (
    <>
      <div>
        <h5>Route Rating</h5>
        <div>Rating: {rating.rating}</div>
      </div>
    </>
  );
};
