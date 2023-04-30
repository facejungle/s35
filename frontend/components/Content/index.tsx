import { apiPaths, apiURL } from "@s/api/config";

type contentPromiseType = any;

export async function getContent(): Promise<React.ReactElement> {
   const data = await fetch(apiURL(apiPaths.settingsPath));
   if (!data.ok) {
      console.log('Failed to fetch > site settings data | getSiteLogo()')
      return <></>;
   }
   const settingsData = await data.json();
   return (
      <>
      </>
   );
}