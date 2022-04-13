import React from "react";

const LogInPassword = () => {
    return (
        <>
            <div className="logIn center-column">
                <form className="logIn-form center-column">
                    <div className="logIn-title">Sign-In</div>

                    <div className="logIn-input">
                        <label htmlFor="Password">Password</label>
                        <input type="Password" id="Password" name="Password" />
                    </div>
                    <button className="button-orange logIn-button">Continue</button>
                </form>
            </div>
        </>
    );
};

export default LogInPassword;
