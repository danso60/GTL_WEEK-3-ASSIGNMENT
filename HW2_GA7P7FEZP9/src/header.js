import React from 'react'
import './header.css'
import './global.css'
import './images.css'
import Venom_1 from './img/venom-1.jpg'
import Hulk from './img/hulk-1.jpg'
import Venom_2 from './img/venom-2.jpg'

function Header(){
    return(
        <div className="header">
            <div className="container">
                <h1 className="title">Mavel's Fearless</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae molestias earum eveniet.</p>
                <div className="search-bar">
                    <input type="search" placeholder="Search" />
                </div>
                <div class="sample-wallpaper">

                    <article className="wallpaper">
                        <img src={Venom_1} className="wallpaper" />
                    </article>
                
                    <article className="wallpaper">
                        <img src={Hulk} className="wallpaper" />
                    </article>
                
                    <article className="wallpaper">
                        <img src={Venom_2} className="wallpaper" />
                    </article>

                </div>

            </div>
        </div>
    )
}
export default Header