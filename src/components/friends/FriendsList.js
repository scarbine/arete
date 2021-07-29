import React, {useContext, useEffect} from "react"
import {FriendCard} from './FriendCard'
import { FriendsContext} from "./FriendsProvider"
import { useParams, useHistory } from "react-router"



export const FriendsList = () => {

	const {friends , getFriends } = useContext(FriendsContext)

	const climberIdAsString = useParams()
	const climberId = parseInt(climberIdAsString.climberId)
	const foundFriends = friends.filter(friend => friend.userId === climberId)
	// const history = useHistory()


	useEffect(() => {
		getFriends()
		// .then(console.log("useEffect,getFriends", friends, foundFriends, climberId))
	}, [])

	return(
		<>
			<h1 className="friends_list_header">Friends</h1>
			<div className="friends">
			{foundFriends?.map(friend => {
				return <FriendCard key={friend.id} friend={friend} />
			})}
			</div>
		</>
	)
}