import { siteLogoPromise } from "../model/type";
import { fetcher } from "@/shared/api/config";
export async function getSiteLogo(): Promise<siteLogoPromise> {
   const data = await fetcher({ host: 'api', path: 'siteSettings' });
   if (!data.ok) {
      console.log('Failed to fetch > site settings data | getSiteLogo()')
      // throw new Error('Failed to fetch > site settings data | getSiteLogo()');
      return {
         url: '',
      };
   }
   const settingsData = await data.json();
   if (settingsData.data && settingsData.data !== null) {
      const siteLogo = settingsData.data.attributes.image;
      if (siteLogo && siteLogo.data !== null) {
         return {
            url: siteLogo.data.attributes.url,
         };
      }
   }
   return {
      url: '',
   };
}