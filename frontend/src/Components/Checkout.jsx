import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCreditCard, faTruck, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import SuccessModal from './SucessModal';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { updateCartStats } = useCart();

    
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

    const updateQuantity = (itemId, delta) => {
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                return {...item, quantity: Math.max(0, item.quantity + delta)}
            }
            return item;
        }).filter(item => item.quantity > 0);

        saveAndSync(updatedCart)
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId)
        saveAndSync(updatedCart)
    }

    const saveAndSync = (updatedCart) => {
        setCart(updatedCart);
        if (updatedCart.length === 0) {
            localStorage.removeItem(`cart_${id}`)
        } else {
            localStorage.setItem(`cart_${id}`, JSON.stringify(updatedCart))
        }
        updateCartStats()
    }

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
        updateCartStats()
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/orders'); // Navigate only after they close the modal
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
                <div className='lg:col-span-1'>
                    <div className='bg-white p-6 rounded-2xl shadow-xl border border-gray-50 sticky top-24'>
                        <h3 className='text-xl font-bold text-gray-800 mb-6'>Order Summary</h3>

                        <div className='space-y-6 mb-6 max-h-[40vh] overflow-y-auto pr-2'>
                            {cart.map(item => (
                                <div key={item.id} className='flex  flex-col gap-2 pb-4 border-b border-gray-50 last:border-0'>
                                    <div className='flex justify-between items-start'>
                                        <span className='font-bold text-gray-800 text-sm'>{item.name}</span>
                                        <span className='font-bold text-gray-900 text-sm'>₹{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        {/**quantity controls */}
                                        <div className='flex items-center bg-red-50 text-red-600 rounded-lg border border-red-100'>
                                            <button type='button' onClick={() => updateQuantity(item.id, -1)} className='px-2 py-1 hover:bg-red-100 rounded-l-lg'>
                                                <FontAwesomeIcon icon={faMinus} size='xs'/>
                                            </button>
                                            <span className='px-3 font-bold text-xs'>
                                                {item.quantity}
                                            </span>
                                            <button type="button" onClick={() => updateQuantity(item.id, 1)} className='px-2 py-1 hover:bg-red-100 rounded-r-lg'>
                                                <FontAwesomeIcon icon={faPlus} size="xs" />
                                            </button>
                                        </div>
                                        <button type='button' onClick={() => removeItem(item.id)} className='text-gray-300 hover:text-red-500 transition-colors'>
                                            <FontAwesomeIcon icon={faTrash} size='sm'/>
                                        </button>
                                    </div>
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