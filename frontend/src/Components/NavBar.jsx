import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { useAuth } from '../context/AuthContext';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useDebounce } from '../hooks/useDebounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const NavBar = () => {
    const { currentUser, loading, logout } = useAuth();
    const { cartCount, activeRestaurantId } = useCart(); // Fixed typo: activeRestaurantId
    const [isDrpdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation(); // Needed for active link styling

    const API_URL = import.meta.env.VITE_API_URL;

    // Handlers
    const handleCartClick = () => {
        if (activeRestaurantId) {
            navigate(`/checkout/${activeRestaurantId}`);
        } else {
            alert("Your cart is empty! Add some delicious food first.");
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Restaurant Data Fetching (for Search)
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
        const filteredResults = allRestaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(lowerCaseQuery) ||
            restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(lowerCaseQuery))
        );
        setSearchResults(filteredResults);
    }, [allRestaurants]);

    const debouncedSearch = useDebounce(fetchSearchResults, 300);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query); 
        debouncedSearch(query);
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (loading) return null;

    return (
        <nav className='bg-white py-5 px-4 sm:px-6 border-b border-gray-300 sticky top-0 z-50'>
            <div className='flex items-center justify-between sm:gap-6 w-full'>
                <div className='link-logo'>
                    <Link to='/home' className='text-red-500 font-bold text-l md:text-3xl no-underline italic tracking-tighter'>
                        <h1 className="m-0">tomato</h1>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className='flex flex-grow mx-4 relative max-w-2xl'>
                    <input 
                        placeholder='Search for restaurant or cuisine...' 
                        className='w-full px-4 py-2 text-sm rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-1 focus:ring-red-400' 
                        value={searchQuery} 
                        onChange={handleSearchChange}
                    />
                    {searchQuery.length > 0 && searchResults.length > 0 && (
                        <div className='absolute left-0 top-full mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto'>
                            {searchResults.slice(0, 10).map(res => (
                                <Link 
                                    key={res._id} 
                                    to={`/restaurant/${res._id}`} 
                                    className='flex items-center p-3 hover:bg-gray-50 border-b last:border-b-0 no-underline'
                                    onClick={() => { setSearchResults([]); setSearchQuery(''); }}
                                >
                                    <img src={res.image} alt={res.name} className='w-12 h-12 object-cover rounded-lg mr-4'/>
                                    <div>
                                        <p className='font-bold text-gray-800 m-0'>{res.name}</p>
                                        <p className='text-xs text-gray-500 m-0'>{res.location}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-6 text-gray-500 font-medium">
                    <Link 
                        to="/orders" 
                        className={`hover:text-red-500 transition-all ${location.pathname === '/orders' ? 'text-red-500 scale-110' : ''}`}
                    >
                        <FontAwesomeIcon icon={faClipboardList} className='text-xl' />
                    </Link>

                    {/* Cart Icon using Context Count */}
                    <div 
                        className="relative cursor-pointer hover:text-red-500 transition-all active:scale-90" 
                        onClick={handleCartClick}
                    >
                        <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    {/* User Dropdown */}
                    <div className='relative' ref={dropdownRef}>
                        <div 
                            className='flex items-center gap-2 cursor-pointer group'
                            onClick={() => setIsDropdownOpen(!isDrpdownOpen)}
                        >
                            <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-red-400 transition-all'>
                                <img
                                    src={currentUser?.photoURL || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"}
                                    alt="User"
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>

                        {isDrpdownOpen && (
                            <div className='absolute right-0 top-12 bg-white rounded-xl shadow-2xl py-2 w-48 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-2'>
                                <p className='px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest'>Account</p>
                                <Link to="/profile" className='block px-4 py-2 text-gray-700 hover:bg-red-50 no-underline'>Profile</Link>
                                <button onClick={handleLogout} className='w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 border-none bg-transparent cursor-pointer font-bold'>Log Out</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;