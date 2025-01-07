import React from 'react'
import "./css/Footer.css";

export default function Footer() {
  return (
    <div>
         <div className="newsletter-section">
          <div>
        <h2>Sign Up For Newsletters</h2>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        </div>
        <div>
        <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required/>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    </div>
    <br />
    <footer className="footer">
        <div className="footer-column">
            <h3>Contact</h3>
            <p>Address: Ismailia, Egypt</p>
            <p>Phone: 01010101010</p>
            <p>Hours: 10:00am - 11:00pm, Sat - Thu</p>
            <h3>Follow Us</h3>
            <div className="social-icons">
                <a href="#">F</a>
                <a href="#">T</a>
                <a href="#">I</a>
                <a href="#">P</a>
                <a href="#">Y</a>
            </div>
        </div>

        <div className="footer-column">
            <h3>About</h3>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="footer-column">
            <h3>My Account</h3>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="footer-column">
            <h3>Install App</h3>
            <div className="app-links">
                <a href="#"><img src="https://wcdn.vblink777.club/phpimages/domainsetting/transitconf/20230118/2204575747e6ac00eeb5932331527fb0.png" alt="App Store"/></a>
                <a href="#"><img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-PNG-Clipart.png" alt="Google Play"/></a>
            </div>
            <h3>Secured Payment Gateways</h3>
            <div className="payment-icons">
                <img src="https://th.bing.com/th/id/OIP._avHCqarEhv6x7SK-DMYPgHaDA?rs=1&pid=ImgDetMain" alt="Visa"/>
                <img src="https://toppng.com/uploads/preview/mastercard-logo-png-transparent-images-11660384816y6pji0rbz8.png" alt="Mastercard"/>
                <img src="https://www.liblogo.com/img-logo/ma3332m5a9-maestro-logo-maestro-logo-and-symbol-meaning-history-png.png" alt="Maestro"/>
                <img src="https://th.bing.com/th/id/OIP.SgAF1waRIYdLgE-YifQR_wHaER?rs=1&pid=ImgDetMain" alt="American Express"/>
            </div>
        </div>
        
    </footer>
    <div className="footer-bottom">
        &copy; 2024-25, Web Development Project 
    </div>
    


    </div>
  )
}
