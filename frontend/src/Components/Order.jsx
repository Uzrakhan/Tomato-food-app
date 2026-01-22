import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Import useCart

const Order = () => {
    const { restaurant } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const { updateCartStats } = useCart(); // 2. Get update function

    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

    const menu = restaurant?.menu || {};
    const categories = Object.keys(menu);

    const handleAddToCart = (item) => {
        const existingItem = cart.find(i => i.id === item.id);
        let updatedCart;
        if (existingItem) {
            updatedCart = cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
        } else {
            updatedCart = [...cart, { ...item, quantity: 1 }];
        }
        setCart(updatedCart);
        saveCartToStorage(updatedCart);
    };

    const handleRemoveFromCart = (itemId) => {
        const existingItem = cart.find(i => i.id === itemId);
        let updatedCart;
        if (existingItem.quantity === 1) {
            updatedCart = cart.filter(i => i.id !== itemId);
        } else {
            updatedCart = cart.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
        }
        setCart(updatedCart);
        saveCartToStorage(updatedCart);
    };

// Helper to get quantity of a specific item
const getItemQuantity = (itemId) => {
    const item = cart.find(i => i.id === itemId);
    return item ? item.quantity : 0;
};

    // 3. Load existing cart for THIS restaurant on mount
    useEffect(() => {
        // 1. Load cart once
        const savedCart = JSON.parse(localStorage.getItem(`cart_${id}`) || '[]');
        setCart(savedCart);
        
        // 2. Set initial category only if we don't have one yet
        if (categories.length > 0 && !activeCategory) {
            setActiveCategory(categories[0]);
        }
        
    }, [id]);

    // 4. IMPROVED: Function to save to localStorage and notify Context
    const saveCartToStorage = (updatedCart) => {
        if (updatedCart.length === 0) {
            localStorage.removeItem(`cart_${id}`);
        } else {
            localStorage.setItem(`cart_${id}`, JSON.stringify(updatedCart));
        }
        updateCartStats(); // Trigger NavBar update!
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // ... (scrollToCategory logic remains the same)
    const scrollToCategory = (catName) => {
        setActiveCategory(catName);
        const safeId = `category-${catName.replace(/\s+/g, '-')}`;
        const element = document.getElementById(safeId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (categories.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-20 text-gray-500">
                <img src="https://b.zmtcdn.com/data/o2_assets/56f3f0196803856272580a13d78278771610444654.png" alt="no-menu" className="w-40 mb-4 opacity-50"/>
                <p className="text-xl font-medium">Menu not available for online ordering.</p>
                <p>Check back later!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white relative">
            
            {/* 1. LEFT SIDEBAR */}
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

            {/* 2. MAIN CONTENT */}
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
                                            <span className="w-3 h-3 border-2 border-green-600 flex items-center justify-center p-0.5"><div className="w-full h-full bg-green-600 rounded-full"></div></span>
                                            <h4 className="font-bold text-gray-800 text-lg group-hover:text-red-500 transition-colors">{item.name}</h4>
                                        </div>
                                        <p className="text-gray-700 font-semibold mb-2">₹{item.price}</p>
                                        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed italic">
                                            {item.description}
                                        </p>
                                    </div>
                                    
                                    <div className="relative flex-shrink-0 w-24">
                                        {getItemQuantity(item.id) > 0 ? (
                                        /* QUANTITY SELECTOR (+ / -) */
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 border border-gray-200 flex items-center justify-between w-full rounded-lg font-bold shadow-md overflow-hidden">
                                                <button 
                                                    onClick={() => handleRemoveFromCart(item.id)}
                                                    className="px-2 py-1.5 hover:bg-gray-50 text-lg flex-1"
                                                >
                                                    −
                                                </button>
                                                <span className="text-sm px-1">{getItemQuantity(item.id)}</span>
                                                <button 
                                                    onClick={() => handleAddToCart(item)}
                                                    className="px-2 py-1.5 hover:bg-gray-50 text-lg flex-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            /* STANDARD ADD BUTTON */
                                            <button 
                                                onClick={() => handleAddToCart(item)}
                                                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 border border-gray-200 px-7 py-1.5 rounded-lg font-bold shadow-md hover:bg-gray-50 transition-all uppercase text-sm active:scale-95 w-full"
                                            >
                                                Add
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. FLOATING CART SUMMARY */}
            {totalItems > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-red-500 text-white p-4 rounded-xl shadow-2xl z-50 flex justify-between items-center animate-in fade-in slide-in-from-bottom-4">
                    <div>
                        <p className="text-xs font-bold uppercase opacity-80">{totalItems} Item{totalItems > 1 ? 's' : ''} Added</p>
                        <p className="text-lg font-bold">₹{totalPrice} <span className="text-xs font-normal opacity-70">plus taxes</span></p>
                    </div>
                    <button 
                        onClick={() => navigate(`/checkout/${id}`)}
                        className="flex items-center gap-2 bg-white text-red-500 px-6 py-2 rounded-lg font-black uppercase tracking-tight hover:bg-red-50 active:scale-95 transition-all"
                    >
                        View Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Order;