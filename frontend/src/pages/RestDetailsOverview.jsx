import React , {useState, useEffect, useRef} from 'react';
import { Link,NavLink,useParams, Outlet } from 'react-router-dom';
import restaurantData from '../../Restaurants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faDiamondTurnRight} from '@fortawesome/free-solid-svg-icons'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import NavBar from '../Components/NavBar';


const RestaurantDetailsOverview = () => {
    const { id } = useParams();
    const allRestaurants = Object.entries(restaurantData).flatMap(([key,restaurants]) => restaurants);

    const restaurant = allRestaurants.find((restaurant) => restaurant.id === parseInt(id,10));
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    // This useEffect handles calculating the height of the sticky header dynamically
    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }

        const handleResize = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Placeholder for restaurant not found
    if (!restaurant) {
        return (
            <div>
                <NavBar />
                <div className='p-8 text-center text-2xl text-red-600 font-semibold'>
                    Restaurant not found. 😔
                </div>
            </div>
        );
    }
    
    // Rating display helper
    const formatRating = (rating) => (
        <p 
            className='bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg font-bold flex items-center gap-1'
        >
            {rating}
            <FontAwesomeIcon icon={faStar} className='w-3 h-3 sm:w-4 sm:h-4'/>
        </p>
    );

    return(
        <div>
            <NavBar />
            <div className='p-2 sm:p-4'>
            
            {/* Restaurant Header - Sticky at top (The element whose height is measured) */}
            {/* Note: If your NavBar is sticky, you should set top to the NavBar height, not top-0 */}
            <div ref={headerRef} className='sticky top-0 bg-white z-[100] pb-2'>
                <div className='flex flex-row justify-between items-center uppercase'>
                    <h1 className='text-lg sm:text-2xl font-bold'>{restaurant.name}</h1>
                    <section className='mr-4 sm:mr-[10vw]'>
                        {formatRating(restaurant.rating)}
                    </section>
                </div>
                <section className='details-cuisine-location mt-2'>
                    <p className='text-gray-600 text-sm sm:text-base'>{restaurant.cuisines.join(', ')}</p>
                    <p className='text-gray-500 text-xs sm:text-sm'>{restaurant.location}</p>
                </section>
                <section className='flex flex-col sm:flex-row sm:justify-start sm:items-center gap-2 sm:gap-0 mt-2'>
                    <section className='border border-gray-400 rounded-lg px-2 py-1 text-gray-600 text-xs sm:text-sm flex items-center gap-1'>
                        <span className='text-orange-500'>Open now -</span>{restaurant.openingHours}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="14" height="14" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="inline-block ml-1"><title>info-line</title><path d="M12.26 15.24c-0.48 0.18-0.88 0.34-1.16 0.44-0.275 0.090-0.592 0.142-0.92 0.142-0.035 0-0.070-0.001-0.105-0.002l0.005 0c-0.042 0.003-0.091 0.005-0.141 0.005-0.469 0-0.901-0.16-1.244-0.428l0.004 0.003c-0.307-0.259-0.501-0.643-0.501-1.073 0-0.017 0-0.033 0.001-0.049l-0 0.002c-0.006-0.078-0.010-0.168-0.010-0.26s0.004-0.182 0.011-0.272l-0.001 0.012c0-0.18 0.060-0.38 0.12-0.62l0.6-2.16c0.060-0.2 0.1-0.4 0.14-0.6 0.034-0.149 0.056-0.321 0.060-0.497l0-0.003c0.004-0.030 0.006-0.064 0.006-0.099 0-0.182-0.063-0.35-0.168-0.483l0.001 0.002c-0.152-0.105-0.339-0.167-0.542-0.167-0.042 0-0.083 0.003-0.123 0.008l0.005-0.001c-0.009-0-0.020-0-0.031-0-0.16 0-0.314 0.022-0.461 0.063l0.012-0.003-0.44 0.16 0.24-0.66c0.4-0.16 0.8-0.3 1.16-0.42 0.311-0.101 0.668-0.159 1.039-0.16h0.001c0.011-0 0.024-0 0.036-0 0.489 0 0.938 0.174 1.287 0.463l-0.003-0.003c0.295 0.261 0.48 0.641 0.48 1.065 0 0.012-0 0.025-0 0.037l0-0.002c0 0.1 0 0.26 0 0.5-0.020 0.243-0.062 0.468-0.126 0.684l0.006-0.024-0.62 2.14c-0.043 0.159-0.085 0.362-0.116 0.568l-0.004 0.032c-0.032 0.153-0.054 0.332-0.060 0.515l-0 0.005c-0.003 0.027-0.005 0.058-0.005 0.090 0 0.188 0.070 0.36 0.186 0.491l-0.001-0.001c0.158 0.093 0.348 0.148 0.55 0.148 0.046 0 0.091-0.003 0.135-0.008l-0.005 0.001c0.014 0 0.031 0.001 0.047 0.001 0.161 0 0.317-0.022 0.465-0.064l-0.012 0.003c0.156-0.041 0.289-0.089 0.416-0.147l-0.016 0.007zM12.16 6.48c-0.27 0.249-0.632 0.402-1.030 0.402s-0.76-0.153-1.031-0.403l0.001 0.001c-0.254-0.238-0.413-0.575-0.413-0.95s0.158-0.712 0.412-0.949l0.001-0.001c0.27-0.249 0.632-0.402 1.030-0.402s0.76 0.153 1.031 0.403l-0.001-0.001c0.254 0.238 0.413 0.575 0.413 0.95s-0.158 0.712-0.412 0.949l-0.001 0.001zM10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM10 18.58c-4.739 0-8.58-3.841-8.58-8.58s3.841-8.58 8.58-8.58c4.739 0 8.58 3.841 8.58 8.58v0c0 4.739-3.841 8.58-8.58 8.58v0z"></path></svg>
                    </section>
                    <div className='text-gray-600 text-xs sm:text-sm sm:ml-4'>
                        | ₹{restaurant.priceRange}
                    </div>
                    <div className='text-gray-600 text-xs sm:text-sm sm:ml-4'>
                        | <FontAwesomeIcon icon={faPhoneVolume} className='text-[#EF4F5F] mr-1'/>{restaurant.contact}
                    </div>
                </section>
                <div className='flex flex-row justify-start items-center flex-wrap gap-2 mt-2'>
                    <div className='border border-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-600 text-sm'>
                        <FontAwesomeIcon icon={faDiamondTurnRight} className='text-[#EF4F5F]'/>Direction
                    </div>
                    <div className='border border-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-600 text-sm'>
                        <FontAwesomeIcon icon={faShare} className='text-[#EF4F5F]'/>Share
                    </div>
                    <div className='border border-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-600 text-sm'>
                        <FontAwesomeIcon icon={faComments} className='text-[#EF4F5F]'/>Reviews
                    </div>
                </div>
            </div>

            {/* Restaurant Image - Scrolls normally */}
            <div className='details-image my-4'>
                <img src={restaurant.image} className='w-full max-w-[700px] rounded-lg'/>
            </div>
            
            {/* Navigation Tabs - Sticky below the header */}
            <div 
                className='sticky z-50 bg-white flex flex-row justify-start items-center border-b border-gray-400 py-3 overflow-x-auto'
                style={{ top: `${headerHeight}px` }}
            >
                <div className='flex gap-6 sm:gap-12 min-w-max px-2 text-sm md:text-xl'>
                    <NavLink 
                        to={`/restaurant/${restaurant.id}`} 
                        // ⭐️ The FIX: Add the 'end' prop here
                        end 
                        className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2" : "pb-2"}
                        style={{ textDecoration: 'none', color: 'inherit'}}
                    >
                        Overview
                    </NavLink>
                    <NavLink 
                        to={`/restaurant/${restaurant.id}/orderonline`}
                        className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2" : "pb-2"}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        Order Online
                    </NavLink>
                    <NavLink 
                        to={`/restaurant/${restaurant.id}/reviews`}
                        className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2" : "pb-2"}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        Reviews
                    </NavLink>
                    <NavLink 
                        to={`/restaurant/${restaurant.id}/menu`}
                        className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2" : "pb-2"}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        Menu
                    </NavLink>
                </div>
            </div>

            <Outlet />
            </div>
        </div>
    )
};

export default RestaurantDetailsOverview;