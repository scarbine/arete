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
      setFilteredWalls(walls)
    }

  },[searchTerms, walls])

  const handleOnClick = () =>{
    history.push("/walls/create")
  }

  return (
    <>
      <button onClick={handleOnClick}>Add New Wall</button>
      <WallSearch />
      <section className="wall_list">
        {filteredWalls.map((wall) => {
          return <WallCard key={wall.id} wall={wall} />;
        })}
      </section>
    </>
  );
};
