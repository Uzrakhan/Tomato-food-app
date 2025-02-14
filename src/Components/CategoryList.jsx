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
        <div className='category-container'>
            {categories.map((category) => (
                    <div 
                    key={category.id}
                    onClick={() => navigate(`/restaurants/${category.id}`)}
                    className='category-card'
                    style={{border: '1px solid black'}}
                    >
                        <img src={category.image} className="category-image"/>
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
        </div>
    )
};

export default CategoryList;