import { fetcher } from "@shared/api/config";

export async function getCategories() {
   const categories = await fetcher('api', 'projectsCategories');
   if (!categories) return null;

   return categories.data.map((category: any) => {
      return [{
         title: category.attributes.title,
         slug: category.attributes.slug,
         description: category.attributes.description,
         image: {}
      }];
   });

}