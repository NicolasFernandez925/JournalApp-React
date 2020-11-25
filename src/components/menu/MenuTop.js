import React, { useState } from 'react'
import {Link,NavLink } from 'react-router-dom'

import './menu.scss'

export const MenuTop = () => {

    const [state, setstate] = useState(false);

    const handleClickMenuResponsive = () => {
        setstate(!state);
    }

    const handleCloseMenu = () => {
        setstate(false);
    }

    return (
        <div className="menu-top container-fluid">
            <div className="menu-top__logo">
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" 
                        alt="icon-react"
                        className="header__icon-img"
                    />   
                </Link>
            </div>
            <div className={(state) ? " menu__nav-link " : "menu__nav-link active-submenu "}>
                <NavLink 
                    className="menu__item-link" 
                    to = "/"
                    onClick={handleCloseMenu}
                    >
                    <i className="fas fa-home mr-2"></i>
                    Inicio 
                </NavLink>
                <NavLink 
                    activeClassName="selected" 
                    className="menu__item-link"  
                    to = "/new-movies"
                    onClick={handleCloseMenu}
                    >
                    <i className="fas fa-film mr-2"></i>
                    Ultimos lanzamientos 
                </NavLink>
                <NavLink 
                    activeClassName="selected" 
                    className="menu__item-link"  
                    to = "/popular"
                    onClick={handleCloseMenu}
                    >
                    <i className="fas fa-film mr-2"></i>
                    Populares 
                </NavLink>
                <NavLink 
                    activeClassName="selected" 
                    className="menu__item-link"  
                    to = "/search"
                    onClick={handleCloseMenu}
                    >
                    <i className="fas fa-search mr-2"></i>
                    Buscador
                </NavLink>
            </div>
            <div className="me__icon-hamburguer d-block d-md-none ml-auto">
                    <i className={(state) ? "fas fa-times" : "fas fa-bars"} 
                         onClick={handleClickMenuResponsive}>
                    </i> 
                           
            </div>
        </div>
    )
}
