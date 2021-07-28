import React, { useContext, useEffect,useState } from "react";
import { WallContext } from "./WallProvider";
import { WallCard } from "./WallCard";
import { WallSearch } from "./WallSearch";
import "./Walls.css";
import { useHistory } from "react-router";

export const WallList = () => {
  const { walls, getWalls, searchTerms } = useContext(WallContext);

  const [filteredWalls, setFilteredWalls] = useState([])

  const history = useHistory();

  useEffect(() => {
    getWalls();
  }, []);

  useEffect(()=>{
    if(searchTerms !== ""){
      const subset = walls.filter(wall => wall.name.toLowerCase().includes(searchTerms))
      setFilteredWalls(subset) 
    }else{
      const sortedWalls = walls.sort((a,b) => (a.name - b.name))
      console.log("sorted Walls" ,sortedWalls)
      setFilteredWalls(sortedWalls)
    }

  },[searchTerms, walls])

  const handleOnClick = () =>{
    history.push("/walls/create")
  }

  return (
    <>
    <article className="wall_list">
      <h3>Walls</h3>
      <div className="wall_button_search_wrapper">
      <WallSearch />
      </div>
      <button className="btn" onClick={handleOnClick}>Add New Wall</button>
      <section className="wall_wrapper">
        {
        filteredWalls.map((wall) => {
          return <WallCard key={wall.id} wall={wall} />;
        })}
      </section>
      </article>
    </>
  );
};
