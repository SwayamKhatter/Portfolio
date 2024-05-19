import React, {useState} from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState]= useState(1);

    const toggleTab= (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-acive" : "qualification__content"}
                    onClick={() => toggleTab(2)}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachlor's of Technology</h3>
                                <span className="qualification__subtitle">University of Engineering and Management, Jaipur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">12th</h3>
                                <span className="qualification__subtitle">Vishva Bharti Public School, Jagadhri</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th</h3>
                                <span className="qualification__subtitle">Sanatan Dharam Public School, Jagadhri</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">12th</h3>
                                <span className="qualification__subtitle">Vishva Bharti Public School, Jagadhri</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2019 - 2021
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-acive" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachlor's of Technology</h3>
                                <span className="qualification__subtitle">University of Engineering and Management, Jaipur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">12th</h3>
                                <span className="qualification__subtitle">Vishva Bharti Public School, Jagadhri</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th</h3>
                                <span className="qualification__subtitle">Sanatan Dharam Public School, Jagadhri</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Qualification