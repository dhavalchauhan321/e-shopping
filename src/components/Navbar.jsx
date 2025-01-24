import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                
                <div className="logo">E-SHOPPING</div>
                <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`} id="nav-size">
                    <li>
                    <Link to="/e-shopping">Home</Link>
                    </li>
                    <li>
                        <Link to="/e-shopping/furniture">Furniture</Link>
                    </li>
                    <li>
                    <Link to="/e-shopping/Clothes">Clothes</Link>
                        
                    </li>
                    <li>
                    <Link to="/e-shopping/Lighting">Lighting</Link>
                    </li>
                    <li>
                    <Link to="/e-shopping/Service">Service</Link>
                    </li>
                    <li>
                    <Link to="/e-shopping/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>

           
            
            {/* end */}

        </>


    );
};

export default Navbar;
