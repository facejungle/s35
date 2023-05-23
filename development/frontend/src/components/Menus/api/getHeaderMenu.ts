import {fetcher} from "@shared/index";
import {checkLinkType, TLinkData, TMenusData} from "../index";

export async function getHeaderMenu(): Promise<TLinkData[]> {
    const HeaderMenu: TMenusData = await fetcher({host: 'API', path: 'MENU_HEADER'});
    if (!HeaderMenu) throw new Error(`[getHeaderMenu] > menuData undefined`);

    return HeaderMenu.HeaderMenu;
}