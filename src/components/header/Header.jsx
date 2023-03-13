import React, { useState } from "react";
import "./header.css";
import Darkmode from "../darkmode/Darkmode";

const Header = () => {
    // ----------For Toggle Menu--------
    const [Toggle, showMenu] = useState(false);

    const ShowMenuHandler = () => {
        showMenu(!Toggle);
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                <a
                    href='index.html'
                    className='nav__logo'
                >
                    Satyam <span className='title__second'>Kumar</span>
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a
                                href='#home'
                                className='nav__link active-link'
                            >
                                <i className='uil uil-estate nav__icon' />
                                Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#about'
                                className='nav__link'
                            >
                                <i className='uil uil-user nav__icon' />
                                About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#skills'
                                className='nav__link'
                            >
                                <i className='uil uil-file-alt nav__icon' />
                                Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#portfolio'
                                className='nav__link'
                            >
                                <i className='uil uil-scenery nav__icon' />
                                Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#contact'
                                className='nav__link'
                            >
                                <i className='uil uil-message nav__icon' />
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i
                        className='uil uil-times nav__close'
                        onClick={ShowMenuHandler}
                    />
                </div>

                <div
                    className='nav__toggle'
                    onClick={ShowMenuHandler}
                >
                    <i className='uil uil-apps'></i>
                </div>
                <Darkmode />
            </nav>
        </header>
    );
};

export default Header;
