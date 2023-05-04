import { apiPaths2, apiURL } from "@shared/api/config";

export async function getPricesPage() {
   const data = await fetch(apiURL(apiPaths2({}).pagePrices));
   if (!data.ok) {
      console.log('Failed to fetch > Prices Page data | getPricesPage()');
      return null;
   }
   return data.json();
}