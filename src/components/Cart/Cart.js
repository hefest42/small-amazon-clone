import React from "react";

import { Link } from "react-router-dom";

import CartItem from "./CartItem";

const Cart = ({ cartItems, removeItemFromCart }) => {
    const totalPrice = cartItems
        .map((item) => +item.price)
        .reduce((a, b) => a + b, 0)
        .toFixed(2);

    return (
        <div className="cart">
            {cartItems.length === 0 && (
                <div className="cart-empty center-column">
                    <p>You have no items in your Cart</p>
                    <Link to="/store">Browse our selection</Link>
                </div>
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="cart-left">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} removeItem={removeItemFromCart} />
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
                </>
            )}
        </div>
    );
};

export default Cart;
