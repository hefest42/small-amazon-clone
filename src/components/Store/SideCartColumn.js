import React from "react";

const SideCartColumn = ({ changeBackdrop }) => {
    return <div className="cartColumn" onMouseEnter={() => changeBackdrop(true)}></div>;
};

export default SideCartColumn;
