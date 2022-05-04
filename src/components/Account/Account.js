import React from "react";

import { useNavigate, Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

import PageWrapper from "../UI/PageWrapper";

//TODO if no account redirect back to the log in or store
const Account = ({ loggedInAcc }) => {
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
                                <AiFillEdit />
                            </span>
                        </div>
                    </div>
                    <div className="account-inner__item">
                        <div>Password</div>
                        <div>
                            <span>********</span>
                            <span>
                                <AiFillEdit />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Account;
