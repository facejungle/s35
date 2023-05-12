import style from './Sidebar.module.css';
import { Menu } from "./widgets";
import { widgetType } from '../model/type';

export function Sidebar({ widgets }: widgetType) {
   return (
      <aside className={style.sidebar}>
         <Menu />
      </aside>
   );
}