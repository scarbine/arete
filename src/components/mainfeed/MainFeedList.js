import React, { useContext, useState, useEffect } from "react";
import { FriendsContext } from "../friends/FriendsProvider";
import { MainFeedCard } from "./MainFeedCard";
import { MainFeedContext } from "./MainFeedProvider";

export const MainFeedList = () => {
  const { mainFeed, getMainFeed } = useContext(MainFeedContext);
  const { friends, getFriends } = useContext(FriendsContext);
  const currentUser = localStorage.getItem("arete_customer");

  const [filteredFriends, setFilteredFriends] = useState([]);
  const [filteredFeed, setFilteredFeed] = useState([]);

  useEffect(() => {
    getMainFeed().then(getFriends());
  }, []);

  useEffect(() => {
    console.log(mainFeed, friends, filteredFriends);
  }, [mainFeed, friends, filteredFriends]);

  useEffect(() => {
    const filtered = friends.filter(
      (friend) => friend.climberId === parseInt(currentUser)
    );
    const sorted = filtered.sort((a, b) => b.id - a.id);
    setFilteredFriends(sorted);
  }, [friends, mainFeed]);

  useEffect(() => {
    const sorted = mainFeed.sort((a, b) => b.id - a.id);
    setFilteredFeed(sorted);
  }, [mainFeed]);

  return (
    <>
    <div className="main_feed">
      <section className="main_feed_wrapper">
        {filteredFeed.map((feedEvent) => (
          <MainFeedCard key={feedEvent.id} feedEvent={feedEvent} />
        ))}
      </section>
      </div>
    </>
  );
};
