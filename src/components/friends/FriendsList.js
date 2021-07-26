import React, {useContext, useEffect} from "react"
import {FriendCard} from './FriendCard'
import { FriendsContext} from "./FriendsProvider"
import { useParams } from "react-router"



export const FriendsList = () => {

	const {friends , getFriends } = useContext(FriendsContext)

	const climberIdAsString = useParams()
	const climberId = parseInt(climberIdAsString.climberId)
	const foundFriends = friends.filter(friend => friend.userId === climberId)


	useEffect(() => {
		getFriends()
		.then(console.log("useEffect,getFriends", friends, foundFriends, climberIdAsString, climberId))
	}, [])

	return(
		<>
			<h1 className="friends_list_header">Friends List</h1>
			<div className="friends">
			{foundFriends.map(friend => {
				return <FriendCard key={friend.id} friend={friend} />
			})}
			</div>
		</>
	)
}