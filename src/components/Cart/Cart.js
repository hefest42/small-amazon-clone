import React from "react";

import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-left">
                <CartItem />
            </div>

            <div className="cart-right center-column">
                <div className="cart-right__inner">
                    <div className="cart-right__title">Cart</div>
                    <div className="cart-right__total space-between">
                        <div>Total:</div>
                        <div>$99.99</div>
                    </div>
                    <button className="button-orange">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
