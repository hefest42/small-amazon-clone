import React from "react";

const CartItem = ({ item, removeItem }) => {
    return (
        <div className="cartItem center">
            <div className="cartItem-inner space-between">
                <div className="cartItem-image">
                    <img src={item.imageUrl} alt="" />
                </div>

                <div className="cartItem-info">
                    <div className="cartItem-info__container space-between">
                        <div>{item.category}</div>
                        <div>${item.price}</div>
                    </div>

                    <div className="cartItem-info__container space-between">
                        <div>{item.name}</div>
                        <div className="cartItem-info__button">
                            <button className="button-orange" onClick={() => removeItem(item)}>
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
