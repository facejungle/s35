"use client";
import {useState} from 'react';
import style from './ToggleMenu.module.scss';

export function ToggleMenu() {
    const [buttonClass, setButtonClass] = useState(style.toggle_menu_button);
    const [sidebarClass, setSidebarClass] = useState(style.toggle_sidebar);

    function handleClick() {
        if (buttonClass === `${style.toggle_menu_button} ${style.active}`) {
            setButtonClass(style.toggle_menu_button);
            setSidebarClass(style.toggle_sidebar);

        } else {
            setButtonClass(`${style.toggle_menu_button} ${style.active}`);
            setSidebarClass(`${style.toggle_sidebar} ${style.active}`);
        }
    }

    return (
        <>
            <button onClick={() => handleClick()} className={style.button_wrapper}>
                <div className={buttonClass}>
                    <div className={style.toggle_bar}></div>
                    <div className={style.toggle_bar}></div>
                    <div className={style.toggle_bar}></div>
                </div>
            </button>
            <div className={sidebarClass}></div>
        </>
    );
}

export default ToggleMenu;