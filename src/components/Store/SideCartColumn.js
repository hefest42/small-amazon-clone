import React, { useState } from "react";

const SideCartColumn = ({ changeBackdrop }) => {
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
                {isCartFocused && (
                    <div className="cartColumn-inner__left">
                        <div></div>
                    </div>
                )}
                <div className="cartColumn-inner__right">
                    <div className="center">
                        <img src="https://m.media-amazon.com/images/I/61IiCJ7QggS._AC_SX466_.jpg" alt="product" />
                    </div>
                    <div className="center">
                        <img src="https://m.media-amazon.com/images/I/91G9etn8L4L._AC_SY355_.jpg" alt="product" />
                    </div>
                    <div className="center">
                        <img src="https://m.media-amazon.com/images/I/81oORaahKZL._AC_SX355_.jpg" alt="product" />
                    </div>
                    <div className="center">
                        <img src="https://m.media-amazon.com/images/I/61NrWLtBXFL._AC_SY450_.jpg" alt="product" />
                    </div>
                    <div className="center">
                        <img src="https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_SY450_.jpg" alt="product" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCartColumn;
