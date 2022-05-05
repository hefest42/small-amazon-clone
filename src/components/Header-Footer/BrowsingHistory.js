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

                <div className="history-container">
                    <div className="history-container__warning center">
                        <p>You haven't checked out any products. When you do they will show up here!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrowsingHistory;
