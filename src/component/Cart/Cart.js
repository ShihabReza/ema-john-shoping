import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0
    let shiping = 0
    for(const product of cart){
        total = total + product.price
        shiping = shiping + product.shipping
    }
    const tax = parseFloat((total* 0.1).toFixed(2))
    const grantTotal = total+shiping+tax
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <h4>Selected Items: {cart.length}</h4>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: {shiping}</p>
                <p>Tax: ${tax}</p>
                <h3 className='red'>Grand Total: ${grantTotal}</h3>
        </div>
    );
};

export default Cart;