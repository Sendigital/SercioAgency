import React from "react";
import "./styles.css"

const Nav = () => {
    return (
        <nav>
            <h1>Sercio</h1>

            <div className="navItems">
                <a href="#">What we do</a>
                <a href="#">Our Impact</a>
                <a href="#">Our Thoughts</a>
            </div>

            <button>Contact Us</button>
        </nav>
    )
}

export default Nav;