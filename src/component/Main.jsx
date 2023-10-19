import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/create" element={<Create />}/>
            </Routes>
        </main>
    );
}