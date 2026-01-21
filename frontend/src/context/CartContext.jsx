import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [activeRestaurantId, setActiveRestaurantId] = useState(null);

    // Function to refresh the count from localStorage
    const updateCartStats = () => {
        const cartKey = Object.keys(localStorage).find(k => k.startsWith('cart_'));
        if (cartKey) {
            const id = cartKey.replace('cart_', '');
            const data = JSON.parse(localStorage.getItem(cartKey) || '[]');
            const count = data.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(count);
            setActiveRestaurantId(id);
        } else {
            setCartCount(0);
            setActiveRestaurantId(null);
        }
    };

    // Initialize on load
    useEffect(() => {
        updateCartStats();
        // Listen for storage changes in other tabs
        window.addEventListener('storage', updateCartStats);
        return () => window.removeEventListener('storage', updateCartStats);
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, activeRestaurantId, updateCartStats }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);