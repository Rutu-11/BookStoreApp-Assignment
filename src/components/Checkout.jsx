import React, { useState } from 'react';

const CheckoutPage = ({ cartItems, onRemoveItem, onIncrementQuantity, onDecrementQuantity }) => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    // Perform checkout logic here
    console.log('Checkout', shippingAddress, paymentMethod);
  };
const calculateTotal = cartItems.reduce((accu, curr)=>{
  return accu + curr.price * curr.quantity
},0)
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div>
        <label htmlFor="shippingAddress">Shipping Address:</label>
        <input
          type="text"
          id="shippingAddress"
          value={shippingAddress}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Select Payment Method</option>
          <option value="creditcard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <h3>Order Summary:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal(cartItems)}</p>
      <button onClick={handleCheckout} disabled={!shippingAddress || !paymentMethod}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
