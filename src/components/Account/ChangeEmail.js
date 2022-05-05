import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { BiError } from "react-icons/bi";

const ChangeEmail = ({ changeShowEmail, loggedInAccount }) => {
    const navigate = useNavigate();
    const [stepper, setStepper] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const confirmCurrentPassRef = useRef();
    const emailRef = useRef();

    const confirmPasswordHandler = (e) => {
        e.preventDefault();

        const enteredPassword = confirmCurrentPassRef.current.value;

        if (loggedInAccount.password === enteredPassword) {
            setStepper(2);
            setErrorMessage("");
        } else {
            setErrorMessage("Password does not match. Please try again.");
            confirmCurrentPassRef.current.value = "";
        }
    };

    const updateEmailHandler = async (newEmail) => {
        try {
            const response = await fetch(`https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/accounts/${loggedInAccount.id}.json`, {
                method: "PATCH",
                body: JSON.stringify({ email: newEmail }),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });

            if (!response.ok) throw new Error();

            navigate("/log-in");
        } catch (error) {
            setErrorMessage("Oops... Something went wrong. Please try again.");
        }
    };

    const changeEmailHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current.value;

        if (enteredEmail === "") {
            setErrorMessage("Please enter a email.");
            return;
        }

        updateEmailHandler(enteredEmail);
    };

    return (
        <div className="changePassword backdrop">
            <div className="changePassword-wrapper">
                {errorMessage !== "" && (
                    <div className="logIn-error changePassword-error">
                        <div className="logIn-error__svg center">
                            <BiError />
                        </div>
                        <div className="logIn-error__text center">{errorMessage}</div>
                    </div>
                )}

                <div className="changePassword-close">
                    <div>Email Change</div>
                    <div>
                        <AiOutlineClose onClick={() => changeShowEmail(false)} />
                    </div>
                </div>

                {stepper === 1 && (
                    <form className="changePassword-inner center-column" onSubmit={confirmPasswordHandler}>
                        <div className="changePassword-input">
                            <label htmlFor="changeEmail">Enter your current Password</label>
                            <input type="password" name="changeEmail" id="changeEmail" autoComplete="yes" ref={confirmCurrentPassRef} />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}

                {stepper === 2 && (
                    <form className="changePassword-inner center-column" onSubmit={changeEmailHandler}>
                        <div className="changePassword-input">
                            <label htmlFor="email2">Enter your new Email</label>
                            <input type="email" name="email2" id="email2" autoComplete="yes" ref={emailRef} />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ChangeEmail;
