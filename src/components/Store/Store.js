import React, { useEffect, useState } from "react";

import PageWrapper from "../UI/PageWrapper";
import Header from "../Header-Footer/Header";
import SubHeader from "../Header-Footer/SubHeader";
import BackDrop from "../UI/BackDrop";
import FrontPage from "./FrontPage";
import SideCartColumn from "./SideCartColumn";

const Store = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [isCartFocused, setIsCartFocused] = useState(false);
    const [cart, setCart] = useState([]);

    const addItemToCartHandler = (item) => {
        if (cart.filter((cartItem) => cartItem.id === item.id).length > 0) return;

        setCart((state) => [...state, item]);
    };

    const removeItemFromCartHandler = (item) => {
        setCart((state) => state.filter((cartItem) => cartItem.id !== item.id));
    };

    useEffect(() => {
        if (cart.length === 0) setShowBackdrop(false);
    }, [cart]);

    return (
        <PageWrapper>
            <Header cartItems={cart} showCartHandler={setIsCartFocused} changeBackdrop={setShowBackdrop} />
            <SubHeader changeBackdrop={setShowBackdrop} />
            {showBackdrop && <BackDrop />}
            <FrontPage addItemToCart={addItemToCartHandler} />
            {cart.length > 0 && (
                <SideCartColumn
                    changeBackdrop={setShowBackdrop}
                    cartItems={cart}
                    removeItemFromCart={removeItemFromCartHandler}
                    showCart={isCartFocused}
                    showCartHandler={setIsCartFocused}
                />
            )}
        </PageWrapper>
    );
};

export default Store;
