"use client";
import { useState } from 'react';
import style from './ToggleMenu.module.css';

function ToggleMenu() {
   const [buttonClass, setButtonClass] = useState('');
   const [wrapperClass, setWrapperClass] = useState('');
   function handleClick() {
      if (buttonClass === style.cross) {
         setWrapperClass('');
         setButtonClass('');
      } else {
         setWrapperClass(style.active);
         setButtonClass(style.cross);
      }
   }
   return (
      <>
         <button onClick={() => handleClick()} className={style.button_wrapper}>
            <div className={`${style.toggle_menu_button} ${buttonClass}`}>
               <div className={style.toggle_bar}></div>
               <div className={style.toggle_bar}></div>
               <div className={style.toggle_bar}></div>
            </div>
         </button>
         <div className={`${style.hidden_wrapper} ${wrapperClass}`}></div>
      </>
   );
}
export default ToggleMenu;