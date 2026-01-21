import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios'; // 1. Import Axios
import { useDebounce } from '../hooks/useDebounce';

const NavBar = () => {
    const { currentUser, loading, logout } = useAuth();
    const [isDrpdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]); // 2. State for DB data
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

    // 3. Fetch all restaurants from Backend on mount
    useEffect(() => {
        const loadRestaurants = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/restaurants`);
                setAllRestaurants(response.data);
            } catch (error) {
                console.error("Failed to load search data:", error);
            }
        };
        loadRestaurants();
    }, [API_URL]);

    const fetchSearchResults = useCallback((query) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        
        if (lowerCaseQuery.length < 2) {
            setSearchResults([]);
            return;
        }

        // 4. Search through the state populated by the DB
        const filteredResults = allRestaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(lowerCaseQuery) ||
            restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(lowerCaseQuery))
        );

        setSearchResults(filteredResults);
    }, [allRestaurants]); // Update dependency to allRestaurants

    const debouncedSearch = useDebounce(fetchSearchResults, 300);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query); 
        debouncedSearch(query);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) return null;

    return (
        <nav className='bg-white py-5 px-4 sm:px-6 border-b border-gray-300'>
            <div className='flex items-center justify-between sm:gap-6 w-full'>
                <div className='link-logo'>
                    <Link to='/home' className='text-black font-bold text-l md:text-2xl no-underline'>
                        <h1 className="m-0">tomato</h1>
                    </Link>
                </div>

                <div className='flex flex-grow mx-4 relative'>
                    <input 
                        placeholder='Search Restaurants' 
                        className='w-full px-4 py-2 text-xs md:text-xl rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500' 
                        value={searchQuery} 
                        onChange={handleSearchChange}
                    />

                    {searchQuery.length > 0 && searchResults.length > 0 && (
                        <div className='absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-xl z-30 max-h-80 overflow-y-auto'>
                            {searchResults.slice(0, 10).map(res => (
                                <Link 
                                    key={res._id} // 5. Use MongoDB _id
                                    to={`/restaurant/${res._id}`} 
                                    className='flex items-center p-3 hover:bg-gray-100 border-b last:border-b-0 no-underline'
                                    onClick={() => {
                                        setSearchResults([]);
                                        setSearchQuery('');
                                    }}
                                >
                                    <img src={res.image} alt={res.name} className='w-10 h-10 object-cover rounded-md mr-3 flex-shrink-0'/>
                                    <div className='min-w-0'>
                                        <p className='font-semibold text-sm text-gray-800 m-0'>{res.name}</p>
                                        <p className='text-xs text-gray-500 m-0'>{res.location}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {searchQuery.length >= 2 && searchResults.length === 0 && (
                        <div className='absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md p-3 text-center text-sm text-gray-500 z-30 shadow-lg'>
                            No restaurants found for "{searchQuery}"
                        </div>
                    )}
                </div>

                <div className='flex flex-row justify-end items-center relative flex-shrink-0' ref={dropdownRef}>
                    <div 
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => setIsDropdownOpen(!isDrpdownOpen)}
                    >
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden border border-gray-200'>
                            <img
                                src={currentUser?.photoURL || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"}
                                alt="User avatar"
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <p className='font-bold text-sm hidden sm:block m-0'>
                            {currentUser?.displayName || 'Guest'}
                        </p>
                    </div>

                    {isDrpdownOpen && (
                        <div className='absolute right-0 top-12 bg-white rounded-lg shadow-lg py-2 w-48 z-50 border border-gray-100'>
                            <Link to="/profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline'>
                                Profile
                            </Link>
                            <button onClick={handleLogout} className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 border-none bg-transparent cursor-pointer'>
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;