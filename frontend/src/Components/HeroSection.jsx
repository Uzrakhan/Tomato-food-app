import React from 'react';
import useLocationStore from '../store/locationStore';

const HeroSection = () => {
    const currentLocation = useLocationStore((state) => state.currentLocation);

    return (
        <div className='hero-section w-full min-h-[100dvh] flex justify-center items-center relative p-5 bg-cover bg-center bg-no-repeat'>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <div className='z-10 text-center text-white max-w-[1200px] px-5'>
                <h3 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4'>tomato</h3>
                <span className="text-lg md:text-2xl block">
                    Discover the best food & drinks in <span className='font-semibold'>{currentLocation}</span>
                </span>
            </div>
        </div>
    )
};

export default HeroSection;