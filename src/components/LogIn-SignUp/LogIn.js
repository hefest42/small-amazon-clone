import React from "react";
import { Link } from "react-router-dom";

import { AiFillCaretRight } from "react-icons/ai";

import PageWrapper from "../UI/PageWrapper";
import SmallFooter from "./SmallFooter";

const LogIn = () => {
    return (
        <PageWrapper>
            <div className="logIn-image">
                <Link to="/store">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
                </Link>
            </div>

            <div className="logIn center-column">
                <form className="logIn-form center-column">
                    <div className="logIn-title">Sign-In</div>

                    <div className="logIn-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <button className="button-orange logIn-button">Continue</button>

                    <div className="logIn-privacy">
                        <p>
                            By continuing, you agree to Amazon's <span className="link">Conditions of Use</span> and{" "}
                            <span className="link">Privacy Notice.</span>
                        </p>
                    </div>

                    <div className="logIn-help">
                        <p>
                            <AiFillCaretRight /> <span className="link">Need help?</span>
                        </p>
                    </div>
                </form>
            </div>

            <div className="newTo">
                <div className="newTo-amazon">
                    <div className="newTo-amazon__line"></div>
                    <div className="newTo-amazon__text">New to Amazon?</div>
                    <div className="newTo-amazon__line"></div>
                </div>

                <Link to="/sign-up">
                    <button className="newTo-button">Create your Amazon account</button>
                </Link>
            </div>

            <SmallFooter />
        </PageWrapper>
    );
};

export default LogIn;
