import React, { useContext, useEffect, useState } from "react";
import { ClimberContext } from "./ClimberProvider";
import { useParams } from "react-router-dom";
import { FriendsList } from "../friends/FriendsList";
import { ClimberGearList } from "../climbergear/ClimberGearList";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";
import { FriendsContext } from "../friends/FriendsProvider";
import { set } from "lodash";

export const ClimberDetail = () => {
  const { climber, getClimberById } = useContext(ClimberContext);
  const { friends, getFriends, addFriend} = useContext(FriendsContext)

  const [filteredFriends, setFilteredFriends] = useState([])
  const [found, setFound] = useState([])

  const climberIdAsString = useParams();
  const climberId = parseInt(climberIdAsString.climberId);

  const currentUser = parseInt(localStorage.getItem("arete_customer"))

  
  
  useEffect(() => {
    getClimberById(climberId)
    // .then(getFriends)
    .then(console.log("useEffect", friends, climber))
    
  }, []);

  useEffect(()=>{
    getFriends()
    const filtered = friends.filter(friend => friend.climberId === climberId)
    setFilteredFriends(filtered)
    const found = filteredFriends.find(friend => friend.userId === currentUser)
    setFound(found)
    console.log("filteredFriends" , filteredFriends, currentUser, climberId, friends, found)
  },[])



  const fullName = `${climber.firstName} ${climber.lastName}`;

  const handleAddFriend = () => {
    const newFriend = {
      userId:currentUser,
      climberId:climberId
    }
    addFriend(newFriend)
    .then(window.alert("Your Friend has been added"))
  }

  return (
    <>
    <article className="climber_detail_page">
      <section className="climber">
        <div className="climber_badge">
          <img className="climber_img" alt={fullName} src={climber.profile_pic} />
          <h3 className="climber_name">{climber.userName}</h3>
          {(currentUser === climberId || found ? (<button>Remove Friend</button>):(<button onClick={handleAddFriend}>Add Friend</button>))}
        </div>
        <div className="climber_details">
          <div className="climber_email">Email: {climber.email}</div>
          <div className="climber_email">
            Name {climber.firstName} {climber.lastName}
          </div>
          <div className="climber_detail">
            Onsight Grade: {climber.onSightGradeSport}
          </div>
          <div className="climber_detail">
            Top Grade: {climber.topGradeSport}
          </div>
          <div className="climber_detail">
            Onsight Grade Boulder: {climber.onSightBoulder}
          </div>
          <div className="climber_detail">
            Top Grade Boulder: {climber.topGradeBoulder}
          </div>
        </div>
        <div>
        </div>
      </section>
      <div className="climber_lists">
        <ClimberGearList />
        <FriendsList />
        <div className="ticks_and_todos">
        <TickList />
        <ToDoList />
        </div>
      </div>
      </article>
    </>
  );
};
