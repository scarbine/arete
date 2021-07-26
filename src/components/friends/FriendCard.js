import React, { useContext, useState } from "react";
import "./Friends.css";
import { useHistory } from "react-router";
import { ClimberContext } from "../climbers/ClimberProvider";

export const FriendCard = ({ friend }) => {
  const history = useHistory();

  const fullName = `${friend.climber.firstName} ${friend.climber.lastName}`;

  const { getClimberById} = useContext(ClimberContext)

  const handleOnClick = (event) => {
    const id = parseInt(event.target.id);
    getClimberById(id)
    history.push(`/climbers/detail/${id}`);
  };
  return (
    <>
      <button
        key={friend.climber.id}
        id={friend.climber.id}
        className="card friend_card"
        onClick={handleOnClick}
      >
        <img
          id={friend.climber.id}
          className="friend_img"
          alt={fullName}
          src={friend.climber.profile_pic}
        />
        <div>{fullName}</div>
      </button>
    </>
  );
};
