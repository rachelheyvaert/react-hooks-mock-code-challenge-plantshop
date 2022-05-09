import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plantList, setPlantList] = useState([])

useEffect(()=> {
fetch('http://localhost:6001/plants')
.then((r)=> r.json())
.then((plants)=> setPlantList(plants))
}, [])

const currentPlants = plantList.map((plantObj)=>{
 return <PlantCard plantList={plantObj} key={plantObj.id} />
})


 return (
    <ul className="cards">{currentPlants}</ul>
  );
}

export default PlantList;
