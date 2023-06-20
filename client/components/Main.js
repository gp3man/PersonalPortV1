import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Four0FourPage from "./Four0FourPage";
import LandingPage from "./LandingPage";
const Main = () => {

    return (
        <>
            <div id="Main">
            <Routes>
                <Route path="*" element={<Four0FourPage />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
            </div>
        </>
    );
};

export default Main;
