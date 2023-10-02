import React, { useState } from "react";
import Header from './Header'
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

