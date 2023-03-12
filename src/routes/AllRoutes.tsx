import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        </Routes>
    )
}

export default AllRoutes
