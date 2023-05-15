import { fetcher } from "@shared/index";
import { checkLinkType } from "../helpers/checkLinkType";

export async function getHeaderMenu() {
   const HeaderMenu = await fetcher({ host: 'API', path: 'MENU_HEADER' });
   if (!HeaderMenu) return null;

   return HeaderMenu.HeaderMenu.map((element: any) => {
      return checkLinkType(element);
   })
}