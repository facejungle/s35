import { fetcher, urlHost } from "@shared/api/config";
import { notFound } from "next/navigation";
import { ProjectCategoryDataType, TProjectCategory } from "../model/type";
import { getCategoryLink } from "..";


export async function getCategories(): Promise<TProjectCategory[]> {
   try {
      const categories: [ProjectCategoryDataType] = await fetcher({ host: 'api', path: 'projectsCategories' });
      if (!categories) return notFound();
      return categories.map(category => {
         const categoryImageData = category.image;
         const categoryImage = categoryImageData?.formats.thumbnail?.url;
         return {
            title: category.title,
            slug: category.slug,
            description: category.description,
            link: getCategoryLink(category),
            image: categoryImage ? urlHost('strapi') + categoryImage : null
         };
      });
   } catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getCategories()] > ` + err);
      return notFound();
   }
}