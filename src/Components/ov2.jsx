import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link , useParams, useLocation, Outlet} from 'react-router-dom'
import restaurantData from '../../Restaurants';



const Overview = () => {
    const { id } = useParams();

    const allRestaurants = [
      ...restaurantData.diningOut,
      ...restaurantData.orderOnline,
      ...restaurantData.nightLife
    ];

    const restaurant = allRestaurants.find(r => r.id === parseInt(id, 10));

    if (!restaurant) {
      return <div>Restaurant not found</div>;
    }

    console.log("Restaurants for category:", restaurant);


  return (
   <div style={{position:'sticky', top: '0'}} className='mt-[1vw] top-0 bg-white flex flex-row justify-start items-center border-b border-gray-400 gap-6' height='80vh'>
        <div className='overview'>
          <div style={{ border: '1px solid black'}}>
            Cuisines
            <div style={{display: 'flex', gap: '2vw', fontSize: '1.2vw'}}>
            {restaurant.cuisines.map((cuisine) => (
              <div className=''>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />
                <p>{cuisine}</p>
              </div>
            ))}
            </div>
          </div>

          
        </div>
   </div>
  )
}

export default Overview;