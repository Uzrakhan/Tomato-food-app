import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React, {useState, useEffect,useRef, useCallback, useMemo} from 'react';
import restaurantData from '../../Restaurants';
import { useDebounce } from '../hooks/useDebounce';

const ALL_RESTAURANTS = [
    ...restaurantData.diningOut,
    ...restaurantData.orderOnline,
    ...restaurantData.nightLife,
]; // Empty dependency array ensures it runs only once.



const NavBar = () => {
    const { currentUser,loading,logout } = useAuth(); //get user from authcontext
    const [isDrpdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // 👈 New state to store the results displayed to the user
    const [searchResults, setSearchResults] = useState([]); 
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

        const fetchSearchResults = useCallback((query) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        
        // Ensure ALL_RESTAURANTS is not empty, check your import:
        if (ALL_RESTAURANTS.length === 0) {
             console.error("Restaurant data is empty! Check '../../Restaurants' import.");
        }

        if (lowerCaseQuery.length < 2) {
            setSearchResults([]);
            return;
        }

        const filteredResults = ALL_RESTAURANTS.filter(restaurant => 
            restaurant.name.toLowerCase().includes(lowerCaseQuery) ||
            restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(lowerCaseQuery))
        );

        setSearchResults(filteredResults);
        // 👈 Check for this log when you stop typing
        console.log(`[DEBOUNCE SUCCESS] Found ${filteredResults.length} results for: "${query}"`); 
        
    // CRITICAL: The dependency array must include setSearchResults, which is a stable setter.
    }, [setSearchResults]); 




    // 4. Create the Debounced Handler
    const debouncedSearch = useDebounce(fetchSearchResults, 300);


    // 5. Input Change Handler
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query); 
        console.log("Input changed:", query);
        debouncedSearch(query)
    };

     //close dropdown when clicking outside
     useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
     },[]);

     const handleLogout = async () => {
        try{
            await logout();
            navigate('/login')
        }catch (error) {
            console.error('Logout error:', error);
        }
     };

     if (loading) return null; // Or loading spinner

     console.log('NavBar user:', currentUser); // Debug log


    return(
        <nav className='nav-bar'>
                <div className='links'>
                    <div className='link-logo'>
                        <Link to='/home'>
                            <h1>tomato</h1>
                        </Link>
                    </div>
                    <div className='search-container relative'>
                        <input 
                            placeholder='Search Restaurants' className='search-input'                         
                            value={searchQuery} 
                            onChange={handleSearchChange}
                        />

                        {searchQuery.length > 0 && searchResults.length > 0 && (
                            <div className='absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-xl z-10 max-h-80 overflow-y-auto'>
                                {searchResults.slice(0, 10).map(res => (
                                    <Link 
                                        key={res.id} 
                                        to={`/restaurant/${res.id}`} 
                                        className='flex items-center p-3 hover:bg-gray-100 border-b last:border-b-0'
                                        onClick={() => setSearchResults([])} // Clear results on click
                                    >
                                        <img src={res.image} alt={res.name} className='w-8 h-8 object-cover rounded-sm mr-3'/>
                                        <div>
                                            <p className='font-semibold text-sm text-gray-800'>{res.name}</p>
                                            <p className='text-xs text-gray-500'>{res.location}</p>
                                        </div>
                                    </Link>
                                ))}
                                {searchResults.length > 10 && (
                                    <div className='p-3 text-center text-xs text-gray-500'>
                                        Showing first 10 results...
                                    </div>
                                )}
                            </div>
                        )}

                        {searchQuery.length >= 2 && searchResults.length === 0 && (
                         <div className='absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-xl z-10 p-3 text-center text-sm text-gray-500'>
                            No restaurants found for "{searchQuery}"
                         </div>
                        )}


                    </div>

                    <div className='user-div relative' ref={dropdownRef}>
                        <div 
                         className='flex items-center gap-2 cursor-pointer'
                         onClick={() => setIsDropdownOpen(!isDrpdownOpen)}
                        >
                            <div className='user-img'>
                                <img
                                 src={currentUser?.photoURL || 
                                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 }
                                 alt="User avatar"
                                className='w-10 h-10 rounded-full'
                                />
                            </div>
                            <p className='font-bold'>
                                {currentUser?.displayName || 'Guest'}
                            </p>
                        </div>


                          {/* Dropdown Menu */}
                        {isDrpdownOpen && (
                            <div className='absolute right-0 top-12 bg-white rounded-lg shadow-lg py-2 w-48 z-50'>
                                <Link 
                                to="/profile"
                                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                >
                                    Profile
                                </Link>
                                <button
                                onClick={handleLogout} 
                                className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
        </nav>
    )
};

export default NavBar;