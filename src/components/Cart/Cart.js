import React from "react";

import CartItem from "./CartItem";

const Cart = ({ cartItems, removeItemFromCart }) => {
    const totalPrice = cartItems
        .map((item) => +item.price)
        .reduce((a, b) => a + b, 0)
        .toFixed(2);

    return (
        <div className="cart">
            <div className="cart-left">
                {cartItems.map((item) => (
                    <CartItem item={item} removeItem={removeItemFromCart} />
                ))}
            </div>

            <div className="cart-right center-column">
                <div className="cart-right__inner">
                    <div className="cart-right__title">Cart</div>
                    <div className="cart-right__total space-between">
                        <div>Total:</div>
                        <div>${totalPrice}</div>
                    </div>
                    <button className="button-orange">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
