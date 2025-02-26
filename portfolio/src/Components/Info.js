import React from "react";

const Info = ()=> {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about-icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1-2 years working</span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt about-icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">15+ projects</span>
            </div>
            <div className="about__box">
                <i className="bx bx-support about-icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24X7</span>
            </div>
        </div>
    )
}

export default Info