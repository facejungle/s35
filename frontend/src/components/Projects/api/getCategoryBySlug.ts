import { fetcher } from "@shared/index";
import { notFound } from "next/navigation";
import { ProjectCategoryDataType, TProjectCategory } from "../model/type";
import { getCategoryLink } from "..";



export async function getCategoryBySlug(categorySlug: string): Promise<TProjectCategory | undefined> {
   try {
      const category: ProjectCategoryDataType = await fetcher({ host: 'api', path: 'projectCategoryBySlug', slug: categorySlug });
      if (!category) return notFound();
      return {
         title: category.title,
         slug: category.slug,
         link: getCategoryLink(category),
         description: category.description,
         image: category?.image
      };
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getCategoryBySlug()] > ` + err);
      return undefined;
   }
}