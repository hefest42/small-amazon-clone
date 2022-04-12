import { Routes, Route } from "react-router-dom";

import Store from "./components/Store/Store";
import LogIn from "./components/LogIn-SignUp/LogIn";

function App() {
    return (
        <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/log-in" element={<LogIn />} />
        </Routes>
    );
}

export default App;
