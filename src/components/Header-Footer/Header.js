import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCart } from "react-icons/bs";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <header className="header center">
            <div className="header-inner">
                <div className="header-part center">AMAZON</div>

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

                <div className="header-split header-part">
                    <div className="header-split__right">
                        <span className="header-split__top">Hello, Nemanja</span>
                        <span className="header-split__down">{`Account & Lists`}</span>
                    </div>
                </div>

                <div className="header-split header-part">
                    <div className="header-split__right">
                        <span className="header-split__top">Returns</span>
                        <span className="header-split__down">{`& Orders`}</span>
                    </div>
                </div>

                <div className="header-part ">
                    <div className="header-cart">
                        <BsCart />
                        <span className="header-cart__number">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
