import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import FilterComponent from "./Filter";
import NavBar from './NavBar';
import axios from 'axios';
import RestaurantSkeleton from './RestaurantSkeleton';

const RestaurantList = ({image, name, location, cuisines, priceRange, rating}) => {
    const { category } = useParams();
    const [allRestaurants, setAllRestaurants] = useState([]); // Store everything from DB
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const API_URL = import.meta.env.VITE_API_URL;

    // 2. Fetch data from Backend
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_URL}/api/restaurants`);
                
                // LOGIC FIX: Check if data is nested inside an object (common with MongoDB/Express)
                // If response.data is an array, use it. If it's an object, look for a 'restaurants' property.
                const allData = Array.isArray(response.data) 
                    ? response.data 
                    : (response.data.restaurants || []);

                // Now filtering will work because 'allData' is guaranteed to be an array
                const categoryData = allData.filter(res => {
                    if (!res.type) return true; 
                    return res.type === category;
                });
                
                setAllRestaurants(allData); 
                setFilteredRestaurants(categoryData); 
                
            } catch (err) {
                console.error("Fetch error:", err);
                // Set empty arrays so the UI doesn't crash on .map()
                setAllRestaurants([]);
                setFilteredRestaurants([]);
            } finally {
                setTimeout(() => setLoading(false), 2000)
            }
        };

        fetchRestaurants();
    }, [category, API_URL]); // Added API_URL to dependency array for best practice

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
        const categoryBase = allRestaurants.filter(res => res.type === category);
        const filtered = categoryBase.filter((restaurant) => applyFilters(restaurant, filters));
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



    return(
        <div className='min-h-screen bg-gray-50'>
            <NavBar />
            <section className=' bg-white sticky top-0 z-20 shadow-md'>
                <div className='flex justify-between items-center border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    <NavLink
                        to="/restaurants/diningOut"
                        className={({ isActive }) =>
                            `flex items-center p-3 sm:p-4 text-center text-sm sm:text-base no-underline transition-colors duration-150 ${
                            isActive
                                ? 'border-b-4 border-red-500 text-red-500 font-semibold'
                                : 'text-black hover:text-red-400'
                            }`
                        }
                    >
                    <img
                        src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                        alt="Dining Out"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                    />
                    <h5 className="md:text-3xl sm:text-sm">Dining Out</h5>
                    </NavLink>

                    <NavLink
                        to="/restaurants/orderOnline"
                        className={({ isActive }) =>
                            `flex items-center p-3 sm:p-4 text-center text-sm sm:text-base no-underline transition-colors duration-150 ${
                            isActive
                                ? 'border-b-4 border-red-500 text-red-500 font-semibold'
                                : 'text-gray-600 hover:text-red-400'
                            }`
                        }
                    >
                    <img
                        src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                        alt="Delivery"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                    />
                    <h5 className="md:text-3xl sm:text-sm">Delivery</h5>
                    </NavLink>

                    <NavLink
                        to="/restaurants/nightLife"
                        className={({ isActive }) =>
                            `flex items-center p-3 sm:p-4 text-center text-sm sm:text-base no-underline transition-colors duration-150 ${
                            isActive
                                ? 'border-b-4 border-red-500 text-red-500 font-semibold'
                                : 'text-gray-600 hover:text-red-400'
                            }`
                        }
                    >
                    <img
                        src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                        alt="Nightlife"
                        className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                    />
                    <h5 className="md:text-3xl sm:text-sm">Nightlife</h5>
                    </NavLink>
                </div>
            </section>

            <div className='bg-white flex justify-around items-center py-3 border-b border-gray-100 shadow-sm'>
                <FilterComponent onFilterChange={handleFilterChange} currentCategory={category}/>
            </div>

            <div className='bg-gray-50 p-4 max-w-7xl mx-auto'>
                {loading ? (
                    <RestaurantSkeleton />
                ) : (
                    <div className='bg-gray-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto'>
                        {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant) => (
                            <Link to={ `/restaurant/${restaurant._id}`} key={restaurant._id} className='block'>
                                    <div 
                                    key={`${restaurant.id}-${restaurant.name}`}
                                    className='flex flex-col h-full rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl'
                                    >
                                        <div className='w-full h-48 sm:h-56 overflow-hidden'>
                                            {restaurant.image && <img src={restaurant.image} alt={restaurant.name} className='w-full h-full object-cover'/>}
                                        </div>

                                        <div className='flex flex-col p-4 flex-grow'>
                                            <div className='flex justify-between items-start mb-2'>
                                                <h3 className="text-lg sm:text-xl font-bold pr-2 truncate">{truncateName(restaurant.name,4)}</h3>
                                                <p className="bg-green-600 text-white px-2 py-0.5 rounded-md text-sm font-bold font-sans flex items-center flex-shrink-0">
                                                    {restaurant.rating}
                                                    <FontAwesomeIcon icon={faStar} className="w-3 h-3 ml-1"/>
                                                </p>
                                            </div>

                                            <div className='flex justify-between items-start mb-1 text-gray-500 text-sm'>
                                                <p className="pr-2">
                                                    {truncateCuisines(restaurant.cuisines,2)}
                                                </p>
                                                <p className="text-gray-700 font-medium text-xs">₹{restaurant.priceRange}</p>
                                            </div>
                                            <div className='flex justify-between items-start mb-4 text-gray-500'>
                                                <p>{restaurant.location}</p>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        ))}
                    </div>  
                )}
            </div>
            
        </div>
    )
};

export default RestaurantList;