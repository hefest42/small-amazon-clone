import React from "react";

import LineDivider from "../UI/LineDivider";

const SmallFooter = () => {
    return (
        <div className="smallFooter center-column">
            <LineDivider />
            <div className="smallFooter-links">
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Help</span>
            </div>
            <div className="smallFooter-rights">© 1996-2022, Amazon.com, Inc. or its affiliates</div>
        </div>
    );
};

export default SmallFooter;
