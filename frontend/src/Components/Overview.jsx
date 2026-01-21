import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom'; // 1. Import useOutletContext

const Overview = () => {
    // 2. Access the data shared by the parent (RestaurantDetailsOverview)
    const { restaurant } = useOutletContext();

    if (!restaurant) {
        return <div className="p-6 text-gray-500">Loading overview...</div>;
    }

    return (
        <div className='flex flex-col p-1 mt-4 animate-fade-in'>
            {/* Cuisines Section */}
            <div className='mb-4 text-gray-800 border border-gray-300 rounded-xl p-5 bg-white shadow-sm'>
                <h3 className='mb-4 text-xl font-bold text-red-700'>Cuisines</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
                    {restaurant.cuisines?.map((cuisine, index) => (
                        <div className='flex items-center gap-2' key={index}>
                            <FontAwesomeIcon icon={faStarOfLife} className="text-yellow-500 text-[10px]" />
                            <span className='text-gray-700 hover:text-red-500 cursor-pointer transition-colors'>
                                {cuisine}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popularity Section */}
            <div className='flex flex-col mb-4 p-5 rounded-xl border border-gray-300 bg-white shadow-sm'>
                <h4 className='mb-3 text-lg font-bold text-gray-800'>People Know This Place For</h4>
                <div className='flex flex-wrap gap-2'>
                    <p className='text-gray-600 font-normal leading-relaxed'>
                        {Array.isArray(restaurant.placeKnownFor) 
                            ? restaurant.placeKnownFor.join(', ') 
                            : 'Authentic flavors and great service'}
                    </p>
                </div>
            </div>

            {/* Cost Section */}
            <div className='flex flex-col p-5 mb-5 border border-gray-300 rounded-xl bg-white shadow-sm'>
                <h4 className='text-xl font-bold text-gray-800 mb-2'>Average Cost</h4>
                <div className='space-y-1'>
                    <p className='text-gray-700 text-lg font-semibold'>
                        ₹{restaurant.priceRange} for two people (approx.)
                    </p>
                    <p className='text-sm text-gray-500 italic'>Exclusive of applicable taxes and charges, if any</p>
                    <div className='mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600 space-y-1'>
                        <p>• Cash, Cards and Digital payments accepted</p>
                        <p>• Meal Coupons accepted here</p>
                    </div>
                </div>
            </div>
            
            {/* More Info Section */}
            <div className='border border-gray-300 w-full rounded-xl p-5 bg-white shadow-sm'>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>More Info</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {restaurant.moreInfo?.map((info, index) => (
                        <div key={index} className='flex items-center gap-2 p-1'>
                            <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 shrink-0" />
                            <p className='text-sm md:text-base text-gray-700'>{info}</p>
                        </div>
                    ))}
                    {/* Fallback if moreInfo is empty */}
                    {(!restaurant.moreInfo || restaurant.moreInfo.length === 0) && (
                        <>
                            <div className='flex items-center gap-2 p-1'>
                                <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
                                <p className='text-sm text-gray-700'>Home Delivery</p>
                            </div>
                            <div className='flex items-center gap-2 p-1'>
                                <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
                                <p className='text-sm text-gray-700'>Takeaway Available</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Overview;