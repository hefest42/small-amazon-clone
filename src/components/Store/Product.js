import React from "react";

const Product = () => {
    return (
        <div className="product">
            <div className="product-image">
                <img src="https://m.media-amazon.com/images/I/719efVQ1tJL._AC_SY679_.jpg" alt="product" />
            </div>
            <div className="product-title center">Logitech 403</div>
            <div className="product-button  center">
                <button className="button-orange">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
