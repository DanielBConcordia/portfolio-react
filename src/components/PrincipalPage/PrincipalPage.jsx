import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe"
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import React from "react";
import { useState } from "react";
import './PrincipalPage.css'

const NavWindows = ["AboutMe","Contact", "Portfolio"];

function Principal() {

    const [atualPage, setAtualPage] = useState("AboutMe");

    return (
        <div id="main-box-principal">
            <Header setAtualPage={setAtualPage} />
            {atualPage === NavWindows[0] && (
            <AboutMe setAtualPage={setAtualPage} />
        )}

        {atualPage === NavWindows[1] && (
            <Contact setAtualPage={setAtualPage} />
        )}

        {atualPage === NavWindows[2] && (
            <Portfolio setAtualPage={setAtualPage} />
        )}
        </div>
    )
}

export default Principal