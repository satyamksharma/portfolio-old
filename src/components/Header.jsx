import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    // ----------For Toggle Menu--------
    const [Toggle, showMenu] = useState(false);

    const ShowMenuHandler = () => {
        showMenu(!Toggle);
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                <NavLink
                    to='/home'
                    className='nav__logo'
                >
                    Satyam <span className='title__second'>Kumar</span>
                </NavLink>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <NavLink
                                to='/home'
                                className='nav__link'
                            >
                                <i className='uil uil-estate nav__icon' />
                                Home
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink
                                to='/about'
                                className='nav__link'
                            >
                                <i className='uil uil-user nav__icon' />
                                About
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink
                                to='/skills'
                                className='nav__link'
                            >
                                <i className='uil uil-file-alt nav__icon' />
                                Skills
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink
                                to='/projects'
                                className='nav__link'
                            >
                                <i className='uil uil-scenery nav__icon' />
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink
                                to='/contact'
                                className='nav__link'
                            >
                                <i className='uil uil-message nav__icon' />
                                Contact
                            </NavLink>
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
            </nav>
        </header>
    );
};

export default Header;
