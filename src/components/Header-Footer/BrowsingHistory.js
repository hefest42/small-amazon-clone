import React from "react";

import BrowsingHistoryItem from "./BrowsingHistoryItem";

// CSS in header-footer
const BrowsingHistory = () => {
    return (
        <div className="history">
            <div className="history-inner">
                <div className="history-inner__edit">
                    <span>Your Browsing History</span>
                    <span>View and Edit</span>
                </div>

                <div className="history-container">
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/61IiCJ7QggS._AC_SX466_.jpg" />
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/719efVQ1tJL._AC_SY679_.jpg" />
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/61mdM0kzgjL._AC_SX466_.jpg" />
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/61IiCJ7QggS._AC_SX466_.jpg" />
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/719efVQ1tJL._AC_SY679_.jpg" />
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/61mdM0kzgjL._AC_SX466_.jpg" />
                    <BrowsingHistoryItem imageLink="https://m.media-amazon.com/images/I/61IiCJ7QggS._AC_SX466_.jpg" />
                </div>
            </div>
        </div>
    );
};

export default BrowsingHistory;
