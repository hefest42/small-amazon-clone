import React, { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { BsInfoLg } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { BiError } from "react-icons/bi";

import PageWrapper from "../UI/PageWrapper";
import LineDivider from "../UI/LineDivider";
import SmallFooter from "./SmallFooter";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [allAccounts, setAllAccounts] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const rePasswordRef = useRef();

    const setErrorMessageHandler = msg => {
        setShowError(true);
        setErrorMessage(msg);

        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        rePasswordRef.current.value = "";
    };

    const postAccountHandler = async acc => {
        try {
            await fetch("https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/accounts.json", {
                method: "POST",
                body: JSON.stringify(acc),
                headers: {
                    "CONTENT-TYPE": "application/json",
                },
            });
        } catch (error) {}
    };

    const formSubmitHandler = e => {
        e.preventDefault();

        console.log(allAccounts);

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const password = passwordRef.current.value;
        const rePassword = rePasswordRef.current.value;

        if (name === "" && email === "" && password === "" && rePassword === "") {
            setErrorMessageHandler("Please fill out all the fields.");
            return;
        }

        if (password !== rePassword) {
            setErrorMessageHandler("Password don't match.");
            return;
        }

        if (allAccounts.every(acc => acc.name === name)) {
            setErrorMessageHandler("Username already exsits.");

            return;
        }

        if (allAccounts.every(acc => acc.email === email)) {
            setErrorMessageHandler("Email already in use. Try a different one.");

            return;
        }

        const account = {
            name: name,
            email: email,
            password: password,
        };

        postAccountHandler(account);

        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        rePasswordRef.current.value = "";
    };

    useEffect(() => {
        const getAccounts = async () => {
            try {
                const response = await fetch("https://clone-c99fe-default-rtdb.europe-west1.firebasedatabase.app/accounts.json");

                const data = await response.json();

                const sortedAccounts = [];

                for (const key in data) {
                    sortedAccounts.push({
                        id: key,
                        name: data[key].name,
                        email: data[key].email,
                        password: data[key].password,
                    });
                }

                setAllAccounts(sortedAccounts);
            } catch (error) {}
        };

        getAccounts();
    }, []);

    return (
        <PageWrapper>
            <div className="logIn-image">
                <Link to="/store">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
                </Link>
            </div>

            {showError && (
                <div className="logIn-error">
                    <div className="logIn-error__svg center">
                        <BiError />
                    </div>
                    <div className="logIn-error__text center">{errorMessage}</div>
                </div>
            )}

            <div className="logIn center-column">
                <form className="logIn-form center-column" onSubmit={formSubmitHandler}>
                    <div className="logIn-title">Create Account</div>

                    <div className={"logIn-input"}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" autoComplete="off" ref={nameRef} />
                    </div>

                    <div className={"logIn-input"}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} />
                    </div>

                    <div className={"logIn-input"}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="on"
                            placeholder="At least 6 characters"
                            minLength="6"
                            ref={passwordRef}
                        />

                        <p>
                            <BsInfoLg /> Passwords must be at least 6 characters
                        </p>
                    </div>

                    <div className="logIn-input">
                        <label htmlFor="re-password">Re-enter Password</label>
                        <input type="password" id="re-password" name="re-password" autoComplete="on" minLength="6" ref={rePasswordRef} />
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
