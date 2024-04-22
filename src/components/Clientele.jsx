import React from "react";
import "./styles.css";
import Amanda from "../assets/headshot1.jpeg";
import William from "../assets/headshot2.jpeg";
import Saepul from "../assets/headshot3.jpeg";

const Clientele =  () => {
    return (
        <div className="clients">
            <h1>Happy Clients</h1>
            <p>In efforts to expand our horizons, we welcome every investment-minded individual to join us in the Condotel Investment Opportunity.</p>

            <div className="clientCards">
                <div className="clientCard">
                    <div className="clientInfo">
                        <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ 5.0</span>
                        <p>"Oh my God, I can't believe that my website is in the top google search after getting referrals and control from Media one group."</p>

                        <div className="personal">
                            <img src={Amanda} alt="headshot1" />
                            <div className="personalInfo">
                                <h5>Amanda Novel</h5>
                                <p>CEO at Slime.co</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clientCard">
                    <div className="clientInfo">
                        <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ 5.0</span>
                        <p>"Oh my God, I can't believe that my website is in the top google search after getting referrals and control from Media one group."</p>

                        <div className="personal">
                            <img src={William} alt="headshot2" />
                            <div className="personalInfo">
                                <h5>William Andras</h5>
                                <p>CEO at Nazaric.co</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clientCard">
                    <div className="clientInfo">
                        <span>⭐️ ⭐️ ⭐️ ⭐️ 4.0</span>
                        <p>"Oh my God, I can't believe that my website is in the top google search after getting referrals and control from Media one group."</p>

                        <div className="personal">
                            <img src={Saepul} alt="headshot3" />
                            <div className="personalInfo">
                                <h5>Saepul Granz</h5>
                                <p>CEO at Bitcoin.id</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button> View More Reviews  〉</button>
        </div>
    )
}

export default Clientele;