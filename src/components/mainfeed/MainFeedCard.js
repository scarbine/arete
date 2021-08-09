import React from "react";
import "./MainFeed.css";

export const MainFeedCard = ({ feedEvent }) => {
  const date = new Date(feedEvent.datePosted);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <>
      <div className="main_feed_card">
        <div className="main_box_feed">
          <div className="title">This is the main feature of the card</div>
          <div className="card_container">
            <div className="graphics">Put Graphics Here</div>
          </div>
        </div>
        <div className="card_banner">
          <div className="card_name_date">
            <div>
              {feedEvent.climber.firstName}
              {feedEvent.climber.lastName}
            </div>
            <div>
              {month}-{day}-{year}
            </div>
          </div>
          <div>
            <div className="description">description</div>
          </div>
        </div>
      </div>
    </>
  );
};
