import React from 'react';
import { NavLink,Outlet,useParams } from 'react-router-dom';
import restaurantData from '../../Restaurants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faDiamondTurnRight} from '@fortawesome/free-solid-svg-icons'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import {faComments} from '@fortawesome/free-solid-svg-icons'


const RestaurantDetailsReviews = () => {
    const { id } = useParams();
    const allRestaurants = Object.entries(restaurantData).flatMap(([key,restaurants]) => restaurants);

    const restaurant = allRestaurants.find((restaurant) => restaurant.id === parseInt(id,10))
    return(
        <div className='p-[1vw]'>
            <div className='sticky top-0 bg-white z-[100]'>
                <div className='flex flex-row justify-between items-center uppercase'>
                    <h1>{restaurant.name}</h1>
                    <section className='mr-[10vw]'>
                        <p 
                        style={{backgroundColor: 'green', color: 'white', padding: '0.5vw 1vw', borderRadius: '10%', fontWeight:'bold', fontFamily: 'sans-serif'}}
                        >
                            {restaurant.rating}
                            <FontAwesomeIcon icon={faStar} style={{width: '15px', marginLeft: '1vw'}}/>
                        </p>
                    </section>
                </div>
                <section className='details-cuisine-location'>
                    <p style={{color: '#696969'}}>{restaurant.cuisines.join(', ')}</p>
                    <p style={{color: '#8D8D8D'}}>{restaurant.location}</p>
                </section>
                <section className='flex flex-row justify-start items-center'>
                        <section style={{border: '1px solid gray', borderRadius: '10px', padding: '0.2vw', color: 'gray', marginRight: '1vw'}}>
                            <span style={{color: 'orange'}}>Open now -</span>{restaurant.openingHours}<svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="14" height="14" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 kyPUnV"><title>info-line</title><path d="M12.26 15.24c-0.48 0.18-0.88 0.34-1.16 0.44-0.275 0.090-0.592 0.142-0.92 0.142-0.035 0-0.070-0.001-0.105-0.002l0.005 0c-0.042 0.003-0.091 0.005-0.141 0.005-0.469 0-0.901-0.16-1.244-0.428l0.004 0.003c-0.307-0.259-0.501-0.643-0.501-1.073 0-0.017 0-0.033 0.001-0.049l-0 0.002c-0.006-0.078-0.010-0.168-0.010-0.26s0.004-0.182 0.011-0.272l-0.001 0.012c0-0.18 0.060-0.38 0.12-0.62l0.6-2.16c0.060-0.2 0.1-0.4 0.14-0.6 0.034-0.149 0.056-0.321 0.060-0.497l0-0.003c0.004-0.030 0.006-0.064 0.006-0.099 0-0.182-0.063-0.35-0.168-0.483l0.001 0.002c-0.152-0.105-0.339-0.167-0.542-0.167-0.042 0-0.083 0.003-0.123 0.008l0.005-0.001c-0.009-0-0.020-0-0.031-0-0.16 0-0.314 0.022-0.461 0.063l0.012-0.003-0.44 0.16 0.24-0.66c0.4-0.16 0.8-0.3 1.16-0.42 0.311-0.101 0.668-0.159 1.039-0.16h0.001c0.011-0 0.024-0 0.036-0 0.489 0 0.938 0.174 1.287 0.463l-0.003-0.003c0.295 0.261 0.48 0.641 0.48 1.065 0 0.012-0 0.025-0 0.037l0-0.002c0 0.1 0 0.26 0 0.5-0.020 0.243-0.062 0.468-0.126 0.684l0.006-0.024-0.62 2.14c-0.043 0.159-0.085 0.362-0.116 0.568l-0.004 0.032c-0.032 0.153-0.054 0.332-0.060 0.515l-0 0.005c-0.003 0.027-0.005 0.058-0.005 0.090 0 0.188 0.070 0.36 0.186 0.491l-0.001-0.001c0.158 0.093 0.348 0.148 0.55 0.148 0.046 0 0.091-0.003 0.135-0.008l-0.005 0.001c0.014 0 0.031 0.001 0.047 0.001 0.161 0 0.317-0.022 0.465-0.064l-0.012 0.003c0.156-0.041 0.289-0.089 0.416-0.147l-0.016 0.007zM12.16 6.48c-0.27 0.249-0.632 0.402-1.030 0.402s-0.76-0.153-1.031-0.403l0.001 0.001c-0.254-0.238-0.413-0.575-0.413-0.95s0.158-0.712 0.412-0.949l0.001-0.001c0.27-0.249 0.632-0.402 1.030-0.402s0.76 0.153 1.031 0.403l-0.001-0.001c0.254 0.238 0.413 0.575 0.413 0.95s-0.158 0.712-0.412 0.949l-0.001 0.001zM10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM10 18.58c-4.739 0-8.58-3.841-8.58-8.58s3.841-8.58 8.58-8.58c4.739 0 8.58 3.841 8.58 8.58v0c0 4.739-3.841 8.58-8.58 8.58v0z"></path></svg>
                        </section>
                        <div style={{marginLeft: '2vw',color: '#696969'}}>
                            | ₹{restaurant.priceRange}
                        </div>
                        <div style={{marginLeft: '2vw',color: '#696969'}}>
                            | <FontAwesomeIcon icon={faPhoneVolume} style={{color: '#EF4F5F',marginRight: '1vw'}}/>{restaurant.contact}
                        </div>
                </section>
                <div className='flex flex-row justify-start items-center'>
                    <div className='border border-gray-400 px-[0.5vw] py-[0.5vw] m-[1vw] rounded-[10px] flex justify-between text-[#696969]'><FontAwesomeIcon icon={faDiamondTurnRight} style={{color: '#EF4F5F'}}/>Direction</div>
                    <div className='border border-gray-400 px-[0.5vw] py-[0.5vw] m-[1vw] rounded-[10px] flex justify-between text-[#696969]'><FontAwesomeIcon icon={faShare} style={{color: '#EF4F5F'}}/>Share</div>
                    <div className='border border-gray-400 px-[0.5vw] py-[0.5vw] m-[1vw] rounded-[10px] flex justify-between text-[#696969]'><FontAwesomeIcon icon={faComments} style={{color: '#EF4F5F'}}/>Reviews</div>
                </div>
            </div>
            <div className='details-image'>
                <img src={restaurant.image}  width='700px'/>
            </div>
            
            <div className='mt-[1vw] top-0 bg-white flex flex-row justify-start items-center border-b border-gray-400 gap-6' style={{position:'sticky'}}>
                    <nav>
                        <NavLink to={`/restaurant/${restaurant.id}/overview`}>
                            Overview
                        </NavLink>
                        <NavLink 
                            to={`/restaurant/${restaurant.id}/orderonline`} 
                        >
                                Order Online
                        </NavLink>
                        <NavLink 
                            to={`/restaurant/${restaurant.id}/reviews`}
                            className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F]" : ""}
                        >
                                Reviews
                        </NavLink>
                        <NavLink to={`/restaurant/${restaurant.id}/menu`}>
                                Menu
                        </NavLink>
                    </nav>
            </div>

            <Outlet />
        </div>
    )
};

export default RestaurantDetailsReviews;