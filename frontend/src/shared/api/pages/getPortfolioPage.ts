import { apiPaths2, apiURL } from "@shared/api/config";

export async function getPortfolioPage() {
   const data = await fetch(apiURL(apiPaths2({}).pagePortfolio));
   if (!data.ok) {
      console.log('Failed to fetch > Portfolio Page data | getPortfolioPage()');
      return null;
   }
   return data.json();
}