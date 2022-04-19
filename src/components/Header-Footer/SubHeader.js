import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsCaretDownFill } from "react-icons/bs";

import BrowsingHistory from "./BrowsingHistory";

const SubHeader = () => {
    return (
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

                <div className="subheader-item center">
                    Browsing History
                    <BsCaretDownFill className="subheader-arrow" />
                    <BrowsingHistory />
                </div>
                <div className="subheader-item center">Sell</div>
            </div>
        </div>
    );
};

export default SubHeader;
