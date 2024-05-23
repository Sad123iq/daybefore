import React from 'react'
import Header from '../../layout/site/header/Header'
import Footer from '../../layout/site/footer/Footer'
import { Outlet } from "react-router-dom"

const SiteRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>

    )
}

export default SiteRoot