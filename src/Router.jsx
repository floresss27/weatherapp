import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home'

const Router = () => {
    return (
        <Routes>
            <Route element={<Home/>} path="/" exact />
        </Routes>
    )
}

export default Router