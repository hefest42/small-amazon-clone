import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const BrowsingHistoryItem = ({ imageLink }) => {
    const [showRemove, setShowRemove] = useState(false);

    return (
        <div className="history-item center-column" onMouseEnter={() => setShowRemove(true)} on onMouseLeave={() => setShowRemove(false)}>
            <div className="history-item__image center">
                <img src={imageLink} alt="keyboard" />
            </div>

            <div className="history-item__title">title of the product</div>

            <div className="history-item__line">
                <div className="history-line center">
                    <div className="history-line__left"></div>
                    <div className="history-line__right"></div>
                </div>

                {showRemove ? (
                    <div className="history-line__x center">
                        <AiOutlineClose />
                    </div>
                ) : (
                    <div className="history-line__dot"></div>
                )}
            </div>
        </div>
    );
};

export default BrowsingHistoryItem;

{
    /* <div className="history-line__dot"></div>
<div className="history-line__x center">
<AiOutlineClose />
</div> */
}
