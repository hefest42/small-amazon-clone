import React from "react";

import BrowsingHistoryItem from "./BrowsingHistoryItem";

// CSS in header-footer
const BrowsingHistory = () => {
    return (
        <>
            <div className="history-inner">
                <div className="history-inner__edit">
                    <span>Your Browsing History</span>
                    <span>View and Edit</span>
                </div>

                <div className="history-container"></div>
            </div>
        </>
    );
};

export default BrowsingHistory;
