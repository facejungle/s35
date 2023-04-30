"use client";
import style from './Sidebar.module.css';
export default function Sidebar() {
   return (
      <>
         <div className={style.sidebar_widget}>
            <input
               type='text'
               placeholder='Поиск...'
               onChange={async (e) => {

               }}
            />
         </div>
         <div className={style.sidebar_widget}>
            <h3>Контакты</h3>
            <p>widget text</p>
         </div>
         <div className={style.sidebar_widget}>
            <h3>Widget title</h3>
            <p>widget text</p>
         </div>
         <div className={style.sidebar_widget}>
            <h3>Widget title</h3>
            <p>widget text</p>
         </div>
      </>
   )
}