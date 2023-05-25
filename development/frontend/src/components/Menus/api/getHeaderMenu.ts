import {fetcher} from "@shared/index";
import {TComponent, TLinkData} from "../index";

export async function getHeaderMenu(): Promise<[TComponent]> {
    const HeaderMenu: TLinkData = await fetcher({host: 'API', path: 'MENU_HEADER'});
    if (!HeaderMenu.data) throw new Error(`[getHeaderMenu] > menuData undefined`);
    return HeaderMenu.data.attributes.HeaderMenu;
}