import React from 'react'
import Slider from './Slider'
import Section from './Section'
import Poster from './Poster'
import Wear from './Wear'
import video1 from './videos/02.mp4'
import "./css/Navbar.css";

function HomePage() {
    return (
        <div>
            <img src="https://www.fastmag.fr/wp-content/uploads/2020/02/vitrine-boutique.jpeg" alt="" className="video-h w-full  video-h object-fill -mt-20"  />
            {/* <video src={video1} loop muted autoPlay preload="auto" className="mobile-video" ></video> */}

            {/* form */}
            {/* <div className="container-form">
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
                        <button type="submit" className="btn"><a href="#">Log In</a></button>
                    </form>
                    <div className="links">
                        <a href="#">Forgot Password?</a> | <a href="#">Sign Up</a>
                    </div>
                </div>
            </div> */}

            <Slider />
            <Section />
            <Poster />
            <Wear />

        </div>
    )
}

export default HomePage
