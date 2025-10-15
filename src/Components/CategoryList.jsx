import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 'diningOut', 
            name: 'Dining Out',
            description: 'Discover the best places to dine out and enjoy a great meal.',
            image: 'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
        },
        {
            id: 'orderOnline', 
            name: 'Order Online', 
            description: 'Order your favorite meals from nearby restaurants online.',
            image: 'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
        },
        {
            id: 'nightLife', 
            name: 'Nightlife & Clubs', 
            description: 'Explore top spots to enjoy vibrant nightlife experiences.',
            image: 'https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'
        }
    ];


    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-6 lg:px-8'>
                {categories.map((category) => (
                        <div 
                        key={category.id}
                        onClick={() => navigate(`/restaurants/${category.id}`)}
                        className='category-card cursor-pointer rounded-lg overflow-hidden 
                        shadow-lg hover:shadow-xl transition-shadow
                        duration-300 bg-white
                        '
                        >
                            <div className='aspect-w-4 aspect-h-3'>
                                <img src={category.image} alt='category-img' className="object-contain h-full w-full"/>
                            </div>
                            <div className='p-4 md:p-6'>
                                <h3 className='text-xl md:text-2xl font-bold mb-2 text-gray-800'>
                                    {category.name}
                                </h3>
                                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                                    {category.description}
                                </p>
                            </div>
                        </div>
                ))}
        </div>
    )
};

export default CategoryList;