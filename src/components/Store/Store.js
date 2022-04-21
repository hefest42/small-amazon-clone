import React, { useState } from "react";

import PageWrapper from "../UI/PageWrapper";
import Header from "../Header-Footer/Header";
import SubHeader from "../Header-Footer/SubHeader";
import BackDrop from "../UI/BackDrop";
import FrontPage from "./FrontPage";

const Store = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);

    return (
        <PageWrapper>
            <Header />
            <SubHeader changeBackdrop={setShowBackdrop} />
            {showBackdrop && <BackDrop />}
            <FrontPage />
        </PageWrapper>
    );
};

export default Store;
