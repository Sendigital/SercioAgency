import React from "react";
import "./styles.css"

const Nav = () => {
    return (
        <nav>
            <h1>Sercio</h1>

            <label for="toggle" className= "hamburger">&#9776;</label>
            <input type="checkbox" id="toggle" />

            <div className="navRight">
            <div className="navItems">
                <a href="#">What we do</a>
                <a href="#">Our Impact</a>
                <a href="#">Our Thoughts</a>
            </div>

            <div className="btn">
                <button>Contact Us</button>
            </div>
            </div>
        </nav>
    )
}

export default Nav;