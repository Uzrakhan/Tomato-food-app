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
                    <div>
                        <img src=''/>
                        <p>John</p>
                    </div>
                </div>
        </nav>
    )
};

export default NavBar;