import React, { useState } from "react";

import PageWrapper from "../UI/PageWrapper";
import Header from "../Header-Footer/Header";
import SubHeader from "../Header-Footer/SubHeader";
import BackDrop from "../UI/BackDrop";
import FrontPage from "./FrontPage";

const Store = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [cart, setCart] = useState([]);

    const addItemToCartHandler = (item) => {
        if (cart.filter((cartItem) => cartItem.id === item.id).length > 0) return;

        setCart((state) => [...state, item]);
    };

    return (
        <PageWrapper>
            <Header cartItems={cart} />
            <SubHeader changeBackdrop={setShowBackdrop} />
            {showBackdrop && <BackDrop />}
            <FrontPage addItemToCart={addItemToCartHandler} />
        </PageWrapper>
    );
};

export default Store;
