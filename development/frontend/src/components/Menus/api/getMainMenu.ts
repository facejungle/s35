import {fetcher} from "@shared/index";
import {checkLinkType} from "../index";

export async function getMainMenu() {
    const mainMenu = await fetcher({host: 'API', path: 'MENU_MAIN'});
    if (!mainMenu) throw new Error(`[getMainMenu] > menuData undefined`);

    return mainMenu.MainMenu;
}