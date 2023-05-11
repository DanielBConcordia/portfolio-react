import React from 'react'
import './Header.css';  

function Header({setAtualPage}) { 

    return(


        <div className="header-box">
            <p className='header-text' >Daniel's</p>
            <button className="button button-about-me" onClick={() => setAtualPage("AboutMe")}>Sobre mim</button>
            <button className="button button-portfolio" onClick={() => setAtualPage("Portfolio")} >Projetos</button>
            <button className="button button-contact" onClick={() => setAtualPage("Contact")} >Contato</button>
         
        </div>
    )
}

export default Header