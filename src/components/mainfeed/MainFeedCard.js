import React, { useContext, useEffect, useState } from "react";
import { GradesContext } from "../grades/GradesProvider";

import "./MainFeed.css";
import { MainFeedContext } from "./MainFeedProvider";

export const MainFeedCard = ({ feedEvent }) => {
  const date = new Date(feedEvent.datePosted);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const { wallGrades, getWallGrades } = useContext(GradesContext);
  const { mainFeed } = useContext(MainFeedContext);

  const [foundGrade, setFoundGrade] = useState({});

  useEffect(() => {
    getWallGrades(feedEvent.feedObj.wallGradeId);
    const found = wallGrades.find(
      (grade) => grade.id === feedEvent.feedObj.wallGradeId
    );
    console.log(found);
    setFoundGrade(found);
  }, [mainFeed, foundGrade]);

  return (
    <>
      {feedEvent.postType === 201 ? (
        <div className="main_feed_card">
          <div className="main_box_feed">
            <div className="main_box_header">
              <div className="title">
                {" "}
                {feedEvent.climber.firstName} {feedEvent.climber.lastName} has
                added a new route!
              </div>
              <div>
                {month}-{day}-{year}
              </div>
            </div>
            <div className="card_container">
              <div className="graphics">
		      <div className="detail_container">
                <h5 className="feed_detail_top">{feedEvent?.feedObj.routeName} {foundGrade?.grade}</h5>
                <div className="feed_detail">First Ascensionists: </div>
		<div className="feed_detail"> {feedEvent?.feedObj.firstAscensionists}</div>
                <div className="feed_detail">Route Length: {parseInt(feedEvent.feedObj.length)} ft</div>
                <div className="feed_detail"> Route Type: {feedEvent?.feedObj.type}</div>
                <div className="feed_detail">Bolts: {feedEvent?.feedObj.drawsNeeded}</div>
                <div className="feed_detail">{feedEvent?.feedObj.cragId}</div>
                <div className="feed_detail">{feedEvent?.feedObj.areaId}</div>
                <div className="feed_detail">{feedEvent?.feedObj.wallId}</div>
		</div>
              </div>
            </div>
          </div>
          <div className="card_banner">
            <div className="description">{feedEvent?.feedObj.description}</div>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};
