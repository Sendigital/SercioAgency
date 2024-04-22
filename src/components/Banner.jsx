import React from "react";
import "./styles.css"
import headerMan from '../assets/human.png'


const Banner = () => {
    return (
        <div className="header">
            <div className="headerInfo">
                <h1> Award - winning <br /> Customer <br /> service Agency </h1>

                <p> Boost your Business network with our <br />
                best online Collaborators </p>

                <div className="inputContainer">
                <input type="email" id="search-input" placeholder="Type your email"/>
                <button type="submit">Contact Me</button>
                </div>

                <p>12k Reviews ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

            </div>

            <div className="headerImg">
            <img src={headerMan} alt="human" />
            </div>
        </div>

        
    )
}

export default Banner;