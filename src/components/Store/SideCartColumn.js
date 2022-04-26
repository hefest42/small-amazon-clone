import React, { useState } from "react";

import { IoIosCloseCircle } from "react-icons/io";

const SideCartColumn = ({ changeBackdrop, cartItems, removeItemFromCart }) => {
    const [isCartFocused, setIsCartFocused] = useState(false);

    const mouseEnterHandler = () => {
        setIsCartFocused(true);
        changeBackdrop(true);
    };

    const mouseLeaveHandler = () => {
        setIsCartFocused(false);
        changeBackdrop(false);
    };

    return (
        <div
            className={isCartFocused ? "cartColumn cartColumn-active" : "cartColumn"}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <div className="cartColumn-inner">
                {cartItems.map((item, i) => (
                    <div className="cartColumn-item" key={item.id}>
                        {isCartFocused && (
                            <div className="cartColumn-item__line">
                                <div className="cartColumn-item__line-close center">
                                    <IoIosCloseCircle onClick={() => removeItemFromCart(item)} />
                                </div>
                            </div>
                        )}
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
