import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        setOrders(history);
    }, []);

    // Empty State View
    if (orders.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
                <img 
                    src="https://b.zmtcdn.com/data/o2_assets/5ba18635741639f972b94726553257851610444654.png" 
                    className="w-64 opacity-60 mb-6" 
                    alt="no orders" 
                />
                <h2 className="text-2xl font-bold text-gray-800">No orders placed yet</h2>
                <p className="text-gray-500 mt-2 max-w-xs">
                    You haven't ordered anything yet. Explore the best restaurants near you!
                </p>
                <button 
                    onClick={() => navigate('/')} 
                    className="mt-8 bg-red-500 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-red-100 hover:bg-red-600 transition-all"
                >
                    Browse Restaurants
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-10">
                <button 
                    onClick={() => navigate('/')}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all border border-gray-100"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div>
                    <h1 className="text-3xl font-black text-gray-800">Your Orders</h1>
                    <p className="text-sm text-gray-500 font-medium">History of your delicious meals</p>
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
                {orders.map((order) => (
                    <div 
                        key={order.orderId} 
                        className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 hover:shadow-md transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1">
                                    ID: {order.orderId}
                                </p>
                                <p className="text-sm font-bold text-gray-800">{order.date}</p>
                            </div>
                            <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg border border-orange-100">
                                <FontAwesomeIcon icon={faCircle} className="text-[6px] animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-wide">
                                    {order.status}
                                </span>
                            </div>
                        </div>

                        {/* Dashed Item List */}
                        <div className="border-t border-b border-dashed border-gray-200 py-5 my-4">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center text-sm mb-2 last:mb-0">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                                            {item.quantity}x
                                        </span>
                                        <span className="text-gray-700 font-medium">{item.name}</span>
                                    </div>
                                    <span className="text-gray-900 font-semibold">₹{item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        {/* Footer Info */}
                        <div className="flex justify-between items-center pt-2">
                            <div>
                                <p className="text-xs text-gray-400 font-medium mb-0.5">Amount Paid</p>
                                <p className="font-black text-xl text-gray-900">₹{order.total.toFixed(2)}</p>
                            </div>
                            <button 
                                onClick={() => navigate('/')}
                                className="text-red-500 font-bold text-sm border-2 border-red-500 px-6 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-95"
                            >
                                Reorder
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Suggestions */}
            <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm italic">Craving something else?</p>
                <button 
                    onClick={() => navigate('/')}
                    className="mt-2 text-red-500 font-bold hover:underline"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderHistory;