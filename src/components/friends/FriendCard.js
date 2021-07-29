import React, { useContext } from "react";
import "./Friends.css";
import { useHistory } from "react-router";
import { ClimberContext } from "../climbers/ClimberProvider";
// import { FriendsContext } from "./FriendsProvider";

export const FriendCard = ({ friend }) => {
  const history = useHistory();

  const fullName = `${friend.climber.firstName} ${friend.climber.lastName}`;
  // const {friends, getFriends, setFriends} =useContext(FriendsContext)
  // const [foundFriend, setFoundFriend] = useState([])
  // const currentUser = localStorage.getItem("arete_customer")

  const { getClimberById } = useContext(ClimberContext);

  const handleOnClick = (event) => {
    const id = parseInt(event.target.id);
    getClimberById(id).then(history.push(`/climbers/detail/${id}`));
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
