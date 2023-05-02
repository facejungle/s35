import { apiURL, apiPaths2 } from "@shared/api/config";
import { notFound } from "next/navigation";

export async function getCategoryBySlug(categorySlug: string) {
   const data = await fetch(apiURL(apiPaths2({ slug: categorySlug }).projectCategoryBySlug));
   if (!data.ok) {
      console.log('Failed to fetch > category | getCategoryBySlug()');
      return notFound();
   }

   const category = await data.json();
   if (category === null) {
      console.log('category not found | getCategoryBySlug()');
      return notFound();
   }
   return {
      title: category.title,
      slug: category.slug,
      description: category.description,
      image: {}
   };

}