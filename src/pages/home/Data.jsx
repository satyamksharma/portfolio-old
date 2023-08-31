import { motion } from "framer-motion";
import "./data.css";
import { NavLink } from "react-router-dom";

const text1 = "Hi there,";
const text2 = "I'm Satyam";

const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: { y: [-1, -2, -3.8, 0.9, 0], scaleY: [1, 1.3, 0.8, 1, 1.2] },
};

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const item = {
    visible: { opacity: 1, y: [-1, -1.9, -2.7, 1], scaleY: [1, 1.3, 0.8, 1] },
    hidden: { opacity: 0 },
};

const Data = () => {
    return (
        <div className='home__data'>
            <div
                className='title__data'
                id='title__data'
            >
                <div className='main__title'>
                    <section className='title__section'>
                        <div className='title__text'>
                            <motion.h1
                                variants={list}
                                initial='hidden'
                                animate='visible'
                            >
                                {text1.split("").map((letter, id) => (
                                    <motion.span
                                        variants={item}
                                        key={id}
                                    >
                                        {letter === " " ? (
                                            <span>&nbsp;</span> // add a non-breaking space for spaces
                                        ) : (
                                            <motion.span
                                                key={id}
                                                variants={spanVariants}
                                                initial='visible'
                                                whileHover='hover'
                                            >
                                                {letter}
                                            </motion.span>
                                        )}
                                    </motion.span>
                                ))}
                            </motion.h1>
                            <motion.h1
                                variants={list}
                                initial='hidden'
                                animate='visible'
                            >
                                {text2.split("").map((letter, id) => (
                                    <motion.span
                                        variants={item}
                                        key={id}
                                    >
                                        {letter === " " ? (
                                            <span>&nbsp;</span> // add a non-breaking space for spaces
                                        ) : (
                                            <motion.span
                                                key={id}
                                                variants={spanVariants}
                                                initial='visible'
                                                whileHover='hover'
                                            >
                                                {letter}
                                            </motion.span>
                                        )}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>
                    </section>
                </div>
                <p
                    className='home__description'
                    data-aos='zoom-in'
                >
                    I am a CS student and a Developer based in Bengaluru, and I am passionate and
                    dedicated to my work.
                </p>
            </div>
            <div
                className='connect__btn'
                data-aos='zoom-in-right'
            >
                <NavLink
                    className='fancy'
                    to='/contact'
                >
                    <span className='top-key'></span>
                    <span className='button__text'>Say Hello</span>
                    <span className='bottom-key-1'></span>
                    <span className='bottom-key-2'></span>
                </NavLink>
            </div>
        </div>
    );
};

export default Data;
