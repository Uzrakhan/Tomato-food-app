import React from 'react';


const HeroSection = () => {
    return (
        <div className='hero-section w-full max-h-screen flex items-center justify-center bg-cover 
        bg-center bg-no-repeat relative px-5'>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className='hero-content text-center text-white z-10 max-w-6xl w-full'>
                <h3 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4'>tomato</h3>
                <span className="text-lg md:text-2xl lg:text-3xl block">
                    Discover the best food & drinks in Lucknow
                </span>
            </div>
        </div>
    )
};

export default HeroSection;