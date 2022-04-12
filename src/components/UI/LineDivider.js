import React from "react";

const LineDivider = () => {
    return (
        <div className="line-divider">
            <div className="line-divider__line" style={{ transform: "rotate(180deg)" }}></div>
            <div className="line-divider__line"></div>
        </div>
    );
};

export default LineDivider;
