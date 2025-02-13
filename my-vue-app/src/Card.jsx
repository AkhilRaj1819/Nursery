import React from "react";

const Card = ({plant})=>{
    return(
        <div>
            <img src={plant.original_url} alt=""/>
            <h5>{plant.title}</h5>
        </div>
    )
}

export default Card;