import { apiURL, apiPaths2, fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";

export async function getCategoryBySlug(categorySlug: string) {
   const category = await fetcher('api', 'projectCategoryBySlug', categorySlug);
   if (!category) return notFound();
   return {
      title: category.title,
      slug: category.slug,
      description: category.description,
      image: {}
   };

}