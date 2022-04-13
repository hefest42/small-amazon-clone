import React from "react";

const LogInPassword = ({ changeStep }) => {
    return (
        <>
            <div className="logIn center-column">
                <form className="logIn-form center-column">
                    <div className="logIn-title">Sign-In</div>

                    <div className="logIn-change">
                        <p>nemanjavidovic@hotmail.com</p>
                        <span className="link" onClick={() => changeStep(1)}>
                            Change
                        </span>
                    </div>

                    <div className="logIn-input">
                        <div className="space-between">
                            <label htmlFor="Password">Password</label>
                            <div className="link">Forgot your password?</div>
                        </div>

                        <input type="Password" id="Password" name="Password" />
                    </div>
                    <button className="button-orange logIn-button" style={{ marginBottom: "1.5rem" }}>
                        Sign-In
                    </button>
                </form>
            </div>
        </>
    );
};

export default LogInPassword;
