import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCreditCard, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom'
import restaurantData from '../../Restaurants.js';


const Checkout = () => {
  const { id } = useParams();
  const [cart,setCart] = useState([]);
  const [restaurant,setRestaurant] = useState(null);

  //fetch cart data & restaurant data on load
  useEffect(() => {
    //fetch cart data
    const savedCart = sessionStorage.getItem('currentOrderCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    //fetch restaurant data for context
    const allRestaurants = [
      ...restaurantData.diningOut,
      ...restaurantData.orderOnline,
      ...restaurantData.nightLife
    ];

    const currentRestaurant = allRestaurants.find(r => r.id === parseInt(id, 10));
    setRestaurant(currentRestaurant)
  }, [id]); //re-run if ID changes

  //calculate totals
  const subtotal = cart.reduce((sum,item) => sum + (item.price * item.quantity), 0);
  const taxRate = 0.08;
  const deliveryFee = 5.00;
  const safeSubtotal = typeof subtotal === 'number' ? subtotal : 0;
  const tax = safeSubtotal * taxRate;
  const total = safeSubtotal + tax + deliveryFee;

  const [formData, setFormData] = useState({
    address: '',
    apartment: '',
    phone: '',
    paymentMethod: 'cash'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("Checkout submitted!", formData, { total, cart, restaurant: restaurant?.name });
    alert(`Order placed with ${restaurant?.name}! Total: $${total.toFixed(2)}`);
    setCart([]);
  }

  if (!restaurant) return <div className='p-6 text-center text-xl text-gray-700'>Loading restaurant details...</div>
  if (cart.length === 0) return <div className='p-6 text-center text-xl text-red-600'>Your cart is empty. Please add items to order.</div>

  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6 border-b pb-2'>
        Complete Your Order
      </h2>

      <form className='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className='lg:col-span-2 space-y-8'>

          <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
            <h3 className='text-xl font-semibold text-red-600 mb-4 flex items-center'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 w-5 h-5" />
              Delivery Details
            </h3>
            <div className='space-y-4'>
              <div>
                <label htmlFor="">
                  Street Address *
                </label>
                <input 
                  type='text'
                  id='address'
                  name='address'
                  required
                  onChange={handleChange}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150'
                  placeholder="e.g., 123 Main St"
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='apartment'>
                    Apartment/Suite (Optional)
                  </label>
                  <input 
                    type='text'
                    id='apartment'
                    name='apartment'
                    onChange={handleChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150'
                    placeholder='Flat 4B'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input 
                    type='tel'
                    id='phone'
                    name='phone'
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
                    placeholder="e.g., +91 98765 43210"
                  />
                </div>
              </div>
            </div>
          </div>

          {/** payment method */}
          <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
            <h3 className='text-xl font-semibold text-red-600 mb-4 flex items-center'>
              <FontAwesomeIcon icon={faCreditCard} className='mr-3 w-5 h-5'/>
              Payment Method
            </h3>
            <div className='space-y-3'>
              <label className='flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50'>
                <input 
                  type='radio'
                  name='paymentMethod'
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  className='form-radio text-red-600 h-4 w-4'
                />
                <span className='ml-3 font-medium text-gray-800'>
                  Cash On Delivery (COD)
                </span>
              </label>
              <label className='flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50'>
                <input
                  type='radio'
                  name='paymentMethod'
                  value='online'
                  checked={formData.paymentMethod === 'online'}
                  onChange={handleChange}
                  className='form-radio text-red-600 h-4 w-4' 
                />
                <span className="ml-3 font-medium text-gray-800">Pay Online (Card/UPI/Net Banking)</span>
                {/* Note: Actual payment integration would go here */}
              </label>
            </div>
          </div>
        </div>

        {/* order summary */}
        <div className='lg:col-span-1 mt-8 lg:mt-0'>
          <div className='bg-gray-50 p-6 rounded-xl shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Your Order</h3>

            {/* item list */}
            <div className='border-b pb-4 mb-4 space-y-2'>
              {cart.map(item => (
                <div key={item.id} className='flex justify-between text-sm text-gray-600'>
                  <span>{item.quantity}x{item.name}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/** summary details */}
            <div className='space-y-2 border-b pb-4 mb-4'>
              <div className='flex justify-between text-gray-700'>
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-gray-700'>
                <span>Tax ({taxRate * 100}%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-gray-700'>
                <span className='flex items-center'>
                  <FontAwesomeIcon icon={faTruck} className='mr-2 text-red-500 w-4 h-4'/>
                  Delivery Fee
                </span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
            </div>

            {/* total */}
            <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
              <span>Total Payable</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            {/** checkout button */}
            <button
              type='submit'
              onClick={handleCheckout}
              className='w-full mt-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-red-300'
            >
              Pay & Place Order (₹{total.toFixed(2)})
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Checkout