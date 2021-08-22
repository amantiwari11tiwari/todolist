import React from 'react'
import logo1 from '../assets/logo1.png'


const head = () => {
    return (
        <header className="header">
            <nav >
                <div className="logo">
                    <img src={logo1} width='40' height='40' alt="Tododlist logo"></img>

                </div>
            </nav>

        </header>
    )
}

export default head
