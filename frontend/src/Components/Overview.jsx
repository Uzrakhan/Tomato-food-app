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
   <div className='flex flex-col p-1 mt-[1vw]'>
    <div className='mb-4 text-[darkred] border border-gray-400 rounded-md h-full w-full'>
      <h3 className='mb-2 ml-5 text-xl'>Cuisines</h3>
      <div className='grid grid-cols-2 w-full'>
        {restaurant.cuisines.map((cuisine) => (
          <div className='flex items-center gap-2 px-3 py-2 rounded-lg' key={cuisine.id}>
            <FontAwesomeIcon icon={faStarOfLife} style={{color: "#FFD43B",}} />
            <a href='' className='m-0 text-[16px] no-underline text-[#D6A600]'>{cuisine}</a>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col mb-4 p-[1vw] justify-center items-start ml-[1px] rounded-md border border-gray-400'>
      <h4 className='mb-2 ml-[2px]'>People Know This Place For</h4>
      <div className='flex flex-wrap gap-[1vw]'>
        <div style={{color: 'gray', fontWeight: '100'}}>
          <p>{restaurant.placeKnownFor.join(', ')}</p>
        </div>
      </div>
    </div>

   <div className='flex flex-col p-2 mb-5 border border-gray-400 rounded-md'>
    <h4 className='text-xl font-semibold'>Average Cost</h4>
      <div key={id}>
        <p className='text-[#696969] text-[1.1vw] font-light'>₹{restaurant.priceRange} people (approx.)</p>
        <p>Exclusive of applicable taxes and charges, if any</p>
        <p>Cash Cards and Meal Coupons accepted</p>
        <p>Digital payments accepted</p>
      </div>
   </div>
    
    <div className='border border-gray-400 w-full rounded-md p-3'>
        <h3 className='text-xl font-semibold ml-2'>More Info</h3>
          <div className='grid grid-cols-3 gap-1'>
            {restaurant.moreInfo.map((info) => (
              <div key={info.id} className='flex items-center gap-1 p-1 rounded-md'>
                <FontAwesomeIcon icon={faCircleCheck} className="check-icon" style={{color: "#006400",}}/>
                <p className='text-xs md:text-lg'>{info}</p>
              </div>
            ))}
          </div>
    </div>
   </div>
  )
}

export default Overview;