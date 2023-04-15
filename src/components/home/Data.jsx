import React from "react";
import { motion } from "framer-motion";
import "./data.css";

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
                                    <motion.span variants={item}>
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
                                    <motion.span variants={item}>
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
                    I'm a CS student and a Developer based in Bengaluru, and I'm passionate and
                    dedicated to my work.
                </p>
            </div>
            <div
                className='connect__btn'
                data-aos='zoom-in-right'
            >
                <a
                    class='fancy'
                    href='#contact'
                >
                    <span class='top-key'></span>
                    <span class='button__text'>Say Hello</span>
                    <span class='bottom-key-1'></span>
                    <span class='bottom-key-2'></span>
                </a>
                {/* <a
                    href='#contact'
                    className='button button--flex'
                >
                    Say Hello
                    <svg
                        className='button__icon'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <path
                            d='M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z'
                            fill='var(--container-color)'
                        ></path>
                        <path
                            d='M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z'
                            fill='var(--container-color)'
                        ></path>
                    </svg>
                </a> */}
            </div>
        </div>
    );
};

export default Data;
