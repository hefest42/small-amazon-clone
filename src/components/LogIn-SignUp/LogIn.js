import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LogInEmail from "./LogInEmail";
import LogInPassword from "./LogInPassword";
import PageWrapper from "../UI/PageWrapper";
import SmallFooter from "./SmallFooter";

const LogIn = () => {
    const [stepper, setStepper] = useState(1);
    const [allAccounts, setAllAccounts] = useState([]);
    const [userAccount, setUserAccount] = useState("");

    useEffect(() => {
        const getAccounts = async () => {
            try {
                const response = await fetch("https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/accounts.json");

                const data = await response.json();

                const sortedAccounts = [];

                for (const key in data) {
                    sortedAccounts.push({
                        id: key,
                        name: data[key].name,
                        email: data[key].email,
                        password: data[key].password,
                    });
                }

                setAllAccounts(sortedAccounts);
            } catch (error) {}
        };

        getAccounts();
    }, []);

    return (
        <PageWrapper>
            <div className="logIn-image">
                <Link to="/store">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
                </Link>
            </div>

            {stepper === 1 && <LogInEmail accounts={allAccounts} getUserAccount={setUserAccount} changeStep={setStepper} />}
            {stepper === 2 && <LogInPassword changeStep={setStepper} account={userAccount} />}
            <SmallFooter />
        </PageWrapper>
    );
};

export default LogIn;
