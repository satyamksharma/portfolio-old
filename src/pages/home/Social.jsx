import { NavLink } from "react-router-dom";

const Social = () => {
    return (
        <div className='home__social'>
            <NavLink
                to='https://www.instagram.com/satyaa___/'
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'
            ></NavLink>
            <NavLink
                to='https://www.linkedin.com/in/satyamksharma/'
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'
            >
                <i className='uil uil-linkedin'></i>
            </NavLink>
            <NavLink
                to='https://github.com/satyamksharma'
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'
            >
                <i className='uil uil-github-alt'></i>
            </NavLink>
        </div>
    );
};

export default Social;
