import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { CategoryDataType, CategoryType } from "../model/type";

export async function getCategoryBySlug(categorySlug: string): Promise<CategoryType> {
   const category: CategoryDataType = await fetcher({ host: 'api', path: 'projectCategoryBySlug', slugOrID: categorySlug });
   if (!category) return notFound();
   return {
      title: category.title,
      slug: category.slug,
      description: category.description,
      image: {}
   };
}