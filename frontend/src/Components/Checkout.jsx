import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCreditCard, faTruck } from '@fortawesome/free-solid-svg-icons';
import SuccessModal from './SucessModal';

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    
    // 1. Fixed State: We need both 'cart' and 'formData'
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        address: '',
        apartment: '',
        phone: '',
        paymentMethod: 'cash'
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem(`cart_${id}`);
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, [id]);

    // 2. Fixed Calculations: Defining the variables used in the UI
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxRate = 0.05; 
    const tax = subtotal * taxRate;
    const deliveryFee = subtotal > 0 ? 40 : 0;
    const total = subtotal + tax + deliveryFee;

    // 3. Fixed Functions: Defining the logic for the inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        // 1. Create the Order Object
        const newOrder = {
            orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
            date: new Date().toLocaleString(),
            items: [...cart],
            total: total,
            status: "Food is being prepared",
            restaurantId: id
        };

        // 2. Save to Order History (localStorage)
        const existingOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        localStorage.setItem('orderHistory', JSON.stringify([newOrder, ...existingOrders]));

        // 3. Show Modal
        setIsModalOpen(true);

        // 4. Clear Cart
        localStorage.removeItem(`cart_${id}`);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/'); // Navigate only after they close the modal
    };

    if (cart.length === 0) {
        return (
            <div className="p-20 text-center">
                <h2 className="text-2xl font-bold">Your cart is empty.</h2>
                <button onClick={() => navigate(-1)} className="text-red-500 underline mt-4">Go back to menu</button>
            </div>
        );
    }

    return (
        <div className='max-w-4xl mx-auto py-8 px-4'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b pb-2'>
                Complete Your Order
            </h2>

            <form onSubmit={handleCheckout} className='lg:grid lg:grid-cols-3 lg:gap-8'>
                <div className='lg:col-span-2 space-y-8'>

                    {/* Delivery Section */}
                    <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
                        <h3 className='text-xl font-semibold text-red-600 mb-4 flex items-center'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 w-5 h-5" />
                            Delivery Details
                        </h3>
                        <div className='space-y-4'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Street Address *</label>
                                <input 
                                    type='text' name='address' required onChange={handleChange}
                                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500'
                                    placeholder="e.g., 123 Main St"
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Apartment (Optional)</label>
                                    <input 
                                        type='text' name='apartment' onChange={handleChange}
                                        className='w-full p-3 border border-gray-300 rounded-lg'
                                        placeholder='Flat 4B'
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                    <input 
                                        type='tel' name='phone' required onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="e.g., +91 98765 43210"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
                        <h3 className='text-xl font-semibold text-red-600 mb-4 flex items-center'>
                            <FontAwesomeIcon icon={faCreditCard} className='mr-3 w-5 h-5'/>
                            Payment Method
                        </h3>
                        <div className='space-y-3'>
                            <label className='flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50'>
                                <input 
                                    type='radio' name='paymentMethod' value="cash"
                                    checked={formData.paymentMethod === 'cash'}
                                    onChange={handleChange}
                                    className='form-radio text-red-600 h-4 w-4'
                                />
                                <span className='ml-3 font-medium text-gray-800'>Cash On Delivery (COD)</span>
                            </label>
                            <label className='flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50'>
                                <input 
                                    type='radio' name='paymentMethod' value='online'
                                    checked={formData.paymentMethod === 'online'}
                                    onChange={handleChange}
                                    className='form-radio text-red-600 h-4 w-4' 
                                />
                                <span className="ml-3 font-medium text-gray-800">Pay Online</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className='lg:col-span-1 mt-8 lg:mt-0'>
                    <div className='bg-gray-50 p-6 rounded-xl shadow-lg sticky top-24'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>Your Order</h3>

                        <div className='border-b pb-4 mb-4 space-y-2 max-h-40 overflow-y-auto'>
                            {cart.map(item => (
                                <div key={item.id} className='flex justify-between text-sm text-gray-600'>
                                    <span>{item.quantity} x {item.name}</span>
                                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className='space-y-2 border-b pb-4 mb-4 text-sm'>
                            <div className='flex justify-between text-gray-700'>
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between text-gray-700'>
                                <span>Tax (5%)</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between text-gray-700'>
                                <span className='flex items-center'>
                                    <FontAwesomeIcon icon={faTruck} className='mr-2 text-red-500 w-4 h-4'/>
                                    Delivery
                                </span>
                                <span>₹{deliveryFee.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>

                        <button
                            type='submit'
                            className='w-full mt-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200'
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </form>

            <SuccessModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                totalAmount={total}
            />
        </div>
    );
};

export default Checkout;