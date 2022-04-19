import React from "react";

// CSS in header-footer
const BrowsingHistory = () => {
    return (
        <div className="history">
            <div className="history-inner">
                <div className="history-inner__edit">
                    <span>Your Browsing History</span>
                    <span>View and Edit</span>
                </div>

                <div className="history-container"></div>
            </div>
        </div>
    );
};

export default BrowsingHistory;
