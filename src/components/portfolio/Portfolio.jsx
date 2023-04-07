import React from "react";
import "./portfolio.css";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            name: "Vibe",
            type: "web",
            img: "https://github.com/satyamksharma/codeclause/blob/master/Task3_MusicApp/Screenshot%20from%202023-03-31%2016-17-50.png?raw=true",
            description: "An online Music streaming web app",
            ghubLink: "https://github.com/satyamksharma/codeclause/tree/master/Task3_MusicApp",
            websiteLink: "https://my-vibe.vercel.app/",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            ],
        },
        {
            id: 2,
            name: "Orderly",
            type: "web",
            img: "https://raw.githubusercontent.com/satyamksharma/Orderly/main/Screenshot%20from%202023-03-21%2001-29-26.png",
            description: "A food ordering website with multiple dishes",
            ghubLink: "https://github.com/satyamksharma/Orderly",
            websiteLink: "https://orderly-foods.netlify.app/",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            ],
        },
        {
            id: 3,
            name: "Metric Master",
            type: "web",
            img: "https://raw.githubusercontent.com/satyamksharma/codeclause/master/Task-2_Unit_Converter/Screenshot%20from%202023-03-21%2000-51-11.png",
            description: "A Unit converter app with a calculator",
            ghubLink:
                "https://github.com/satyamksharma/codeclause/tree/master/Task-2_Unit_Converter",
            websiteLink: "https://metricmaster.netlify.app/",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            ],
        },
        {
            id: 4,
            name: "Cash Track",
            type: "web",
            img: "https://raw.githubusercontent.com/satyamksharma/Expense-Tracker/main/Screenshot%20from%202023-03-21%2001-44-44.png",
            description: "An Expense Tracker app to record your expenses",
            ghubLink: "https://github.com/satyamksharma/Expense-Tracker",
            websiteLink: "https://cash-track.netlify.app/",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            ],
        },

        {
            id: 5,
            name: "Dice Game",
            type: "web",
            img: "https://github.com/satyamksharma/2-dice-game/blob/main/Screenshot%20from%202023-03-31%2016-26-48.png?raw=true",
            description: "A two-player dice rolling game",
            ghubLink: "https://github.com/satyamksharma/2-dice-game",
            websiteLink: "https://2dice-game.vercel.app/",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            ],
        },
    ];
    return (
        <section
            className='portfolio section'
            id='portfolio'
        >
            <h2
                className='section__title'
                data-aos='fade-right'
            >
                Portfolio
            </h2>
            <span
                className='section__subtitle'
                data-aos='fade-right'
            >
                My recent work
            </span>
            <div
                className='portfolio__nav'
                data-aos='zoom-in'
            >
                <div className='portfolio__nav-item'>
                    <a
                        href='#'
                        className='portfolio__nav-link active-link'
                    >
                        Wev Dev
                    </a>
                    <a
                        href='#'
                        className='portfolio__nav-link active-link'
                    >
                        Python
                    </a>
                    <a
                        href='#'
                        className='portfolio__nav-link active-link'
                    >
                        Others
                    </a>
                </div>
            </div>
            <div className='portfolio__container container grid'>
                {data.map((d) => (
                    <div
                        class='proj__card'
                        style={{ backgroundImage: `url(${d.img})` }}
                        loading='lazy'
                        data-aos='zoom-in'
                    >
                        <div class='project__content'>
                            <div class='proj__links'>
                                <a
                                    href={d.ghubLink}
                                    target='_blank '
                                    class='proj__link github'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        data-name='Layer 1'
                                        viewBox='0 0 24 24'
                                        id='github'
                                    >
                                        <path
                                            fill='var(--title-color-dark)'
                                            d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z'
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href={d.websiteLink}
                                    target='_blank '
                                    class='proj__link website'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        id='link'
                                    >
                                        <path
                                            fill='var(--title-color-dark)'
                                            d='M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z'
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <div class='proj__info'>
                                <div class='proj__name'>{d.name}</div>
                                <div class='proj__desc'>{d.description}</div>
                                <div className='proj__tech'>
                                    {d.tech.map((t) => (
                                        <img src={t} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class='proj__card__blur'></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
