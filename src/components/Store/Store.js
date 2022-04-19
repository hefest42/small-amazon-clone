import React from "react";

import PageWrapper from "../UI/PageWrapper";
import Header from "../Header-Footer/Header";
import SubHeader from "../Header-Footer/SubHeader";
import BackDrop from "../UI/BackDrop";
import BrowsingHistory from "../Header-Footer/BrowsingHistory";

const Store = () => {
    return (
        <PageWrapper>
            <Header />
            <SubHeader />
            <BackDrop />
        </PageWrapper>
    );
};

export default Store;
