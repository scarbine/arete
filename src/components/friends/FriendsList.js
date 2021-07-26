import React, {useContext, useEffect} from "react"
import {FriendCard} from './FriendCard'
import { FriendsProvider } from "./FriendsProvider"



export const FriendsList = () => {

	const {friends , getFriends } = useContext(FriendsProvider)

	useEffect(() => {
		getFriends()
	}, [])

	return(
		<>
			<h1>Friends List</h1>
			<div className="friends">
			{friends.map(friend => {
				return <FriendCard key={friend.id} friend={friend} />
			})}
			</div>
		</>
	)
}