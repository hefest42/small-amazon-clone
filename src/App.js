import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Store from "./components/Store/Store";
import LogIn from "./components/LogIn-SignUp/LogIn";
import SignUp from "./components/LogIn-SignUp/SignUp";
import Account from "./components/Account/Account";

function App() {
    const [loggedInAccount, setLoggedInAccount] = useState("");

    const logOutHandler = () => {
        setLoggedInAccount("");
    };

    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/store" />} />
            <Route path="/store/*" element={<Store loggedInAcc={loggedInAccount} logOut={logOutHandler} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn logInAccount={setLoggedInAccount} />} />
            <Route path="/account" element={<Account loggedInAcc={loggedInAccount} />} />
        </Routes>
    );
}

export default App;
