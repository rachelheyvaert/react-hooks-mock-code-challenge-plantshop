import React, {useState} from "react";

function PlantCard({ plantList }) {
  const [inStock, setIsInStock] = useState(true)
  const { name, image, price} = plantList;
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={()=> setIsInStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=> setIsInStock(true)}>Out of Stock</button>
      )}
    </li>
  )}

export default PlantCard;
