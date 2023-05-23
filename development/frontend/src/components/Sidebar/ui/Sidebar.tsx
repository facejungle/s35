import style from './Sidebar.module.scss';
import {Menu} from "./widgets";
import {widgetType} from '../model/type';

export function Sidebar({widgets}: widgetType) {
    return (
        <aside className={style.sidebar}>
            <Menu/>
        </aside>
    );
}