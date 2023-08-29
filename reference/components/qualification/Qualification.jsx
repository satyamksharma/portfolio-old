import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className='qualification section'>
            <h2
                className='section__title'
                data-aos='zoom-out-up'
            >
                Qualification
            </h2>
            <span
                className='section__subtitle'
                data-aos='zoom-out-down'
            >
                My personal journey
            </span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap'></i>
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt'></i>
                        Experience
                    </div>
                </div>
                <div className='qualification__sections'>
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className='qualification__data'>
                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>B.Tech(CSE)</h3>
                                <span className='qualification__subtitle'>PES University</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>Intermediate</h3>
                                <span className='qualification__subtitle'>
                                    Jawahar Vidya Mandir
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2018 - 2020
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>10th Boards</h3>
                                <span className='qualification__subtitle'>ST. Thomas School</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2007 - 2018
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className='qualification__data'>
                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>Web Development Intern</h3>
                                <span className='qualification__subtitle'>Code Clause</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Mar 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>Web Developer</h3>
                                <span className='qualification__subtitle'>
                                    The Sparks Foundation
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Feb 2023 - Mar -2023
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>Web Dev Member</h3>
                                <span className='qualification__subtitle'>Aikya PES</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Mar 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                            </div>

                            <div data-aos='zoom-in-up'>
                                <h3 className='qualification__title'>Web Dev Member</h3>
                                <span className='qualification__subtitle'>Shunya Club</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>Jan 2023 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
