import { apiURL, apiPaths2 } from "@shared/api/config";
import { checkLinkType } from "./checkLinkType";

export async function getHeaderMenu() {
   const data = await fetch(apiURL(apiPaths2({}).headerMenu));
   if (!data.ok) {
      console.log('Failed to fetch > header menu | getHeaderMenu()');
      return null;
   }

   const HeaderMenu = await data.json();
   if (HeaderMenu === null) {
      console.log('header menu empty | getHeaderMenu()');
      return null;
   }

   return HeaderMenu.data.attributes.links.map((element: any) => {
      return checkLinkType(element);
   })
}