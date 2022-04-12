import React from "react";

import PageWrapper from "../UI/PageWrapper";
import LineDivider from "../UI/LineDivider";

const LogIn = () => {
    return (
        <PageWrapper>
            <div>LOGO</div>
            <div className="logIn center-column">
                <form className="logIn-form center-column">
                    <div className="logIn-title">Create Account</div>

                    <div className="logIn-input">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" />
                    </div>

                    <div className="logIn-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="logIn-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className="logIn-input">
                        <label htmlFor="re-password">Re-enter Password</label>
                        <input type="password" id="re-password" name="re-password" />
                    </div>
                    <button className="button-orange logIn-button">Continue</button>
                </form>

                <div className="logIn-privacy">
                    <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                </div>

                <LineDivider />

                <div className="logIn-sign">
                    <div>Already have an account? Sing-In</div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default LogIn;
