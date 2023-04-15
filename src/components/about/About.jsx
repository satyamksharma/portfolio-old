import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.png";
import CV from "../../assets/Resume.pdf";
import Info from "./Info";

const About = () => {
    return (
        <section
            className='about section'
            id='about'
        >
            <h2
                className='section__title'
                data-aos='zoom-out-up'
            >
                About Me
            </h2>
            <span
                className='section__subtitle'
                data-aos='zoom-out-down'
            >
                My Introduction
            </span>
            <div className='about__container container grid'>
                <div className='about__img__container'>
                    <div className='about__img_box'>
                        <img
                            src={AboutImg}
                            alt='aboutImg'
                            className='about__img'
                            loading='lazy'
                            data-aos='zoom-in'
                        />
                    </div>
                </div>
                <div
                    className='about__data'
                    data-aos='zoom-in-up'
                >
                    <Info />
                    <p className='about__description'>
                        Hi there, I'm Satyam Kumar, student at PES University, Bangalore pursuing my
                        B.Tech in Computer Science.
                    </p>
                    <p className='about__description'>
                        I'm Inquisitive, energetic computer science student bent towards exploring
                        new technologies and skills, with a good foundation in math, logic, and
                        coding. Seeking to enhance my skills and contribute to the field of
                        Technology and Computer Science.
                    </p>
                    <a
                        href={CV}
                        target='_blank'
                    >
                        <button class='cv__download'>
                            {" "}
                            Download CV
                            <div class='cv__icon'>
                                <svg
                                    fill='#000000'
                                    height='245px'
                                    width='245px'
                                    version='1.1'
                                    id='Capa_1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='-49.03 -49.03 588.39 588.39'
                                    stroke='var(--heading-color)'
                                    stroke-width='25.987384'
                                    transform='rotate(0)matrix(1, 0, 0, 1, 0, 0)'
                                >
                                    <g
                                        id='SVGRepo_bgCarrier'
                                        stroke-width='0'
                                    />

                                    <g
                                        id='SVGRepo_tracerCarrier'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke='#CCCCCC'
                                        stroke-width='37.264928'
                                    >
                                        {" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d='M0,373.149c0.1,2.8,0,5.3,0.5,9.2c3.4,32.6,25.4,61.1,55.7,73.7c7.5,3.3,15.5,5.1,23.6,6.4c2,0.2,4.1,0.3,6.1,0.5 c2.1,0.2,4.2,0.3,5.7,0.3l10.1,0.3l40.4,0.9c53.8,1.1,107.8,1.3,161.9-0.3c13.4,0.4,26.7,0.7,40.1,1.1l31.8,0.6l15.9,0.2h2h0.5 h1.5h1l4-0.2c2.2,0,6.6-0.6,10-1.1c13.8-2.3,26.1-7.2,37.4-14.7c11.1-7.5,20.6-17.3,27.7-28.7c7.1-11.3,11.8-24.3,13.5-37.5 c0.6-3.3,0.7-6.6,0.8-9.9c0-1.6,0.2-3.5,0.1-4.8l-0.1-4l-0.3-15.9c-0.5-21.2-1.2-42.3-2.3-63.4c-1.2-24-5.8-44-14.8-42.2 c-8.3,1.6-14.4,18.7-15.3,43.3c-0.8,22.1-1.6,44.4-2.4,66.6l-0.5,16.6c-0.2,2.2-0.3,4.4-0.6,6.6c-0.5,2.1-0.6,4.3-1.3,6.4 c-2.1,8.5-6,16.4-11.3,23.3c-8.5,11.1-20.9,19.2-34.7,22.4l-4.5,0.8c-0.6,0.2-1.8,0.3-2.9,0.3l-3.3,0.2l-1.7,0.1h-0.4h-0.2h-0.3 l-3.3,0.1l-6.7,0.1l-26.8,0.5l-107.2,2.2c-32-2.9-64.2-4.6-96.5-5.6c-16.2-0.5-32.3-0.9-48.5-1.1l-12.2-0.1h-3l-2.3-0.2 c-1.5-0.2-3,0-4.5-0.4c-6-0.6-11.7-2.6-17.1-5.1c-10.9-5-19.9-13.9-25.7-24.4l-2-4c-0.6-1.4-1-2.8-1.6-4.2 c-0.6-1.4-0.9-2.9-1.3-4.3l-0.6-2.2c-0.2-0.7-0.2-1.3-0.3-1.9l-0.3-1.8c-0.1-0.6-0.3-1.1-0.3-2.3l-0.3-6.1l-0.1-11.2 c-0.1-32.5-0.1-65,0.5-97.3c0.1-5.8-3.4-14.8-5.8-17.7c-4.9-5.6-9,1.7-12.1,12.7c-4.9,18.2-8.6,38.2-11.2,59.3 c-1.3,10.5-2.3,21.3-3,32.3c-0.4,5.5-0.7,11-1,16.5l-0.2,4.2v1v0.5v1.2V373.149z' />{" "}
                                                <path d='M174.8,292.049c17.5,20.8,34.3,42.3,53.9,61.2l0.5,0.5l0,0c7.4,7.1,19.2,6.9,26.3-0.5c4.5-4.7,8.9-9.6,13.1-14.7 c3.2-2.7,6.5-5.3,9.6-8.1c19.9-17.6,39.1-36,54.8-57.6c4.5-6.1,5.6-13.8-1.2-19.8c-6.2-5.5-14.3-6-20.4-1.3 c-11,8.6-22.2,17.1-31.9,27.1c-8.1,8.3-15.8,16.9-23.4,25.7c1.4-14,2.7-28.1,2.5-42.1c-0.4-27.3-2.4-54.6-3.7-82 c11.5-49,4.9-99.1,7.3-148.6c0.1-2.2-3.4-5.7-5.8-6.8c-4.9-2.2-9,0.6-12.1,4.8c-10.3,13.8-14.8,30.6-16,47.7 c-2.9,41.1-7.3,82.2-4,123.6c-0.4,5.1-0.8,10.2-1.1,15.3c-1.3,25.5-1.9,50.9-0.1,76.3c-16.5-17.5-34.8-33.4-50.7-51.3 c-1.2-1.3-5.7-0.9-8,0.2c-4.7,2.2-6,6.8-5.8,11.4C159.2,268.449,165.8,281.349,174.8,292.049z' />{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>

                                    <g id='SVGRepo_iconCarrier'>
                                        {" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d='M0,373.149c0.1,2.8,0,5.3,0.5,9.2c3.4,32.6,25.4,61.1,55.7,73.7c7.5,3.3,15.5,5.1,23.6,6.4c2,0.2,4.1,0.3,6.1,0.5 c2.1,0.2,4.2,0.3,5.7,0.3l10.1,0.3l40.4,0.9c53.8,1.1,107.8,1.3,161.9-0.3c13.4,0.4,26.7,0.7,40.1,1.1l31.8,0.6l15.9,0.2h2h0.5 h1.5h1l4-0.2c2.2,0,6.6-0.6,10-1.1c13.8-2.3,26.1-7.2,37.4-14.7c11.1-7.5,20.6-17.3,27.7-28.7c7.1-11.3,11.8-24.3,13.5-37.5 c0.6-3.3,0.7-6.6,0.8-9.9c0-1.6,0.2-3.5,0.1-4.8l-0.1-4l-0.3-15.9c-0.5-21.2-1.2-42.3-2.3-63.4c-1.2-24-5.8-44-14.8-42.2 c-8.3,1.6-14.4,18.7-15.3,43.3c-0.8,22.1-1.6,44.4-2.4,66.6l-0.5,16.6c-0.2,2.2-0.3,4.4-0.6,6.6c-0.5,2.1-0.6,4.3-1.3,6.4 c-2.1,8.5-6,16.4-11.3,23.3c-8.5,11.1-20.9,19.2-34.7,22.4l-4.5,0.8c-0.6,0.2-1.8,0.3-2.9,0.3l-3.3,0.2l-1.7,0.1h-0.4h-0.2h-0.3 l-3.3,0.1l-6.7,0.1l-26.8,0.5l-107.2,2.2c-32-2.9-64.2-4.6-96.5-5.6c-16.2-0.5-32.3-0.9-48.5-1.1l-12.2-0.1h-3l-2.3-0.2 c-1.5-0.2-3,0-4.5-0.4c-6-0.6-11.7-2.6-17.1-5.1c-10.9-5-19.9-13.9-25.7-24.4l-2-4c-0.6-1.4-1-2.8-1.6-4.2 c-0.6-1.4-0.9-2.9-1.3-4.3l-0.6-2.2c-0.2-0.7-0.2-1.3-0.3-1.9l-0.3-1.8c-0.1-0.6-0.3-1.1-0.3-2.3l-0.3-6.1l-0.1-11.2 c-0.1-32.5-0.1-65,0.5-97.3c0.1-5.8-3.4-14.8-5.8-17.7c-4.9-5.6-9,1.7-12.1,12.7c-4.9,18.2-8.6,38.2-11.2,59.3 c-1.3,10.5-2.3,21.3-3,32.3c-0.4,5.5-0.7,11-1,16.5l-0.2,4.2v1v0.5v1.2V373.149z' />{" "}
                                                <path d='M174.8,292.049c17.5,20.8,34.3,42.3,53.9,61.2l0.5,0.5l0,0c7.4,7.1,19.2,6.9,26.3-0.5c4.5-4.7,8.9-9.6,13.1-14.7 c3.2-2.7,6.5-5.3,9.6-8.1c19.9-17.6,39.1-36,54.8-57.6c4.5-6.1,5.6-13.8-1.2-19.8c-6.2-5.5-14.3-6-20.4-1.3 c-11,8.6-22.2,17.1-31.9,27.1c-8.1,8.3-15.8,16.9-23.4,25.7c1.4-14,2.7-28.1,2.5-42.1c-0.4-27.3-2.4-54.6-3.7-82 c11.5-49,4.9-99.1,7.3-148.6c0.1-2.2-3.4-5.7-5.8-6.8c-4.9-2.2-9,0.6-12.1,4.8c-10.3,13.8-14.8,30.6-16,47.7 c-2.9,41.1-7.3,82.2-4,123.6c-0.4,5.1-0.8,10.2-1.1,15.3c-1.3,25.5-1.9,50.9-0.1,76.3c-16.5-17.5-34.8-33.4-50.7-51.3 c-1.2-1.3-5.7-0.9-8,0.2c-4.7,2.2-6,6.8-5.8,11.4C159.2,268.449,165.8,281.349,174.8,292.049z' />{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
