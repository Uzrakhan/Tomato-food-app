import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Reviews = ({ restaurant }) => {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('recent');

    // Sample reviews data - replace with actual data from your restaurant object
    const reviews = [
        {
            id: 1,
            userName: "Rahul Sharma",
            userImage: "https://via.placeholder.com/50",
            rating: 5,
            date: "2 days ago",
            reviewText: "Absolutely amazing food! The ambiance was perfect and the staff was very courteous. Highly recommended for family dinners.",
            helpful: 24,
            notHelpful: 2,
            images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"]
        },
        {
            id: 2,
            userName: "Priya Gupta",
            userImage: "https://via.placeholder.com/50",
            rating: 4,
            date: "1 week ago",
            reviewText: "Great experience overall. The food was delicious but the waiting time was a bit long. Would visit again!",
            helpful: 18,
            notHelpful: 1,
            images: []
        },
        {
            id: 3,
            userName: "Amit Kumar",
            userImage: "https://via.placeholder.com/50",
            rating: 3,
            date: "2 weeks ago",
            reviewText: "Decent food but nothing extraordinary. Service could be better. Pricing is on the higher side.",
            helpful: 12,
            notHelpful: 5,
            images: []
        },
        {
            id: 4,
            userName: "Sneha Verma",
            userImage: "https://via.placeholder.com/50",
            rating: 5,
            date: "3 weeks ago",
            reviewText: "Best restaurant in the area! The taste is authentic and portions are generous. Staff is friendly and helpful.",
            helpful: 35,
            notHelpful: 0,
            images: ["https://via.placeholder.com/150"]
        },
        {
            id: 5,
            userName: "Vikram Singh",
            userImage: "https://via.placeholder.com/50",
            rating: 2,
            date: "1 month ago",
            reviewText: "Disappointed with the quality. The food was cold and not fresh. Won't be visiting again.",
            helpful: 8,
            notHelpful: 15,
            images: []
        }
    ];

    // Calculate rating breakdown
    const ratingBreakdown = {
        5: reviews.filter(r => r.rating === 5).length,
        4: reviews.filter(r => r.rating === 4).length,
        3: reviews.filter(r => r.rating === 3).length,
        2: reviews.filter(r => r.rating === 2).length,
        1: reviews.filter(r => r.rating === 1).length
    };

    const totalReviews = reviews.length;
    const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

    // Render stars
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-500" />);
        }
        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-yellow-500" />);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} className="text-gray-300" />);
        }
        return stars;
    };

    // Filter reviews
    const filteredReviews = filter === 'all' 
        ? reviews 
        : reviews.filter(r => r.rating === parseInt(filter));

    // Sort reviews
    const sortedReviews = [...filteredReviews].sort((a, b) => {
        if (sortBy === 'helpful') {
            return b.helpful - a.helpful;
        }
        return 0; // 'recent' is default order
    });

    return (
        <div className="py-6">
            {/* Rating Overview Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Overall Rating */}
                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 md:w-1/3">
                        <div className="text-5xl font-bold text-gray-800 mb-2">{averageRating}</div>
                        <div className="flex gap-1 mb-2">
                            {renderStars(parseFloat(averageRating))}
                        </div>
                        <p className="text-gray-600 text-sm">{totalReviews} reviews</p>
                    </div>

                    {/* Rating Breakdown */}
                    <div className="flex-1">
                        {[5, 4, 3, 2, 1].map(star => (
                            <div key={star} className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-medium w-6">{star}</span>
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xs" />
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${(ratingBreakdown[star] / totalReviews) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-600 w-8">{ratingBreakdown[star]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter and Sort Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                    <button 
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filter === 'all' 
                                ? 'bg-[#EF4F5F] text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        All
                    </button>
                    {[5, 4, 3, 2, 1].map(star => (
                        <button 
                            key={star}
                            onClick={() => setFilter(star.toString())}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                                filter === star.toString() 
                                    ? 'bg-[#EF4F5F] text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {star} <FontAwesomeIcon icon={faStar} className="text-xs" />
                        </button>
                    ))}
                </div>

                {/* Sort Dropdown */}
                <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EF4F5F]"
                >
                    <option value="recent">Most Recent</option>
                    <option value="helpful">Most Helpful</option>
                </select>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {sortedReviews.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        No reviews found for this rating.
                    </div>
                ) : (
                    sortedReviews.map(review => (
                        <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6">
                            {/* User Info */}
                            <div className="flex items-start gap-4 mb-4">
                                <img 
                                    src={review.userImage} 
                                    alt={review.userName}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{review.userName}</h3>
                                            <p className="text-sm text-gray-500">{review.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-lg w-fit">
                                            <span className="font-bold">{review.rating}</span>
                                            <FontAwesomeIcon icon={faStar} className="text-xs" />
                                        </div>
                                    </div>
                                    
                                    {/* Review Text */}
                                    <p className="text-gray-700 mb-4">{review.reviewText}</p>

                                    {/* Review Images */}
                                    {review.images.length > 0 && (
                                        <div className="flex gap-2 mb-4 overflow-x-auto">
                                            {review.images.map((img, idx) => (
                                                <img 
                                                    key={idx}
                                                    src={img} 
                                                    alt={`Review ${idx + 1}`}
                                                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Helpful Section */}
                                    <div className="flex items-center gap-4 text-sm">
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            <span>Helpful ({review.helpful})</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                                            <FontAwesomeIcon icon={faThumbsDown} />
                                            <span>({review.notHelpful})</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Write Review Button */}
            <div className="mt-8 text-center">
                <button className="bg-[#EF4F5F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d63d4d] transition-colors">
                    Write a Review
                </button>
            </div>
        </div>
    );
};

export default Reviews;