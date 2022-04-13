import { Routes, Route } from "react-router-dom";

import Store from "./components/Store/Store";
import LogIn from "./components/LogIn-SignUp/LogIn";
import SignUp from "./components/LogIn-SignUp/SignUp";

function App() {
    return (
        <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
}

export default App;
