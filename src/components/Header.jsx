// import react
import React from "react"
import { NavLink } from "react-router-dom"
import profil from "../media/billGates.jpg"


/**
 * @component
 * @description Render of the Header
 * @function Header
 * @param {*}
 * @returns {jsx}
 */
function Header()
{
    return (

        <header className="col-3">

            <div className="d-flex justify-content-center  img-profil">
                <img src={profil} alt="" className="img-fluid"/>
            </div>

            <nav className="d-flex flex-column justify-content-center">

                <NavLink activeclassname="avtive" className="d-flex justify-content-center" to="/">
                    <i className="fas fa-home"></i> Acceuil
                </NavLink>

                <NavLink activeclassname="avtive" className="d-flex justify-content-center" to="/portfolio">
                    <i className="fas fa-images"></i>Portfolio
                </NavLink>

                <NavLink activeclassname="avtive" className="d-flex justify-content-center" to="/competences">
                    <i className="fas fa-mountain"></i> Competences
                </NavLink>

                <NavLink activeclassname="avtive" className="d-flex justify-content-center" to="/contact">
                    <i class="fas fa-address-book"></i> Contact
                </NavLink>

            </nav>

        </header>
    )
}
    
export default Header