import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { BiError } from "react-icons/bi";

//TODO add logic for actually changing password
const ChangePassword = ({ changeShowPassword, loggedInAccount }) => {
    const navigate = useNavigate();
    const [stepper, setStepper] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const confirmCurrentPassRef = useRef();
    const newPassRef = useRef();
    const confirmNewPassRef = useRef();

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

    const changePasswordErrorHandler = (msg) => {
        setErrorMessage(msg);
        newPassRef.current.value = "";
        confirmNewPassRef.current.value = "";
    };

    const updatedPasswordHandler = async (newPass) => {
        try {
            const response = await fetch(`https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/accounts/${loggedInAccount.id}.json`, {
                method: "PATCH",
                body: JSON.stringify({ password: newPass }),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });

            if (!response.ok) throw new Error();

            navigate("/log-in");
        } catch (error) {
            changePasswordErrorHandler("Oops... Something went wrong. Please try again.");
        }
    };

    const changePasswordHandler = (e) => {
        e.preventDefault();

        const newPassword = newPassRef.current.value;
        const confirmNewPassword = confirmNewPassRef.current.value;

        if (newPassword === "" || confirmNewPassword === "") {
            changePasswordErrorHandler("Please fill out the fields.");
            return;
        }

        if (newPassword.split("").length < 6 || confirmNewPassword.split("").length < 6) {
            changePasswordErrorHandler("Password be must be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            changePasswordErrorHandler("Password don't match. Please check your spelling and try again.");
            return;
        }

        if (newPassword === confirmNewPassword) {
            updatedPasswordHandler(newPassword);
        }
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
                    <div>Password Change</div>
                    <div>
                        <AiOutlineClose onClick={() => changeShowPassword(false)} />
                    </div>
                </div>

                {stepper === 1 && (
                    <form className="changePassword-inner center-column" onSubmit={confirmPasswordHandler}>
                        <div className="changePassword-input">
                            <label htmlFor="changePass">Enter your current Password</label>
                            <input type="password" name="changePass" id="changePass" autoComplete="yes" ref={confirmCurrentPassRef} />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}

                {stepper === 2 && (
                    <form className="changePassword-inner center-column" onSubmit={changePasswordHandler}>
                        <div className="changePassword-input">
                            <label htmlFor="password2">Enter your new Password</label>
                            <input
                                type="password"
                                name="password2"
                                id="password2"
                                autoComplete="yes"
                                placeholder="At least 6 Characters"
                                ref={newPassRef}
                            />
                        </div>
                        <div className="changePassword-input">
                            <label htmlFor="password3">Re-Enter your new Password</label>
                            <input type="password" name="password3" id="password3" autoComplete="yes" ref={confirmNewPassRef} />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ChangePassword;
