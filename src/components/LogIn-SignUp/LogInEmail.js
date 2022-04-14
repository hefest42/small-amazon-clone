import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { AiFillCaretRight } from "react-icons/ai";
import { BiError } from "react-icons/bi";

const LogInEmail = ({ accounts, getUserAccount, changeStep }) => {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const emailRef = useRef();

    const setErrorMessageHandler = msg => {
        setShowError(true);
        setErrorMessage(msg);

        emailRef.current.value = "";
    };

    const emailSubmitHandler = e => {
        e.preventDefault();

        const email = emailRef.current.value;

        const account = accounts.filter(acc => acc.email === email);

        if (email === "") {
            setErrorMessageHandler("Please input a email address.");
            return;
        }

        if (account.length === 0) {
            setErrorMessageHandler("Couldn't find an Account with that email. Please try again.");
            return;
        }

        getUserAccount(account[0]);
        changeStep(2);
    };

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
                <form className="logIn-form center-column" onSubmit={emailSubmitHandler}>
                    <div className="logIn-title">Sign-In</div>

                    <div className="logIn-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} />
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
        </>
    );
};

export default LogInEmail;
