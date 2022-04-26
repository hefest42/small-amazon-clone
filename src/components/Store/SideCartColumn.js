import React, { useEffect, useState } from "react";

import { IoIosCloseCircle } from "react-icons/io";

const SideCartColumn = ({ changeBackdrop, cartItems, removeItemFromCart, showCart, showCartHandler }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const mouseEnterHandler = () => {
        showCartHandler(true);
        changeBackdrop(true);
    };

    const mouseLeaveHandler = () => {
        showCartHandler(false);
        changeBackdrop(false);
    };

    useEffect(() => {
        const price = cartItems.map((item) => +item.price).reduce((a, b) => a + b, 0);

        setTotalPrice(price.toFixed(2));
    }, [cartItems]);

    return (
        <div className={showCart ? "cartColumn cartColumn-active" : "cartColumn"} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <div className="cartColumn-inner">
                {showCart && (
                    <div className="cartColumn-price">
                        <p>Total Price:</p>
                        <p>${totalPrice}</p>
                    </div>
                )}

                {cartItems.map((item, i) => (
                    <div className="cartColumn-item" key={item.id}>
                        <div className="cartColumn-item__line">
                            <div className="cartColumn-item__line-close center">
                                {showCart && <IoIosCloseCircle onClick={() => removeItemFromCart(item)} />}
                            </div>
                        </div>

                        <div className="cartColumn-item__product center">
                            <img src={item.imageUrl} alt="product" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideCartColumn;
