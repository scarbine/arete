import React, { useContext, useEffect, useState } from "react";
import { ClimberContext } from "./ClimberProvider";
import { useParams } from "react-router-dom";
import { FriendsList } from "../friends/FriendsList";
import { ClimberGearList } from "../climbergear/ClimberGearList";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";
import { FriendsContext } from "../friends/FriendsProvider";
import { ClimberPics } from "./ClimberPics";
import Swal from "sweetalert2";


export const ClimberDetail = () => {
  const { climber, getClimberById } = useContext(ClimberContext);
  const { friends, getFriends, addFriend, removeFriend } =
    useContext(FriendsContext);
 

  const [filteredFriends, setFilteredFriends] = useState([]);
  const [found, setFound] = useState(null);

  const climberIdAsString = useParams();
  const climberId = parseInt(climberIdAsString.climberId);

  const currentUser = parseInt(localStorage.getItem("arete_customer"));

  const [ isFriend, setIsFriend] = useState(false)

  useEffect(() => {
    getClimberById(climberId);
  }, []);

  useEffect(() => {
    getFriends().then(() => {
      const filtered = friends.filter(
        (friend) => friend.userId === currentUser
      );
      setFilteredFriends(filtered);
    });
  }, [climber]);

  useEffect(() => {
    const foundFriend = filteredFriends.find(
      (friend) => friend.climberId === climberId
    );
    setFound(foundFriend);
    
  
  }, [filteredFriends]);

  useEffect(()=>{

    if(found){
      setIsFriend(true)
    }
  },[found])

  const fullName = `${climber.firstName} ${climber.lastName}`;

  const handleAddFriend = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to add ${fullName} as a friend.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add them!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsFriend(true)
        console.log("toggle",isFriend)
        addFriend({
          climberId: climberId,
          userId: currentUser,
        }).then((newFriend) => {
          setFound(newFriend)
          Swal.fire(
            "Added!",
            `${fullName} has been added to your friends!`,
            "success"
          );
        });
      }
    });
  };

  const handleRemoveFriend = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${fullName} from your friends.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove them!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsFriend(false)
       
        removeFriend(found.id).then(() => {
          Swal.fire(
            "Removed!",
            `${fullName} has been removed from your friends!`,
            "success"
          );
        });
      }
    });
  };

  const friendButton = () => {
    if (isFriend) {
      return (
        <button className="btn" onClick={handleRemoveFriend}>
          Remove Friend
        </button>
      );
    } else if (climber.id === currentUser) {
      return <></>;
    } else if (!isFriend) {
      return (
        <button className="btn" onClick={handleAddFriend}>
          Add Friend
        </button>
      );
    }
  };

  return (
    <>
      <div className="climber_header">
        <h3>{fullName}</h3>
      </div>
      <article className="climber_detail_page">
        <section className="climber">
          <div className="climber_badge">
            {/* <img className="climber_img" alt={fullName} src={climber.profile_pic} /> */}
            <h3 className="climber_name">{climber.userName}</h3>
       
            {friendButton()}
          </div>
          <div className="climber_details">
            <div className="climber_detail">Email: {climber.email}</div>
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
            {/* <div className="ticks_and_todos"> */}
            <TickList climber={true} />
            <ToDoList climber={true} />
            {/* </div> */}
          </div>
          <div></div>
        </section>
        <div className="climber_lists">
          <ClimberPics />
          <ClimberGearList />
          <FriendsList />

        </div>
      </article>
    </>
  );
};
