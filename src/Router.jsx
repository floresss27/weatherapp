import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route element={<Home/>} path="/" exact />
        </Routes>
    )
}