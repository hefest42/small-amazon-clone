import React, { useState } from "react";

import { Link } from "react-router-dom";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCart, BsCaretDownFill } from "react-icons/bs";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

const Header = ({ cartItems, showCartHandler, changeBackdrop, account }) => {
    const [showSettings, setShowSettings] = useState(false);

    const mouseEnterCartHandler = () => {
        if (cartItems.length > 0) {
            showCartHandler(true);
            changeBackdrop(true);
        }
    };

    const mouseLeaveCartHandler = () => {
        showCartHandler(false);
        changeBackdrop(false);
    };

    return (
        <header className="header center">
            <div className="header-inner">
                <Link to="/store" className="header-part center">
                    <div className=" center">AMAZON</div>
                </Link>

                <div className="header-split header-part center">
                    <div className="header-split__left">
                        <HiOutlineLocationMarker />
                    </div>
                    <div className="header-split__right center-column">
                        <span className="header-split__top">Deliver to</span>
                        <span className="header-split__down">Country</span>
                    </div>
                </div>

                <div className="header-form center">
                    <div className="header-form__inner center">
                        <div className="header-form__left center">
                            <div className="space-between">
                                <span>All</span>
                                <span>
                                    <AiFillCaretDown />
                                </span>
                            </div>
                        </div>
                        <div className="header-form__middle center">
                            <input type="text" />
                        </div>
                        <div className="header-form__right center">
                            <AiOutlineSearch />
                        </div>
                    </div>
                </div>

                {account && (
                    <>
                        <div className="header-split header-part" onMouseEnter={() => setShowSettings(true)}>
                            <div className="header-split__right">
                                <span className="header-split__top">{`Hello, ${account.name}`}</span>
                                <span className="header-split__down">
                                    {`Account & Lists`}
                                    <BsCaretDownFill className="subheader-arrow" />
                                </span>
                            </div>
                        </div>

                        {showSettings && (
                            <div className="header-settings center-column" onMouseLeave={() => setShowSettings(false)}>
                                <Link to="/account">
                                    <p>Account Settings</p>
                                </Link>
                                <p>Log Out</p>
                            </div>
                        )}
                    </>
                )}

                {!account && (
                    <Link to="/log-in" className="header-split header-part">
                        <div>Log In</div>
                    </Link>
                )}

                <div className="header-split header-part">
                    <div className="header-split__right">
                        <span className="header-split__top">Returns</span>
                        <span className="header-split__down">{`& Orders`}</span>
                    </div>
                </div>

                <Link to="/store/cart">
                    <div className="header-part" onMouseEnter={mouseEnterCartHandler} onMouseLeave={mouseLeaveCartHandler}>
                        <div className="header-cart">
                            <BsCart />
                            <span className="header-cart__number">{cartItems.length}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
