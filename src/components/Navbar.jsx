import React, { useState } from "react";
import "./css/Navbar.css";
import Video from './videos/01.mp4'
import video1 from './videos/02.mp4'



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
                        <a href="#Shop All" >Shop All</a>
                    </li>
                    <li>
                        <a href="#Furniture">Furniture</a>
                    </li>
                    <li>
                        <a href="#Clothes">Clothes</a>
                    </li>
                    <li>
                        <a href="#Lighting">Lighting</a>
                    </li>
                    <li>
                        <a href="#Services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <video src={Video} loop muted autoPlay preload="auto" className="w-full  video-h object-fill -mt-20 intro-video"></video>
            <video src={video1} loop muted autoPlay preload="auto" className="mobile-video" ></video>

            {/* form */}
            <div className="container-form">
                <div className="card-form">
                    <h1 className="center text-2xl font-bold">Login</h1>
                    <form>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="bg-transparent text-white border-black " placeholder="Enter your email " />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="bg-transparent text-white" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn">Log In</button>
                    </form>
                    <div className="links">
                        <a href="#">Forgot Password?</a> | <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
            {/* end */}

        </>


    );
};

export default Navbar;
