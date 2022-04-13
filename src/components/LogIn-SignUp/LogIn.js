import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogInEmail from "./LogInEmail";
import LogInPassword from "./LogInPassword";
import PageWrapper from "../UI/PageWrapper";
import SmallFooter from "./SmallFooter";

const LogIn = () => {
    const [stepper, setStepper] = useState(2);

    return (
        <PageWrapper>
            <div className="logIn-image">
                <Link to="/store">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
                </Link>
            </div>

            {stepper === 1 && <LogInEmail />}
            {stepper === 2 && <LogInPassword />}
            <SmallFooter />
        </PageWrapper>
    );
};

export default LogIn;
