import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { CategoriesDataType, CategoryType } from ".";


export async function getCategories(): Promise<CategoryType[]> {
   const { data }: CategoriesDataType = await fetcher({ host: 'api', path: 'projectsCategories' });
   if (!data) return notFound();
   return data.map(category => {
      return {
         title: category.attributes.title,
         slug: category.attributes.slug,
         description: category.attributes.description,
         image: {}
      };
   });
}