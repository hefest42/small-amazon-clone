import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { BiError } from "react-icons/bi";

const LogInPassword = ({ account, changeStep }) => {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const passwordRef = useRef();
    const navigate = useNavigate();

    const setErrorMessageHandler = msg => {
        setShowError(true);
        setErrorMessage(msg);

        passwordRef.current.value = "";
    };

    const passwordSubmitHandler = e => {
        e.preventDefault();

        const password = passwordRef.current.value;

        if (password === "") {
            setErrorMessage("Please input a password.");
            return;
        }

        if (account.password !== password) {
            setErrorMessageHandler("Something went wrong. Please check your password and try again.");
            return;
        }

        if (account.password === password) navigate("/store");
    };

    useEffect(() => {
        if (account === "") changeStep(1);
    });

    return (
        <>
            {showError && (
                <div className="logIn-error">
                    <div className="logIn-error__svg center">
                        <BiError />
                    </div>
                    <div className="logIn-error__text center">{errorMessage}</div>
                </div>
            )}

            <div className="logIn center-column">
                <form className="logIn-form center-column" onSubmit={passwordSubmitHandler}>
                    <div className="logIn-title">Sign-In</div>

                    <div className="logIn-change">
                        <p>{account.email}</p>
                        <span className="link" onClick={() => changeStep(1)}>
                            Change
                        </span>
                    </div>

                    <div className="logIn-input">
                        <div className="space-between">
                            <label htmlFor="Password">Password</label>
                            <div className="link">Forgot your password?</div>
                        </div>

                        <input type="Password" id="Password" name="Password" ref={passwordRef} />
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
