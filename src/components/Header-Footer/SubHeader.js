import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsCaretDownFill } from "react-icons/bs";

import BrowsingHistory from "./BrowsingHistory";

const SubHeader = ({ changeBackdrop }) => {
    const [showBrowseHistory, setShowBrowseHistory] = useState(false);

    const showBrowseHistoryHandler = () => {
        setShowBrowseHistory(true);
    };

    const hideBrowseHistoryHandler = () => {};

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

                    <div className="subheader-item center" onMouseEnter={showBrowseHistoryHandler} onMouseLeave={hideBrowseHistoryHandler}>
                        Browsing History
                        <BsCaretDownFill className="subheader-arrow" />
                    </div>

                    <div className="subheader-item center">Sell</div>
                </div>
            </div>
            {showBrowseHistory && <BrowsingHistory />}
        </>
    );
};

export default SubHeader;
