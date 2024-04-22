import React from "react";
import "./styles.css";
import top from "../assets/topImg.png";
import center from "../assets/centerImg.png";
import bottom from "../assets/bottomImg.png";

const Operations = () => {
    return (
        <div className="operations">
            <div className="hiring">
                <img src= {top} alt="top" />
                
                <div className="hiringInfo">
                    <h1>Hire faster with <br />trusted talent</h1>
                    <p>Onboarding can be a cumbersome process that delays getting freelance projects started. With Worksome, you can onboard in minutes so that they can get to work on the projects that dazzle your clients</p>
                    <button> Start Now </button>
                </div>
            </div>

            <div className="expenses">
            <div className="expensesInfo">
                    <h1>Reduce <br />operational costs</h1>
                    <p>Get visibility and take control of the inefficient processes and costly resources spent on external workforce  operations, across every team. They'll thank you  for it.</p>
            </div>

                <img src= {center} alt="center" />
            </div>
            <div className="risk">
                <img src= {bottom} alt="bottom" />
                
                <div className="riskInfo">
                    <h1>Reduce risk & <br />reduce reliability</h1>
                    <p>Remove risk for your entire company when hiring and paying external talent. Automate complaint contracts, payroll and processes, in 150+ countries </p>
                </div>
            </div>
        </div>
    )
}

export default Operations;