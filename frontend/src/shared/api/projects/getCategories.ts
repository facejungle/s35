import { apiURL, apiPaths2 } from "@shared/api/config";
import { notFound } from "next/navigation";

export async function getCategories() {
   const data = await fetch(apiURL(apiPaths2({}).projectsCategories));
   if (!data.ok) {
      console.log('Failed to fetch > category | getCategories()');
      return notFound();
   }

   const categories = await data.json();
   if (categories.data === null) {
      console.log('categories not found | getCategories()');
      return notFound();
   }
   return categories.data.map((category: any) => {
      return [{
         title: category.attributes.title,
         slug: category.attributes.slug,
         description: category.attributes.description,
         image: {}
      }];
   });

}