import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='nav-bar'>
                <div className='links'>
                    <div className='link-logo'>
                        <Link to='/'>
                            <h1>tomato</h1>
                        </Link>
                    </div>
                    <div className='search-container'>
                        <input placeholder='Search Restaurants' className='search-input'/>
                    </div>
                    <div className='user-div'>
                        <div className='user-img'>
                            <img 
                             src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            />
                        </div>
                        <p style={{fontWeight: 'bold'}}>UZRA</p>
                    </div>
                </div>
        </nav>
    )
};

export default NavBar;