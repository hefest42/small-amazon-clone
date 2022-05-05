import React from "react";

const CartItem = ({ item, removeItem }) => {
    // const updateUserInfoHandler = async () => {
    //     console.log("test");
    //     const response = await fetch("https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/accounts/-N13fimkeDDqtLUgU8y2.json", {
    //         method: "PATCH",
    //         body: JSON.stringify({ name: "Nemanja" }),
    //         headers: {
    //             "CONTENT-TYPE": "application/json",
    //         },
    //     });

    //     console.log(response);
    // };

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
                            <button
                                className="button-orange"
                                onClick={() => {
                                    removeItem(item);
                                }}
                            >
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
