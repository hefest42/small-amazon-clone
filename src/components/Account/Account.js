import React, { useEffect, useState } from "react";

import { useNavigate, Link, Navigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

import PageWrapper from "../UI/PageWrapper";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

//TODO if no account redirect back to the log in or store
const Account = ({ loggedInAcc }) => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const [passwordDisplay, setPasswordDisplay] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInAcc) {
            navigate("/store");
            return;
        }

        setPasswordDisplay(
            loggedInAcc.password
                .split("")
                .map((item) => "*")
                .join("")
        );
    }, [loggedInAcc, navigate]);

    return (
        <PageWrapper>
            <div className="account center-column">
                <div className="logIn-image">
                    <Link to="/store">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
                    </Link>
                </div>

                <div className="account-inner">
                    <div className="account-inner__title">Account</div>

                    <div className="account-inner__item">
                        <div>Username</div>
                        <div>Nemanja</div>
                    </div>
                    <div className="account-inner__item">
                        <div>Email</div>
                        <div>
                            <span>test@test.com</span>
                            <span>
                                <AiFillEdit onClick={() => setShowChangeEmail(true)} />
                            </span>
                        </div>
                    </div>
                    <div className="account-inner__item">
                        <div>Password</div>
                        <div>
                            <span>{passwordDisplay}</span>
                            <span>
                                <AiFillEdit onClick={() => setShowChangePassword(true)} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {showChangePassword && <ChangePassword changeShowPassword={setShowChangePassword} loggedInAccount={loggedInAcc} />}
            {showChangeEmail && <ChangeEmail changeShowEmail={setShowChangeEmail} loggedInAccount={loggedInAcc} />}
        </PageWrapper>
    );
};

export default Account;
