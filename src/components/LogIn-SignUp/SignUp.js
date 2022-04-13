import React from "react";

import { Link } from "react-router-dom";

import { BsInfoLg } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

import PageWrapper from "../UI/PageWrapper";
import LineDivider from "../UI/LineDivider";
import SmallFooter from "./SmallFooter";

const SignUp = () => {
    const formSubmitHandler = e => {
        e.preventDefault();
    };

    return (
        <PageWrapper>
            <div className="logIn-image">
                <Link to="/store">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
                </Link>
            </div>

            <div className="logIn center-column">
                <form className="logIn-form center-column" onClick={formSubmitHandler}>
                    <div className="logIn-title">Create Account</div>

                    <div className="logIn-input">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" autoComplete="off" />
                    </div>

                    <div className="logIn-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="logIn-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" autoComplete="on" placeholder="At least 6 characters" />
                        <p>
                            <BsInfoLg /> Passwords must be at least 6 characters
                        </p>
                    </div>

                    <div className="logIn-input">
                        <label htmlFor="re-password">Re-enter Password</label>
                        <input type="password" id="re-password" name="re-password" autoComplete="on" />
                    </div>
                    <button className="button-orange logIn-button">Continue</button>
                </form>

                <div className="logIn-privacy">
                    <p>
                        By creating an account, you agree to Amazon's <span className="link">Conditions of Use</span> and{" "}
                        <span className="link">Privacy Notice.</span>
                    </p>
                </div>

                <LineDivider />

                <div className="logIn-sign">
                    <div>
                        Already have an account?
                        <Link to="/log-in" className="link">
                            Sign-In <AiFillCaretRight />
                        </Link>
                    </div>
                </div>
            </div>

            <SmallFooter />
        </PageWrapper>
    );
};

export default SignUp;
