import React from "react";

const Product = ({ product, addItem }) => {
    const cartItemHandler = () => {
        addItem(product);
    };

    return (
        <div className="product">
            <div className="product-image">
                <img src={product.imageUrl} alt="product" />
            </div>
            <div className="product-title center-column">
                <span>{product.name}</span>
                <span>${product.price}</span>
            </div>
            <div className="product-button  center">
                <button className="button-orange" onClick={cartItemHandler}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
