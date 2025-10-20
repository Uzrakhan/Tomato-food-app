import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import restaurantData from '../../Restaurants';
import FilterComponent from "./Filter";
import NavBar from './NavBar';


const RestaurantList = ({image, name, location, cuisines, priceRange, rating}) => {
    const { category } = useParams();
    const restaurants = restaurantData[category] || []; //ensure its an array
    const [filteredRestaurants,setFilteredRestaurants] = useState(restaurants);
    const navigate = useNavigate();


    const extractPrice = (priceString) => {
        const price = priceString.match(/\d+/);
        return price ? parseInt(price[0],10) : 0;
    };

    const applyFilters = (restaurant,filters) => {
        if(filters.length === 0) return true;
        return filters.every((filter) => {
            switch (filter) {
                case 'rating_4.0': 
                    return restaurant.rating > 4.0;
                case 'open_now':
                    return restaurant.isOpen === true;
                case 'price_1200':
                    const price = extractPrice(restaurant.priceRange);
                    return price > 1200;
                case 'outdoor_seating':
                    return restaurant.outdoorSeating === true;
                case 'serves_alcohol':
                    return restaurant.servesAlcohol === true;
                case 'pubs_bars':
                    return restaurant.pubsAndBars === true;
                default:
                    return true;
            }
        })
    };

    //this function filters restaurants on basis of active filters
    const handleFilterChange = (filters) => {
       const filtered = restaurants.filter((restaurant) => applyFilters(restaurant,filters));
       setFilteredRestaurants(filtered);
    }
    
    const truncateCuisines  = (cuisines,maxCount) => {
        if(!Array.isArray(cuisines) || cuisines.length === 0) {
            return 'No cuisines available';
        }

        return cuisines.length > maxCount 
         ? `${cuisines.slice(0,maxCount).join(', ')}...` :
         cuisines.join(', ')
    }

    const truncateName = (text,maxWords) => {
        const words = text.split(/\s+/);
        return words.length > maxWords ? words.slice(0,maxWords).join(' ') : text
    };

    useEffect(() => {
        const newRestaurants = restaurantData[category] || [];
        setFilteredRestaurants(newRestaurants)
    }, [category]);

    
    return(
        <div>
            <NavBar />
            <section className='category-icons'>
                <div className='flex justify-between items-center border-b border-gray-400 bg-white'>
                    <NavLink
                        to="/restaurants/diningOut"
                        className={({ isActive }) =>
                            `flex items-center p-4 mx-5 text-center no-underline ${
                            isActive
                                ? 'border-b-4 border-red-500 text-red-500'
                                : 'text-black'
                            }`
                        }
                    >
                    <img
                        src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                        alt="Dining Out"
                        className="w-8 h-8 m-4"
                    />
                    <h5 className="text-[2.7vw]">Dining Out</h5>
                    </NavLink>

                    <NavLink
                        to="/restaurants/orderOnline"
                        className={({ isActive }) =>
                            `flex items-center p-4 mx-5 text-center no-underline ${
                            isActive
                                ? 'border-b-4 border-red-500 text-red-500'
                                : 'text-black'
                            }`
                        }
                    >
                    <img
                        src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                        alt="Delivery"
                        className="w-8 h-8 m-4"
                    />
                    <h5 className="text-[2.7vw]">Delivery</h5>
                    </NavLink>

                    <NavLink
                        to="/restaurants/nightLife"
                        className={({ isActive }) =>
                            `flex items-center p-4 mx-5 text-center no-underline ${
                            isActive
                                ? 'border-b-4 border-red-500 text-red-500'
                                : 'text-black'
                            }`
                        }
                    >
                    <img
                        src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                        alt="Nightlife"
                        className="w-8 h-8 m-4"
                    />
                    <h5 className="text-[2.7vw]">Nightlife</h5>
                    </NavLink>
                </div>
            </section>
            <div className='bg-white flex justify-around items-center h-[15vh]'>
                <FilterComponent onFilterChange={handleFilterChange} currentCategory={category}/>
            </div>
            <div className='bg-white grid grid-cols-3 gap-4 mr-4 p-4'>
            {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant) => (
                <Link to={ `/restaurant/${restaurant.id}`} key={restaurant.id}>
                        <div 
                        key={`${restaurant.id}-${restaurant.name}`}
                        className='flex flex-col h-[60vh] w-[27vw] m-8 rounded-lg relative transition-transform transition-border hover:border hover:border-gray-300 hover:shadow-md hover:p-0.5'
                        >
                            <div className='flex-[0.6] w-full h-[25vh] overflow-hidden rounded-lg'>
                                {restaurant.image && <img src={restaurant.image} alt={restaurant.name}/>}
                            </div>
                            <div className='flex-[0.4] p-1 text-black'>
                                <div className='flex justify-between items-start mb-4'>
                                    <h3 className="text-lg font-semibold">{truncateName(restaurant.name,4)}</h3>
                                    <p className="bg-green-500 text-white px-2 rounded-full font-bold font-sans flex items-center">
                                        {restaurant.rating}
                                        <FontAwesomeIcon icon={faStar} className="w-4 ml-2"/>
                                    </p>
                                </div>
                                <div className='flex justify-between items-start mb-4 text-gray-500'>
                                    <p className="text-[1.4vw]">
                                        {truncateCuisines(restaurant.cuisines,2)}
                                    </p>
                                    <p className="text-[1.4vw]">₹{restaurant.priceRange}</p>
                                </div>
                                <div className='flex justify-between items-start mb-4 text-gray-500'>
                                    <p>{restaurant.location}</p>
                                </div>
                            </div>
                        </div>
                </Link>
                ))}
            </div>
        </div>
    )
};

export default RestaurantList;