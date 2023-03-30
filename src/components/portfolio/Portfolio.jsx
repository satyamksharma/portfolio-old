import React from "react";
import "./portfolio.css";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            type: "web",
            name: "Portfolio",
            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            type: "web",

            name: "Portfolio",
            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "web",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "web",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },

        {
            id: 1,
            name: "Portfolio",
            type: "python",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "python",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "python",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "python",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "others",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
        {
            id: 1,
            name: "Portfolio",
            type: "others",

            img: "assets/img/portfolio1.jpg",
            description: "lorem dnhdyhnebd dhy  ejeyd e jeud dy dhysjf ejeieirurj ajsuerhrgfy",
            ghubLink: "",
            websiteLink: "",
            repoLink: "",
        },
    ];
    return (
        <section
            className='portfolio section'
            id='portfolio'
        >
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>My recent work</span>
            <div className='portfolio__nav'>
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
                    <div class='proj__card'>
                        <div class='project__content'>
                            <div class='proj__links'>
                                <a
                                    href={d.ghubLink}
                                    target='_blank '
                                    class='proj__link github'
                                />
                                <a
                                    href='www.google.com'
                                    target='_blank'
                                    class='proj__link website'
                                />
                                <a
                                    href='www.google.com'
                                    target='_blank'
                                    class='proj__link repo'
                                />
                            </div>
                            <div class='proj__info'>
                                <div class='proj__name'>{d.name}</div>
                                <div class='proj__desc'>{d.description}</div>
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
