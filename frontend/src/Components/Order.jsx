import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import restaurantData from '../../Restaurants'; 


const Order = () => {
    const { id } = useParams();

    const navigate = useNavigate()

    const allRestaurants = [
        ...restaurantData.diningOut, 
        ...restaurantData.orderOnline,
        ...restaurantData.nightLife
    ];
    const restaurant = allRestaurants.find(r => r.id === parseInt(id, 10));

    // State to hold the cart items
    const [cart, setCart] = useState([]);
    
    // State to highlight the active menu category (e.g., 'Recommended')
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        if (restaurant && restaurant.menu) {
            // Set the first menu category as active by default
            const categories = Object.keys(restaurant.menu);
            if (categories.length > 0) {
                setActiveCategory(categories[0]);
            }
        }
    }, [restaurant]);

    if (!restaurant || !restaurant.menu) {
        return <div className="p-6 text-center text-gray-500">Menu not available for online ordering.</div>;
    }

    // Function to add/remove items from the cart (simplified)
    const handleAddToCart = (item, quantity = 1) => {
        const existingItem = cart.find(i => i.id === item.id);
        
        if (existingItem) {
            setCart(cart.map(i => 
                i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Calculate total items and price
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const menu = restaurant.menu;
    const menuCategories = Object.keys(menu);

    // Function to smoothly scroll to the selected category (for a better UX)
    const scrollToCategory = (categoryName) => {
        const element = document.getElementById(`category-${categoryName.replace(/\s+/g, '-')}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveCategory(categoryName);
        }
    };


    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            
            {/* 1. Menu Categories Sidebar (Left Column - Sticky) */}
            <div className="hidden lg:block lg:w-1/4 xl:w-1/5 p-4 bg-white border-r border-gray-200 sticky top-48 self-start max-h-[calc(100vh-12rem)] overflow-y-auto">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Menu</h3>
                <nav className="flex flex-col space-y-2">
                    {menuCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => scrollToCategory(category)}
                            className={`text-left p-2 rounded-lg transition duration-150 ${
                                activeCategory === category 
                                    ? 'bg-red-50 text-red-600 font-semibold border-l-4 border-red-600'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category} ({restaurant.menu[category].length})
                        </button>
                    ))}
                </nav>
            </div>

            {/* 2. Menu Items (Main Column) */}
            <div className="flex-grow lg:w-3/4 xl:w-4/5 p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Order from {restaurant.name}</h2>
                
                {menuCategories.map(category => (
                    <section 
                        key={category} 
                        id={`category-${category.replace(/\s+/g, '-')}`}
                        className="mb-8 p-4 bg-white rounded-xl shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4 sticky top-24 bg-white z-10">{category}</h3>
                        
                        {restaurant.menu[category].map(item => (
                            <div key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                                
                                {/* Item Details */}
                                <div className="flex-grow pr-4">
                                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                                    <p className="text-base font-medium text-gray-700">₹{item.price}</p>
                                </div>
                                
                                {/* Item Image (Optional, but adds visual appeal) */}
                                {item.image && (
                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                )}

                                {/* Add Button */}
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-white border border-red-500 text-red-500 font-bold px-4 py-1.5 rounded-lg transition duration-200 hover:bg-red-500 hover:text-white flex-shrink-0 shadow-md"
                                >
                                    ADD
                                </button>
                            </div>
                        ))}
                    </section>
                ))}
            </div>

            {/* 3. Sticky Cart/Checkout Summary */}
            {totalItems > 0 && (
                <div className="fixed bottom-0 left-0 right-0 lg:bottom-4 lg:right-4 lg:left-auto p-4 lg:w-80 bg-white border-t lg:border border-red-500 lg:rounded-xl shadow-2xl z-20 transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{totalItems} Item{totalItems > 1 ? 's' : ''} in Cart</h4>
                        <button onClick={() => setCart([])} className="text-sm text-red-500 hover:text-red-700">Clear Cart</button>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold">To Pay:</span>
                        <span className="text-xl font-bold text-green-600">₹{totalPrice.toFixed(2)}</span>
                    </div>

                    <button 
                      onClick={() => {
                        sessionStorage.setItem('currentOrderCart', JSON.stringify(cart));
                        navigate(`/checkout/${id}`)
                      }}
                      className="block w-full text-center bg-red-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition duration-200">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Order;