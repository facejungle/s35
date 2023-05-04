import { apiPaths, apiURL } from "@shared/api/config";

export async function getFrontPage() {
   const data = await fetch(apiURL(apiPaths.pageFront));
   if (!data.ok) {
      console.log('Failed to fetch > front page data | getFrontPageData()');
      return null;
   }
   return data.json();
}