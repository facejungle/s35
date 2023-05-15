import { fetcher } from "@shared/index";
import { notFound } from "next/navigation";
import { ProjectCategoryDataType, TProjectCategory } from "../model/type";
import { getCategoryLink } from "..";


export async function getCategories(): Promise<TProjectCategory[] | undefined> {
   try {
      const categories: [ProjectCategoryDataType] = await fetcher({ host: 'API', path: 'PROJECTS_CATEGORIES' });
      if (!categories) return undefined;
      return categories.map(category => {
         return {
            title: category.title,
            slug: category.slug,
            description: category.description,
            link: getCategoryLink(category),
            image: category.image
         };
      });
   } catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getCategories()] > ` + err);
      return undefined;
   }
}