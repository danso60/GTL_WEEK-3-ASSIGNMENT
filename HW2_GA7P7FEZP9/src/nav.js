import React from 'react'
import './nav.css'
import './global.css'

function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="container">
                    <li><a href="">HULK</a></li>
                    <li><a href="" className="logo is-active">MARVEL</a></li>
                    <li><a href="">VENOM</a></li>
                </div>
            </nav>
        </div>
    )
}
export default Navbar