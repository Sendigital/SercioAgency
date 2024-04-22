import React from "react";
import "./styles.css"
import { TbPasswordUser } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";


const Services = () =>{
    return (
        <div className="services">
            <div className="servicesInfo">
                <h1>Build your best <br />product with us!</h1>

                <button>Let's Talk</button>
            </div>

            <div className="servicesCards">
                <div className="card">
                    <span><TbPasswordUser style={{color: "red"}} /></span>
                    <h5>Customer <br />Engagement</h5>
                    <p>easy to distinguish. In a free hour, when our power of choice is</p>
                </div>
                <div className="card">
                    <span><RiUserSearchLine style={{color: "orange"}} /></span>
                    <h5>We provide <br />24 Hour Support</h5>
                    <p>will frequently occur  that pleasures have to be repudiated and</p>
                </div>
                <div className="card">
                    <span><IoBarChartSharp style={{color: "lightgreen"}} /></span>
                    <h5>Generate More Sale Early</h5>
                    <p>will frequently occur  that pleasures have to be repudiated and</p>
                </div>
            </div>
        </div>
    )
}

export default Services;