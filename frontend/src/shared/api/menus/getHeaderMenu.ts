import { apiURL, apiPaths2, fetcher } from "@shared/api/config";
import { checkLinkType } from "./checkLinkType";

export async function getHeaderMenu() {
   const HeaderMenu = await fetcher({ host: 'api', path: 'headerMenu' });
   if (!HeaderMenu) return null;

   return HeaderMenu.data.attributes.links.map((element: any) => {
      return checkLinkType(element);
   })
}