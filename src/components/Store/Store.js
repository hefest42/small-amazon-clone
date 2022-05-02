import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import PageWrapper from "../UI/PageWrapper";
import Header from "../Header-Footer/Header";
import SubHeader from "../Header-Footer/SubHeader";
import BackDrop from "../UI/BackDrop";
import FrontPage from "./FrontPage";
import SideCartColumn from "./SideCartColumn";
import Cart from "../Cart/Cart";

// project id
// clone-c99fe

const Store = ({ loggedInAcc }) => {
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
        if (cart.length === 0) {
            setIsCartFocused(false);
            setShowBackdrop(false);
        }
    }, [cart]);

    return (
        <PageWrapper>
            <Header cartItems={cart} showCartHandler={setIsCartFocused} changeBackdrop={setShowBackdrop} account={loggedInAcc} />
            <SubHeader changeBackdrop={setShowBackdrop} />
            {showBackdrop && <BackDrop />}

            <Routes>
                <Route
                    path=""
                    element={
                        <>
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
                        </>
                    }
                />

                <Route path="cart" element={<Cart cartItems={cart} removeItemFromCart={removeItemFromCartHandler} />} />
            </Routes>
        </PageWrapper>
    );
};

export default Store;
