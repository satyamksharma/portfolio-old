import { useState } from "react";
import Header from "../../components/header/Header";
import "./projects.css";
import data from "../../data/data";

const Projects = () => {
    const [menu, setMenu] = useState("web");

    return (
        <>
            <Header />
            <main
                className='portfolio section'
                id='portfolio'
            >
                <h2 className='section__title'>Portfolio</h2>
                <span className='section__subtitle'>My recent work</span>
                <div className='portfolio__nav'>
                    <div className='portfolio__nav-item'>
                        <button onClick={() => setMenu("web")}>Web Dev</button>
                        <button onClick={() => setMenu("python")}>Python</button>
                        <button onClick={() => setMenu("others")}>Others</button>
                    </div>
                </div>
                <div className='portfolio__container container grid'>
                    {data
                        .filter((d) => d.type === menu)
                        .map((d) => (
                            <div
                                className='proj__card'
                                style={{ backgroundImage: `url(${d.img})` }}
                                loading='lazy'
                                key={d.name}
                            >
                                <div className='project__content'>
                                    <div className='proj__links'>
                                        <a
                                            href={d.ghubLink}
                                            target='_blank '
                                            className='proj__link github'
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
                                            className='proj__link website'
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
                                    <div className='proj__info'>
                                        <div className='proj__name'>{d.name}</div>
                                        <div className='proj__desc'>{d.description}</div>
                                        <div className='proj__tech'>
                                            {d.tech.map((t) => (
                                                <img
                                                    src={t}
                                                    key={t}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='proj__card__blur'></div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    );
};

export default Projects;
