import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';

const Order = () => {
    const { restaurant } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();

    // States for Cart and UI
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

    const menu = restaurant?.menu || {};
    const categories = Object.keys(menu);

    // Set initial active category
    useEffect(() => {
        if (categories.length > 0 && activeCategory === "") {
            setActiveCategory(categories[0]);
        }
    }, [categories, activeCategory]);

    if (categories.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-20 text-gray-500">
                <img src="https://b.zmtcdn.com/data/o2_assets/56f3f0196803856272580a13d78278771610444654.png" alt="no-menu" className="w-40 mb-4 opacity-50"/>
                <p className="text-xl font-medium">Menu not available for online ordering.</p>
                <p>Check back later!</p>
            </div>
        );
    }

    // --- HELPER FUNCTIONS ---

    const scrollToCategory = (catName) => {
        setActiveCategory(catName);
        // Create a safe ID (removes spaces)
        const safeId = `category-${catName.replace(/\s+/g, '-')}`;
        const element = document.getElementById(safeId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleAddToCart = (item) => {
        const existingItem = cart.find(i => i.id === item.id);
        if (existingItem) {
            setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white relative">
            
            {/* 1. LEFT SIDEBAR (Sticky) */}
            <div className="hidden lg:block lg:w-1/4 border-r border-gray-100">
                <div className="sticky top-24 p-6 flex flex-col space-y-1">
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Menu Categories</h3>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => scrollToCategory(category)}
                            className={`py-3 px-4 text-left text-sm font-semibold border-l-4 transition-all ${
                                activeCategory === category 
                                ? "border-red-500 text-red-500 bg-red-50" 
                                : "border-transparent text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            {category} ({menu[category].length})
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. MAIN CONTENT (Right Side) */}
            <div className="w-full lg:w-3/4 p-4 lg:p-10 pb-32">
                <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Order Online</h2>
                
                {categories.map((category) => (
                    <div 
                        key={category} 
                        id={`category-${category.replace(/\s+/g, '-')}`} 
                        className="mb-14 scroll-mt-28"
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 sticky top-0 bg-white py-3 z-10 border-b">
                            {category}
                        </h3>
                        
                        <div className="grid gap-10">
                            {menu[category].map((item) => (
                                <div key={item.id} className="flex justify-between items-start group">
                                    <div className="flex-1 pr-6">
                                        <div className="flex items-center gap-2 mb-1">
                                            {/* Veg/Non-Veg Indicator Placeholder */}
                                            <span className="w-3 h-3 border-2 border-green-600 flex items-center justify-center p-0.5"><div className="w-full h-full bg-green-600 rounded-full"></div></span>
                                            <h4 className="font-bold text-gray-800 text-lg group-hover:text-red-500 transition-colors">{item.name}</h4>
                                        </div>
                                        <p className="text-gray-700 font-semibold mb-2">₹{item.price}</p>
                                        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed italic">
                                            {item.description}
                                        </p>
                                    </div>
                                    
                                    <div className="relative flex-shrink-0">
                                        <button 
                                            onClick={() => handleAddToCart(item)}
                                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 border border-gray-200 px-8 py-1.5 rounded-lg font-bold shadow-md hover:bg-gray-50 transition-all uppercase text-sm"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. FLOATING CART SUMMARY (Zomato Style) */}
            {totalItems > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-red-500 text-white p-4 rounded-xl shadow-2xl z-50 flex justify-between items-center animate-bounce-in">
                    <div>
                        <p className="text-xs font-bold uppercase opacity-80">{totalItems} Item{totalItems > 1 ? 's' : ''} Added</p>
                        <p className="text-lg font-bold">₹{totalPrice} <span className="text-xs font-normal opacity-70">plus taxes</span></p>
                    </div>
                    <button 
                        onClick={() => {
                            // Save to localStorage so the Checkout page can read it
                            localStorage.setItem(`cart_${id}`, JSON.stringify(cart));
                            navigate(`/checkout/${id}`);
                        }}
                        className="flex items-center gap-2 bg-white text-red-500 px-6 py-2 rounded-lg font-black uppercase tracking-tight hover:bg-red-50"
                    >
                        View Cart <i className="fi fi-rr-caret-right"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Order;