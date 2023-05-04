import { apiPaths, apiURL } from "@shared/api/config";

type siteLogoPromise = {
   url: string;
   width?: number;
   height?: number;
}

export async function getSiteLogo(): Promise<siteLogoPromise> {
   const data = await fetch(apiURL(apiPaths.settingsPath));
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