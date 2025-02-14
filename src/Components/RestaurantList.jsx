import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import restaurantData from '../../Restaurants';


const RestaurantList = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const restaurants = restaurantData[category] || [];


    return(
        <div>
            <div >
            {restaurants.map((restaurant) => (
                    <div 
                    key={restaurant.id}
                    >
                        <h3>{restaurant.name}</h3>
                    </div>
                ))}
        </div>
        </div>
    )
};

export default RestaurantList;