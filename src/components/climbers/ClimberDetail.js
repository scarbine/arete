import React, { useContext, useEffect, useState } from "react";
import { ClimberContext } from "./ClimberProvider";
import { useParams } from "react-router-dom";
import { FriendsList } from "../friends/FriendsList";
import { ClimberGearList } from "../climbergear/ClimberGearList";
import { TickList } from "../ticklist/TickList";
import { ToDoList } from "../todo/ToDoList";
import { FriendsContext } from "../friends/FriendsProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"



export const ClimberDetail = () => {
  const { climber, getClimberById } = useContext(ClimberContext);
  const { friends, getFriends, addFriend, removeFriend } = useContext(FriendsContext);
  const MySwal = withReactContent(Swal)
  


  const [filteredFriends, setFilteredFriends] = useState([]);
  const [found, setFound] = useState([]);

  const climberIdAsString = useParams();
  const climberId = parseInt(climberIdAsString.climberId);

  const currentUser = parseInt(localStorage.getItem("arete_customer"));

  
  useEffect(() => {
    getClimberById(climberId)
  }, []);
  
  useEffect(()=>{
    getFriends()
    .then(()=>{
      const filtered = friends.filter(friend => friend.userId === currentUser)
      setFilteredFriends(filtered)})
    
 
    
  },[climber])
  
  useEffect(()=>{
    
    const foundFriend = filteredFriends.find(friend => friend.climberId === climberId)
    setFound(foundFriend)
    // console.log(found)
   
    
 },[climber])

  const fullName = `${climber.firstName} ${climber.lastName}`;

  const handleAddFriend = () =>{
          addFriend({
            climberId:climberId,
            userId:currentUser
          }).then(MySwal.fire({
            title: 'Are you sure?',
            text: `You want to add ${fullName} as a freind.`,
           
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Add them!'
            
          }).then(() => {
            return MySwal.fire({
              icon: 'success',
              text: `You are now friends with ${fullName}`
            })
          }))
  }

  const handleRemoveFriend = () =>{
        removeFriend(found.id).then(
        MySwal.fire({
          
            title: 'Are you sure?',
            text: `You will no longer be friends with ${fullName}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
     
        }).then(() => {
          return MySwal.fire(<p>You are no longer friends with {fullName}</p>)
        }))
       
        
        
  }




  const friendButton = ()=> { if (found){
   return <button className="btn" onClick={handleRemoveFriend}>Remove Friend</button>
   } else if(climber.id === currentUser) {
     return(<></>)}
     else if (!found){
      return (<button className="btn" onClick={handleAddFriend}>Add Friend</button>)
   }}

  return (
    <>
      <div className="climber_header">
        <h3 >{fullName}</h3>
      </div>
      <article className="climber_detail_page">
        <section className="climber">
          <div className="climber_badge">
            {/* <img className="climber_img" alt={fullName} src={climber.profile_pic} /> */}
            <h3 className="climber_name">{climber.userName}</h3>
        {/* { found ? (
          <button className="btn" onClick={handleRemoveFriend}>Remove Friend</button>
          ) : (
            <button className="btn" onClick={handleAddFriend}>Add Friend</button>
        )} */}
        {/* {friendButton()} */}
        
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
            <ToDoList climber={true}/>
          {/* </div> */}
          </div>
          <div></div>
        </section>
        <div className="climber_lists">
          <ClimberGearList />
          <FriendsList  />
        </div>
      </article>
    </>
  );
};
