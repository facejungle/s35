import { fetcher, urlHost } from "@shared/api/config";
import { notFound } from "next/navigation";
import { CategoryDataType, CategoryType } from "../model/type";
import placeholderPic from '@public/images/480x360.png';


export async function getCategories(): Promise<CategoryType[]> {
   try {
      const categories: CategoryDataType[] = await fetcher({ host: 'api', path: 'projectsCategories' });

      if (!categories) return notFound();
      return categories.map(category => {
         const categoryImageData = category.image;
         const categoryImage = categoryImageData?.formats.thumbnail?.url;
         return {
            title: category.title,
            slug: category.slug,
            description: category.description,
            link: `${process.env.PROJECT_FOLDER}/${category.slug}`,
            image: urlHost('strapi') + categoryImage || placeholderPic
         };
      });
   } catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getCategories()] > ` + err);
      return notFound();
   }
}