import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
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
   <div className='overview-div'>
    <div className='cuisine-div'>
      <h3>Cuisines</h3>
      <div className='cuisine-div-part2'>
        {restaurant.cuisines.map((cuisine) => (
          <div className='cuisine-item' key={cuisine.id}>
            <FontAwesomeIcon icon={faStarOfLife} style={{color: "#FFD43B",}} />
            <a href=''>{cuisine}</a>
          </div>
        ))}
      </div>
    </div>
    <div className='speciality-div'>
      <h4>People Know This Place For</h4>
      <div className='speciality-div-part1'>
        <div style={{color: 'gray', fontWeight: '100'}}>
          <p>{restaurant.placeKnownFor.join(', ')}</p>
        </div>
      </div>
    </div>

   <div className='avg-cost-div'>
    <h4>Average Cost</h4>
      <div className='avg-cost-div-2' key={id}>
        <p style={{color: 'black', fontSize: '1.5vw'}}>₹{restaurant.priceRange} people (approx.)</p>
        <p>Exclusive of applicable taxes and charges, if any</p>
        <p>Cash Cards and Meal Coupons accepted</p>
        <p>Digital payments accepted</p>
      </div>
   </div>
    
    <div className='more-info-div'>
        <h3>More Info</h3>
        <div className='more-info-grid'>
          {restaurant.moreInfo.map((info) => (
            <div key={info.id} className='more-info-div-2'>
               <FontAwesomeIcon icon={faCircleCheck} className="check-icon" style={{color: "#006400",}}/>
               <p>{info}</p>
            </div>
          ))}
        </div>
    </div>
   </div>
  )
}

export default Overview;