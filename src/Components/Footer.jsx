import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-gray-100 flex flex-col justify-between p-6 min-h-[50vh]">
            
            {/* Logo */}
            <div className="flex items-center mb-8">
                <h1 className="font-sans font-bold text-2xl sm:text-3xl text-red-600">🍅tomato</h1>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-y-8">
                
                <div className='text-sm sm:text-base w-1/2 md:w-auto'>
                    <h6 className="text-base sm:text-xl font-bold mb-2 text-gray-800">ABOUT US</h6>
                    <p className="text-gray-600 hover:text-red-500 cursor-pointer">Who We Are</p>
                    <p className="text-gray-600 hover:text-red-500 cursor-pointer">Contact Us</p>
                    <p className="text-gray-600 hover:text-red-500 cursor-pointer">Blog</p>
                </div>

                <div className="text-sm sm:text-base w-1/2 md:w-auto">
                    <h6 className="text-base sm:text-xl font-bold mb-2 text-gray-800">LEARN MORE</h6>
                    <p className="text-gray-600 hover:text-red-500 cursor-pointer">Privacy</p>
                    <p className="text-gray-600 hover:text-red-500 cursor-pointer">Security</p>
                    <p className="text-gray-600 hover:text-red-500 cursor-pointer">Teams</p>
                </div>

                <div className="md:w-auto w-full">
                    <h6 className="text-base sm:text-xl font-bold mb-4 text-gray-800">SOCIAL LINKS</h6>
                    <div className="flex items-center gap-6">
                        {/* LinkedIn */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" className="hover:fill-red-500 cursor-pointer transition">
                            <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM7.0625 8.375H4.75V15.4375H7.0625V8.375ZM7.25 6.1875C7.25 5.5 6.75 5 5.9375 5C5.125 5 4.5625 5.5 4.5625 6.1875C4.5625 6.875 5.0625 7.4375 5.875 7.4375C6.6875 7.4375 7.25 6.875 7.25 6.1875ZM15.5 11.375C15.5 9.1875 14.3125 8.1875 12.8125 8.1875C11.5625 8.1875 11 8.875 10.6875 9.375V8.375H8.375C8.375 9.0625 8.375 15.4375 8.375 15.4375H10.6875V11.5C10.6875 11.3125 10.6875 11.0625 10.75 10.9375C10.9375 10.5 11.3125 10.0625 11.9375 10.0625C12.75 10.0625 13.125 10.6875 13.125 11.6875V15.4375H15.4375C15.5 15.4375 15.5 11.375 15.5 11.375Z"/>
                        </svg>

                        {/* Facebook */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 20 20">
                            <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375Z"/>
                        </svg>

                        {/* Twitter */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="22" height="22" viewBox="0 0 512 512">
                            <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"/>
                            <path fill="#fff" d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"/>
                        </svg>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 flex justify-center items-end text-center mt-auto pt-2">
                <p className="text-xs sm:text-sm text-gray-500">Copyright 2025 @ Tomato.uzra-dev All Rights Reserved.</p>
            </div>

        </div>
    )
};

export default Footer;
