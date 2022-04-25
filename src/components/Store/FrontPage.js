import React, { useState } from "react";

import Product from "./Product";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { productList } from "../../store/ProductList";

const bannerLinks = [
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3740_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3740_.jpg",
];

const FrontPage = ({ addItemToCart }) => {
    const [slideNumber, setSlideNumber] = useState(0);

    const moveBannerRight = () => setSlideNumber((state) => (state === -2 ? 0 : state - 1));

    const moveBannerLeft = () => setSlideNumber((state) => (state === 0 ? -2 : state + 1));

    return (
        <div className="front">
            <div className="front-banner center">
                <div className="front-banner__arrows space-between">
                    <div className="front-banner__arrows-left center" onClick={moveBannerLeft}>
                        <BsChevronLeft />
                    </div>
                    <div className="front-banner__arrows-right center" onClick={moveBannerRight}>
                        <BsChevronRight />
                    </div>
                </div>

                {bannerLinks.map((image, i) => (
                    <div className="front-banner__image" key={i} style={{ transform: `translateX(${(i + slideNumber) * 100}%)` }}>
                        <img src={image} alt="banner" />
                    </div>
                ))}
            </div>

            <div className="front-products">
                {productList.map((item) => (
                    <Product key={item.id} product={item} addItem={addItemToCart} />
                ))}
            </div>
        </div>
    );
};

export default FrontPage;
