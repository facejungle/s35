import { Metadata } from "next/types";
import { apiURL, apiPaths } from "@/shared/api/config";

export default function pagePrices() {
   return (
      <>
         pagePrices
      </>
   )
}


export async function generateMetadata() {
   const data = await getPageData();
   if (!data.data || data.data === null) {
      return {
         title: 'Страница не найдена, СРУБ35.РФ - Ошибка 404',
         keywords: 'СРУБ35.РФ',
         description: 'Страница не найдена, СРУБ35.РФ application',
      };
   } else {
      return {
         title: data.data.attributes.title
      };
   }
}


async function getPageData() {
   const data = await fetch(apiURL(apiPaths.pageFront));
   const pageData = await data.json();

   return pageData;
}