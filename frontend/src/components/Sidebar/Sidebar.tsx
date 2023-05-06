import style from './Sidebar.module.css';
import { Menu } from "./widgets";

type widgetType = {
   widgets: 'default' | ['Menu']
}
export default function Sidebar({ widgets }: widgetType) {
   console.log(widgets)
   return (
      <aside className={style.sidebar}>
         <Menu />
      </aside>
   );
}