import style from './Sidebar.module.css';

export function Sidebar({ widget }: { widget?: React.ReactElement }) {
   if (!widget) {
      return (
         <>
            <aside className={style.sidebar}>
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
            </aside>
         </>
      );
   }
   return (
      <>
         <aside className={style.sidebar}>
            {widget}
         </aside>
      </>
   )
}