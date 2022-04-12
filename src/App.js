import { Routes, Route } from "react-router-dom";

import LogIn from "./components/Log-In/LogIn";

function App() {
    return (
        <Routes>
            <Route path={"/log-in"} element={<LogIn />} />
        </Routes>
    );
}

export default App;
