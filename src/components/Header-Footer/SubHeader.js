import React, { useState, useEffect } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsCaretDownFill } from "react-icons/bs";

import BrowsingHistory from "./BrowsingHistory";

const SubHeader = ({ changeBackdrop }) => {
    const [showBrowseHistory, setShowBrowseHistory] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (showMenu) {
            setShowBrowseHistory(true);
            changeBackdrop(true);
        }

        if (!showMenu) {
            setShowBrowseHistory(false);
            changeBackdrop(false);
        }
    }, [showMenu, changeBackdrop]);

    return (
        <>
            <div className="subheader">
                <div className="subheader-inner">
                    <div className="subheader-item center">
                        <GiHamburgerMenu className="subheader-burger" />
                        All
                    </div>

                    <div className="subheader-item center">Today's Deals</div>

                    <div className="subheader-item center">Buy Again</div>

                    <div className="subheader-item center">Gift Cards</div>

                    <div className="subheader-item center">Username's Amazon.com</div>

                    <div className="subheader-item center">Customer Service</div>

                    <div className="subheader-item center">Registry</div>

                    <div className="subheader-container" onMouseLeave={() => setShowMenu(false)}>
                        <div className="subheader-item center" onMouseEnter={() => setShowMenu(true)}>
                            Browsing History
                            <BsCaretDownFill className="subheader-arrow" />
                        </div>
                    </div>

                    <div className="subheader-item center">Sell</div>
                </div>
            </div>
            {showBrowseHistory && (
                <div className="history" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                    <BrowsingHistory />
                </div>
            )}
        </>
    );
};

export default SubHeader;
