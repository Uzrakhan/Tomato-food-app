import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='nav-bar'>
                <div className='links'>
                    <div className='link-img'>
                        <p>
                            <Link to='/'>
                                <img 
                                 src='https://cdn.dribbble.com/userupload/13345863/file/original-edcd299c3e2c36a7a3fbd9b0dbae7d8c.png?resize=1504x1128&vertical=center'
                                 width='95px'
                                 height='70px'/>
                            </Link>
                        </p>
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