import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        }
        let shipping = 0;
        if (total > 65) {
          shipping = 2.99;
        } 
        else if (total > 45) {
          shipping = 4.99;
        } 
        else if (total > 25) {
          shipping = 12.99;
        } 
        else if (total > 135) {
          shipping = 25.99;
        }
        const tax = total * (12/100);
        const formatNumber = num => {
            const precision = num.toFixed(2);
            return Number(precision);
        }
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered: {cart.length}</h3>
            <h4>Product Price: { formatNumber(total)}</h4>
            <p><small>Shipping Charge: {formatNumber(shipping)}</small></p>
            <p><small>Tax: {formatNumber(tax)}</small></p>
             <h4>Total Price: {formatNumber(total + shipping +tax)}</h4>
        </div>
    );
};

export default Cart;