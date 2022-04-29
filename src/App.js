import { Routes, Route, Navigate } from "react-router-dom";

import Store from "./components/Store/Store";
import LogIn from "./components/LogIn-SignUp/LogIn";
import SignUp from "./components/LogIn-SignUp/SignUp";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/store" />} />
            <Route path="/store/*" element={<Store />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
        </Routes>
    );
}

export default App;
