import "./skills.css";
import Languages from "./Languages";
import Technologies from "./Technologies";
import Header from "../../components/header/Header";
import Qualification from "../qualification/Qualification";

const Skills = () => {
    return (
        <>
            <Header />
            <main
                className='skills section'
                id='skills'
            >
                <section>
                    <h2
                        className='section__title'
                        data-aos='zoom-out-up'
                    >
                        Skills
                    </h2>
                    <span
                        className='section__subtitle'
                        data-aos='zoom-out-down'
                    >
                        My technical level
                    </span>
                    <div className='skills__container container grid'>
                        <Languages />
                        <Technologies />
                    </div>
                </section>
                <section>
                    <Qualification />
                </section>
            </main>
        </>
    );
};

export default Skills;
