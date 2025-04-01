import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import restaurantData from '../../Restaurants';
import FilterComponent from "./Filter";


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
            <section className='category-icons'>
                <div className='icons-div'>
                    <NavLink to="/restaurants/diningOut" 
                      className={({ isActive }) => `icons-content ${isActive ? 'active' : ''}`}
                    >
                        <img 
                        src='https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png'
                        className='icon-img'
                        alt='Dining Out'
                        />
                        <h5>Dining Out</h5>
                    </NavLink>
                    <NavLink to="/restaurants/orderOnline" className={({isActive}) => `icons-content ${isActive ? 'active' : ''}`}>
                        <img 
                         src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png'
                         className='icon-img'
                         alt='Delivery'
                        />
                        <h5>Delivery</h5>
                    </NavLink>
                    <NavLink to="/restaurants/nightLife" className={({isActive}) => `icons-content ${isActive ? 'active' : ''}`}>
                        <img 
                         src='https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png'
                         className='icon-img'
                         alt='NightLife'
                        />
                        <h5>Nightlife</h5>
                    </NavLink>
                </div>
            </section>
            <div className='filters-div'>
                <FilterComponent onFilterChange={handleFilterChange} currentCategory={category}/>
            </div>
            <div className='listing-container'>
            {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant) => (
                <Link to={ `/restaurant/${restaurant.id}`} key={restaurant.id}>
                        <div 
                        key={`${restaurant.id}-${restaurant.name}`}
                        className='listing-card'
                        >
                            <div className='listing-card-img-div'>
                                {restaurant.image && <img src={restaurant.image} alt={restaurant.name}/>}
                            </div>
                            <div className='listing-card-info-div'>
                                <div className='div1'>
                                    <h3>{truncateName(restaurant.name,4)}</h3>
                                    <p 
                                     style={{backgroundColor: 'green', color: 'white', padding: '0vw 1vw', borderRadius: '20px', fontWeight:'bold', fontFamily: 'sans-serif'}}
                                     >
                                        {restaurant.rating}
                                        <FontAwesomeIcon icon={faStar} style={{width: '15px', marginLeft: '0.5vw'}}/>
                                    </p>
                                </div>
                                <div className='div2' style={{color: 'gray'}}>
                                    <p>
                                        {truncateCuisines(restaurant.cuisines,2)}
                                    </p>
                                    <p>₹{restaurant.priceRange}</p>
                                </div>
                                <div className='div3' style={{color: 'gray'}}>
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