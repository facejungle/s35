import { fetcher, urlHost } from "@shared/api/config";
import { notFound } from "next/navigation";
import { ProjectCategoryDataType, TProjectCategory } from "../model/type";
import { getCategoryLink } from "..";



export async function getCategoryBySlug(categorySlug: string): Promise<TProjectCategory> {
   try {
      const category: ProjectCategoryDataType = await fetcher({ host: 'api', path: 'projectCategoryBySlug', slug: categorySlug });
      if (!category) return notFound();
      const categoryImage = category?.image?.formats.thumbnail?.url;
      return {
         title: category.title,
         slug: category.slug,
         link: getCategoryLink(category),
         description: category.description,
         image: categoryImage ? urlHost('strapi') + categoryImage : null
      };
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getCategoryBySlug()] > ` + err);
      return notFound();
   }
}