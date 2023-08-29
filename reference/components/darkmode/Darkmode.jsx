import React, { useState } from "react";
import "./darkmode.css";

const Darkmode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const switchTheme = (event) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            event.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            event.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    return (
        <>
            <div>
                <label className='switch'>
                    <input
                        className={theme === "dark" ? clickedClass : ""}
                        type='checkbox'
                        onClick={(e) => switchTheme(e)}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className='slider'></span>
                </label>
            </div>
        </>
    );
};

export default Darkmode;
