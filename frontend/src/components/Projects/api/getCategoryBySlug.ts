import { fetcher, urlHost } from "@shared/api/config";
import { notFound } from "next/navigation";
import { CategoryDataType, CategoryType } from "../model/type";
import { getCategoryLink } from "./getLink";
import placeholderPic from '@public/images/480x360.png';



export async function getCategoryBySlug(categorySlug: string): Promise<CategoryType> {
   try {
      const category: CategoryDataType = await fetcher({ host: 'api', path: 'projectCategoryBySlug', slug: categorySlug });
      if (!category) return notFound();
      const categoryImage = category?.image?.formats.thumbnail?.url;
      return {
         title: category.title,
         slug: category.slug,
         link: getCategoryLink(category),
         description: category.description,
         image: urlHost('strapi') + categoryImage || placeholderPic
      };
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getCategoryBySlug()] > ` + err);
      return notFound();
   }
}