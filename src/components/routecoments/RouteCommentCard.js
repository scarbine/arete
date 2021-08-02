import React from "react";
import "./RouteComments.css"

export const RouteCommentsCard = ({ routeComment }) => {
  const date = new Date(routeComment.dateAdded);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <>
      <article className="comment_card ">
        <section className="comment_badge">
          <div>
            {routeComment.climber.firstName} {routeComment.climber.lastName}
          </div>
        </section >
        <div className="route_comment_text">{routeComment.comment}</div>
          <div>
            {month}/{day}/{year}
          </div>
      </article>
    </>
  );
};
