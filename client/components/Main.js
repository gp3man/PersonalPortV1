import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Four0FourPage from "./Four0FourPage";
import SignUpComp from "./SignUpComp";
import SignInPage from "./SignInPage";
const Main = () => {

    return (
        <>
            <div id="Main">
            <nav>
                <NavLink to={'/'}> Main </NavLink>
            </nav>
            <Routes>
                <Route path="*" element={<Four0FourPage />} />
                <Route path="/SignUp" element={<SignUpComp />} />
                <Route path="/" element={<SignInPage />} />

            </Routes>
            </div>
        </>
    );
};

export default Main;
