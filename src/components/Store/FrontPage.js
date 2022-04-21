import React from "react";

import Product from "./Product";

const bannerLinks = [
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3740_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3740_.jpg",
];

const FrontPage = () => {
    return (
        <div className="front center-column">
            <div className="front-banner center">
                {bannerLinks.map((link, i) => (
                    <img key={i} src={link} alt="banner" />
                ))}
            </div>

            <div className="front-products"></div>
        </div>
    );
};

export default FrontPage;
