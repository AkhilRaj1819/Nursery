import React from "react";

const Card = ({plant})=>{
    const handleAddToCart = () => {
        addToCart(plant);
    };
    return(
        <div>
            <img src={plant.original_url} alt=""/>
            <h5>{plant.title}</h5>
            <button onClick={handleAddToCart}>CART</button>
        </div>
    )
}

export default Card;