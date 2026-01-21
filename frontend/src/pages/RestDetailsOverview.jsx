import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useParams, Outlet } from 'react-router-dom';
import axios from 'axios'; // 1. Import Axios
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPhoneVolume, faDiamondTurnRight, faShare, faComments } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../Components/NavBar';

const RestaurantDetailsOverview = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    const API_URL = import.meta.env.VITE_API_URL;

    // 2. Fetch Restaurant Data from Backend
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_URL}/api/restaurants/${id}`);
                setRestaurant(response.data);
            } catch (err) {
                console.error("Error fetching restaurant details:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id, API_URL]);

    // 3. Dynamic Header Height Logic (unchanged)
    useEffect(() => {
        const updateHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [restaurant]); // Re-run when restaurant data loads

    if (loading) return (
        <div>
            <NavBar />
            <div className='p-10 text-center text-xl'>Loading restaurant information...</div>
        </div>
    );

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

    const formatRating = (rating) => (
        <p className='bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg font-bold flex items-center gap-1'>
            {rating}
            <FontAwesomeIcon icon={faStar} className='w-3 h-3 sm:w-4 sm:h-4'/>
        </p>
    );

    return (
        <div>
            <NavBar />
            <div className='p-2 sm:p-4'>
                {/* Restaurant Header - Sticky */}
                <div ref={headerRef} className='sticky top-0 bg-white z-[100] pb-2'>
                    <div className='flex flex-row justify-between items-center uppercase'>
                        <h1 className='text-lg sm:text-2xl font-bold'>{restaurant.name}</h1>
                        <section className='mr-4 sm:mr-[10vw]'>
                            {formatRating(restaurant.rating)}
                        </section>
                    </div>
                    <section className='details-cuisine-location mt-2'>
                        <p className='text-gray-600 text-sm sm:text-base'>
                            {Array.isArray(restaurant.cuisines) ? restaurant.cuisines.join(', ') : restaurant.cuisines}
                        </p>
                        <p className='text-gray-500 text-xs sm:text-sm'>{restaurant.location}</p>
                    </section>
                    <section className='flex flex-col sm:flex-row sm:justify-start sm:items-center gap-2 sm:gap-0 mt-2'>
                        <section className='border border-gray-400 rounded-lg px-2 py-1 text-gray-600 text-xs sm:text-sm flex items-center gap-1'>
                            <span className='text-orange-500'>Open now -</span>{restaurant.deliveryTime || '10am – 11pm'}
                        </section>
                        <div className='text-gray-600 text-xs sm:text-sm sm:ml-4'>
                            | ₹{restaurant.priceRange}
                        </div>
                        <div className='text-gray-600 text-xs sm:text-sm sm:ml-4'>
                            | <FontAwesomeIcon icon={faPhoneVolume} className='text-[#EF4F5F] mr-1'/>{restaurant.contact || 'Contact details hidden'}
                        </div>
                    </section>
                    
                    <div className='flex flex-row justify-start items-center flex-wrap gap-2 mt-2'>
                        <div className='border border-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-600 text-sm cursor-pointer'>
                            <FontAwesomeIcon icon={faDiamondTurnRight} className='text-[#EF4F5F]'/>Direction
                        </div>
                        <div className='border border-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-600 text-sm cursor-pointer'>
                            <FontAwesomeIcon icon={faShare} className='text-[#EF4F5F]'/>Share
                        </div>
                        <div className='border border-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-600 text-sm cursor-pointer'>
                            <FontAwesomeIcon icon={faComments} className='text-[#EF4F5F]'/>Reviews
                        </div>
                    </div>
                </div>

                {/* Restaurant Image */}
                <div className='details-image my-4'>
                    <img src={restaurant.image} className='w-full max-w-[700px] rounded-lg' alt={restaurant.name}/>
                </div>
                
                {/* Navigation Tabs - Sticky below the header */}
                <div 
                    className='sticky z-50 bg-white flex flex-row justify-start items-center border-b border-gray-400 py-3 overflow-x-auto'
                    style={{ top: `${headerHeight}px` }}
                >
                    <div className='flex gap-6 sm:gap-12 min-w-max px-2 text-sm md:text-xl'>
                        <NavLink 
                            to={`/restaurant/${restaurant._id}`} // 4. Use MongoDB _id
                            end 
                            className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2 no-underline" : "pb-2 no-underline text-gray-500"}
                        >
                            Overview
                        </NavLink>
                        <NavLink 
                            to={`/restaurant/${restaurant._id}/orderonline`}
                            className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2 no-underline" : "pb-2 no-underline text-gray-500"}
                        >
                            Order Online
                        </NavLink>
                        <NavLink 
                            to={`/restaurant/${restaurant._id}/reviews`}
                            className={({ isActive }) => isActive ? "text-gray-800 font-bold border-b-[3px] border-[#EF4F5F] pb-2 no-underline" : "pb-2 no-underline text-gray-500"}
                        >
                            Reviews
                        </NavLink>
                    </div>
                </div>

                <Outlet context={{ restaurant }} />
            </div>
        </div>
    );
};

export default RestaurantDetailsOverview;