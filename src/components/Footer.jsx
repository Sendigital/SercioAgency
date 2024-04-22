import React from "react";
import "./styles.css";
import { PiPaperPlaneRight } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <div id="container">
            <div className="footerIndex">
                <div className="indexSections">
                    <h3>Browse</h3>
                    <ul>Our Story</ul>
                    <ul>About Us</ul>
                    <ul>Reviews</ul>
                    <ul>FAQ</ul>
                    <ul>Contact Us</ul>
                </div>
                <div className="indexSections">
                    <h3>Company</h3>
                    <ul>For Individual</ul>
                    <ul>For Team</ul>
                    <ul>How It Works</ul>
                </div>
                <div className="indexSections">
                    <h3>Product</h3>
                    <ul>Customer Experience</ul>
                    <ul>Career</ul>
                    <ul>Support</ul>
                    <ul>Term of Service</ul>
                    <ul>Privacy</ul>
                </div>
                <div className="indexSections">
                    <h3>Subscribe</h3>
                    <div className="social">
                        <input type="email" id="search-input" placeholder="Email Address" />
                        <span><PiPaperPlaneRight /></span>
                    </div>
                    <div className="socialMedia">
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaTwitter /></span>
                        <span><FaLinkedinIn /></span>
                    </div>
                </div>
            </div>

            <div className="footerBar">
                <h1>Sercio</h1>
                <p>© 2020 - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;