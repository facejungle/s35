import { fetcher, urlHost } from "@shared/api/config";
import { notFound } from "next/navigation";
import { CategoriesDataType, CategoryType } from "../model/type";
import placeholderPic from '@public/images/480x360.png';


export async function getCategories(): Promise<CategoryType[]> {
   const { data }: CategoriesDataType = await fetcher({ host: 'api', path: 'projectsCategories' });
   if (!data) return notFound();
   return data.map(category => {
      const categoryImageData = category.attributes.image.data;
      const categoryImage = categoryImageData?.attributes.formats.thumbnail?.url;
      return {
         title: category.attributes.title,
         slug: category.attributes.slug,
         description: category.attributes.description,
         link: `/proekty/${category.attributes.slug}`,
         image: urlHost('strapi') + categoryImage || placeholderPic
      };
   });
}