import React from "react";
import "./styles.css";
import { FiX } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const Questions = () => {
    return (
        <div className="qField">
            <div className="askField">
                <h1>Frequently Asked <br />Questions</h1>
                <p>Get fast answers to your most <br />pressing questions about Vidgo</p>
                <button>Get Started 〉</button>
            </div>

            <div className="answerField">
                <div className="firstAnswer">
                    <div className="qDropdown">
                        <h4>Do you need an account to use Vidgo?</h4>
                        <p>A Vidgo account is not required if you are strictly joining Vidgo Meetings as a participant. If someone invites you to their meeting you can join as a participant without creating an account.</p>
                    </div>
                    <span><FiX /></span>
                </div>

                <div className="otherAnswers">
                    <p>How do I sign up for a Vidgo?</p>
                    <span><IoMdAdd /></span>
                </div>
                <div className="otherAnswers">
                    <p>How do I join computer/device audio?</p>
                    <span><IoMdAdd /></span>
                </div>
                <div className="otherAnswers">
                    <p>How much does Vidgo cost?</p>
                    <span><IoMdAdd /></span>
                </div>
            </div>
        </div>
    )
}

export default Questions;