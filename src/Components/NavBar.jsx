import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React, {useState, useEffect,useRef} from 'react';

const NavBar = () => {
    const { currentUser,loading,logout } = useAuth(); //get user from authcontext
    const [isDrpdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

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
                    <div className='search-container'>
                        <input placeholder='Search Restaurants' className='search-input'/>
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