import React from "react";

const CartItem = () => {
    return (
        <div className="cartItem center">
            <div className="cartItem-inner space-between">
                <div className="cartItem-image">
                    <img src="https://m.media-amazon.com/images/I/71ub9aXwh0L._AC_SY355_.jpg" alt="" />
                </div>

                <div className="cartItem-info">
                    <div className="cartItem-info__container space-between">
                        <div>Headphones</div>
                        <div>$49.99</div>
                    </div>

                    <div className="cartItem-info__container space-between">
                        <div>Product Name</div>
                        <div className="cartItem-info__button">
                            <button className="button-orange">Remove from Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
